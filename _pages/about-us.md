---
permalink: /about-us/
title: "About us"
---

![Die Fachschaft](/assets/images/bio-photo.jpg)


## Members
<ul>
{% for member in site.members %}
  <li>{{ member.name }}: {{ member.position }}</li>
{% endfor %}
</ul>
