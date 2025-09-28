#!/bin/bash

# Script to check for hardcoded absolute paths that don't use BASE_URL
# This can be run locally or in CI

set -e

echo "🔍 Scanning for hardcoded absolute paths that don't use BASE_URL..."

# Exit code for tracking failures
EXIT_CODE=0

# Function to check a file for problematic patterns
check_file() {
    local file="$1"
    local file_type="$2"
    
    echo "Checking $file_type: $file"
    
    # Check for hardcoded absolute paths in various contexts
    if grep -n -E '(href=["\x27]/[^"\x27]*["\x27]|src=["\x27]/[^"\x27]*["\x27]|action=["\x27]/[^"\x27]*["\x27]|url\(["\x27]/[^"\x27]*["\x27])' "$file" | grep -v 'import.meta.env.BASE_URL' | grep -v 'document.baseURI' | grep -v 'process.env.ASTRO_BASE'; then
        echo "❌ Found hardcoded absolute paths in $file:"
        grep -n -E '(href=["\x27]/[^"\x27]*["\x27]|src=["\x27]/[^"\x27]*["\x27]|action=["\x27]/[^"\x27]*["\x27]|url\(["\x27]/[^"\x27]*["\x27])' "$file" | grep -v 'import.meta.env.BASE_URL' | grep -v 'document.baseURI' | grep -v 'process.env.ASTRO_BASE'
        EXIT_CODE=1
    fi
    
    # Check for hardcoded site URLs
    if grep -n -E 'https://bioinfo\.fs\.lmu\.de/[^"\x27]*["\x27]' "$file" | grep -v 'import.meta.env.BASE_URL' | grep -v 'document.baseURI'; then
        echo "❌ Found hardcoded site URLs in $file:"
        grep -n -E 'https://bioinfo\.fs\.lmu\.de/[^"\x27]*["\x27]' "$file" | grep -v 'import.meta.env.BASE_URL' | grep -v 'document.baseURI'
        EXIT_CODE=1
    fi
    
    # Check for template literals with hardcoded paths (simplified regex)
    if grep -n '${.*}/' "$file" | grep -v 'import.meta.env.BASE_URL' | grep -v 'document.baseURI' | grep -v 'baseUrl'; then
        echo "❌ Found template literals with hardcoded paths in $file:"
        grep -n '${.*}/' "$file" | grep -v 'import.meta.env.BASE_URL' | grep -v 'document.baseURI' | grep -v 'baseUrl'
        EXIT_CODE=1
    fi
}

# Check ALL files in src directory
find src -type f | while read -r file; do
    check_file "$file" "Source"
done

# Check for specific problematic patterns in common files
echo "🔍 Checking specific problematic patterns..."

# Check for window.location with hardcoded paths (but allow base + 'path' pattern)
if grep -r "window\.location" src/ | grep -v 'import.meta.env.BASE_URL' | grep -v 'document.baseURI' | grep -v "base \+"; then
    echo "❌ Found window.location with hardcoded paths:"
    grep -r "window\.location" src/ | grep -v 'import.meta.env.BASE_URL' | grep -v 'document.baseURI' | grep -v "base \+"
    EXIT_CODE=1
fi

# Check for meta refresh with hardcoded paths
if grep -r "http-equiv.*refresh" src/ | grep -v 'import.meta.env.BASE_URL' | grep -v 'document.baseURI'; then
    echo "❌ Found meta refresh with hardcoded paths:"
    grep -r "http-equiv.*refresh" src/ | grep -v 'import.meta.env.BASE_URL' | grep -v 'document.baseURI'
    EXIT_CODE=1
fi

# Check for canonical links with hardcoded paths
if grep -r "rel.*canonical" src/ | grep -v 'import.meta.env.BASE_URL' | grep -v 'document.baseURI'; then
    echo "❌ Found canonical links with hardcoded paths:"
    grep -r "rel.*canonical" src/ | grep -v 'import.meta.env.BASE_URL' | grep -v 'document.baseURI'
    EXIT_CODE=1
fi

# Check for hreflang with hardcoded paths (but allow template literals and comments)
if grep -r "hreflang" src/ | grep -v 'import.meta.env.BASE_URL' | grep -v 'document.baseURI' | grep -v '\$\{' | grep -v '<!--'; then
    echo "❌ Found hreflang with hardcoded paths:"
    grep -r "hreflang" src/ | grep -v 'import.meta.env.BASE_URL' | grep -v 'document.baseURI' | grep -v '\$\{' | grep -v '<!--'
    EXIT_CODE=1
fi

if [ $EXIT_CODE -eq 0 ]; then
    echo "✅ No hardcoded absolute paths found!"
else
    echo "❌ Found hardcoded absolute paths that don't use BASE_URL!"
    echo ""
    echo "💡 To fix these issues:"
    echo "   - Replace hardcoded paths with \`\${import.meta.env.BASE_URL}/path\`"
    echo "   - Use \`document.baseURI\` for client-side JavaScript"
    echo "   - Ensure all internal links respect the BASE_URL"
    echo ""
    echo "🔧 Examples of correct usage:"
    echo "   ✅ href={\`\${import.meta.env.BASE_URL}/en/page\`}"
    echo "   ✅ window.location.replace(base + 'en/')"
    echo "   ✅ <link rel=\"canonical\" href={\`\${import.meta.env.BASE_URL}en/\`}>"
    echo ""
    echo "❌ Examples of incorrect usage:"
    echo "   ❌ href=\"/en/page\""
    echo "   ❌ window.location.replace('/en/')"
    echo "   ❌ <link rel=\"canonical\" href=\"/en/\">"
fi

exit $EXIT_CODE
