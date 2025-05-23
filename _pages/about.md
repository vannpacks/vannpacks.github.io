---
permalink: /
title: "WenFan Wang"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am a graduate student at **National Taiwan University** focusing on tools that enhance creativity for designers and artists. Previously I worked as a technical artist and lead at Moonshine Animation developing real-time graphics solutions.

## Selected Publications
<ul>
{% for post in site.publications limit:3 %}
  {% include archive-single.html %}
{% endfor %}
</ul>
<p class="text-right"><a href="{{ '/publications/' | relative_url }}">More publications...</a></p>

## Experience
- M.S. in Computer Science, National Taiwan University (2023&ndash;present)
- Unreal Engine Technical Lead, Moonshine Animation (2022)
- Unreal Engine Technical Artist, Moonshine Animation (2020&ndash;2021)
- B.S. in Psychology, National Taiwan University (2014&ndash;2018)

See the full <a href="{{ '/cv/' | relative_url }}">CV</a> for more details.
