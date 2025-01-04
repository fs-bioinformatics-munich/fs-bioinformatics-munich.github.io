---
permalink: /about-us/
title: "Über uns"
---

![Die Fachschaft](/assets/images/bio-photo.jpg)


## Mitglieder
<ul>
{% assign sorted = site.members | sort: 'rank' %}
{% for member in sorted %}
  {% if member.active %}
    <li>
      <a href="{{member.url}}">{{ member.title }}</a>: {{ member.position }}</li>
  {% endif %}
{% endfor %}
</ul>

## Alumni
<ul>
{% for member in site.members %}
  {% if member.active == false %}
    <li><a href="{{member.url}}">{{ member.title }}</a> ({{ member.active_during }})</li>
  {% endif %}
{% endfor %}
</ul>
