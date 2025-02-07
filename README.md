This repo contains the code for the website of the Munich bioinformatics student council. The website is built using Jekyll and hosted on GitHub Pages. The website is available at [https://fs-bioinformatics-munich.github.io/](https://fs-bioinformatics-munich.github.io/).

# Contributing

If you want to contribute to the website, you only need to know markdown.
If you are unfamiliar with markdown, you can find a good tutorial [here](https://www.markdowntutorial.com/). Spoiler: it is super easy.

## Permissions

If you are planning 

### Contributing via a fork

### Contributing via repo write access

## Repository structure

The structure is pretty straightforward, but here is a basic overview:

- All pages except events are located in `_pages`
  - Wiki pages are located in `_pages/wiki`
- Events are located in `_posts`
  - The file name *must* start with the event date
  - The file name will be contained in the event URL
- All images are stored in `assets/images`
  - Other asset types would be stored in `assets/<asset-type>`, but so far there are none
- The page structure is defined in `_data/navigation.yml`
  - This includes both the top navigation bar and the wiki structure

## If you just want to add some content

In this case, there is no need to clone the repository to your computer. You can directly make all the changes in the browser.
Of course, if you prefer to work locally, you can do so.

### Manipulating existing pages/events

You can find the files for any page following the described repository structure.
Once you open the file in GitHub (like [this one](https://github.com/fs-bioinformatics-munich/fs-bioinformatics-munich.github.io/blob/master/_pages/impressum.md)), you will see the preview of the document. This will look very similar to the page on the final website.
You will notice a little table on the top of the preview. This is the "Frontmatter" and contains metadata about the document - it will not be shown on the website.

Now you can switch to the "Code" view of the file ([example](https://github.com/fs-bioinformatics-munich/fs-bioinformatics-munich.github.io/blob/master/_pages/impressum.md?plain=1)). Here you can find the plain markdown code, that is the base for the preview and the final website. The mentioned Frontmatter is located on the top of this page, delimited using `---`. 

> [!WARNING]
Please do not alter the Frontmatter, if you do not know what you are doing.

If you want to perform changes, you can do so by clicking on the pencil icon in the top right corner of the document. During editing, you can always check the Preview to ensure the final result looks like you want it to. If you are happy with your changes, use the green "Commit changes" button in the top right corner. 

### Adding page

Pages are generally managed in the [_pages](https://github.com/fs-bioinformatics-munich/fs-bioinformatics-munich.github.io/tree/master/_pages) directory.
Creating pages outside of this directory will not work.

#### Adding a Wiki page

### Adding events

## If you want to run a custom instance of the website
This is recommended if you wish to perform more extensive structural changes that need proper testing before publishing.
If this is too complicated, please ask one of the more experienced Website developers (currently only Nico) to test it for you.

### Setting up the environment
#### GitHub CodeSpace
This repository comes with a development container setup using Docker. The fastest way to start is to open this repository in a CodeSpace (GitHub's cloud-based development environment). It will automatically install all dependencies and start the development server.

#### Local Development inside the Development Container
If you want to develop locally, you can also use the development container. You need VS Code and Docker installed on your machine. You can follow [this guide](https://code.visualstudio.com/docs/devcontainers/containers) to get started with development containers in VS Code.

#### Manual Installation
If you don't want to use the development container, you can also install the dependencies on your machine. You need Ruby and Bundler installed. You can install the dependencies by running `bundle install`. You can start the development server by running `bundle exec jekyll serve`.

### Live preview
Once the development server is running, you can preview the website by opening [http://localhost:4000/](http://localhost:4000/) in your browser.
