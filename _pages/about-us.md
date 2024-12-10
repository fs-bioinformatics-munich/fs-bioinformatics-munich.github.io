---
permalink: /about-us/
title: "Über uns"
---

![Die Fachschaft](/assets/images/bio-photo.jpg)


## Mitglieder
<ul>
{% for member in site.members %}
  <li><a href="{{member.url}}">{{ member.name }}</a>: {{ member.position }}</li>
{% endfor %}
</ul>
