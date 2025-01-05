---
permalink: /about-us/
title: "Über uns"
---

![Die Fachschaft](/assets/images/die-fachschaft.jpeg)

Die Fachschaft setzt sich ehrenamtlich dafür ein, die Studienbedingungen für alle Bioinformatik-Studierenden zu verbessern.

Wenn du mehr darüber erfahren möchtest, wie wir das machen, schau [hier](/wiki/student_council) vorbei.

Wenn du selbst mithelfen möchtest, haben wir [hier](/wiki/student_council/join-us) etwas für dich.


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
