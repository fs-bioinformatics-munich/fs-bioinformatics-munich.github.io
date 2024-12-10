---
permalink: /about-us/
title: "Über uns"
---

![Die Fachschaft](/assets/images/bio-photo.jpg)


## Mitglieder
<ul>
{% for member in site.members %}
  {% if member.active %}
    <li><a href="{{member.url}}">{{ member.name }}</a>: {{ member.position }}</li>
  {% endif %}
{% endfor %}
</ul>

## Alumni
<ul>
{% for member in site.members %}
  {% if member.active == false %}
    <li><a href="{{member.url}}">{{ member.name }}</a> ({{ member.active_during }})</li>
  {% endif %}
{% endfor %}
</ul>
