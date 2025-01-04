---
permalink: /about-us/
title: "Über uns"
---

![Die Fachschaft](/assets/images/die-fachschaft.jpeg)


## Mitglieder
<ul>
{% assign sorted = site.members | sort: 'rank' %}
{% for member in sorted %}
  {% if member.active %}
    <li>
      <b>{{ member.title }}</b>: {{ member.position }}</li>
  {% endif %}
{% endfor %}
</ul>

## Alumni
<ul>
{% assign sorted = site.members | sort: 'active_during' %}
{% for member in sorted reversed %}
  {% if member.active == false %}
    <li><b>{{ member.title }}</b> ({{ member.active_during | array_to_sentence_string: 'und' }})</li>
  {% endif %}
{% endfor %}
</ul>
