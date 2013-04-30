---
layout: page
title: "Archive"
description: ""
---
{% include JB/setup %}

<table class="table table-striped">
	{% for post in site.posts %}
	<tr>
	    <td><time datetime="{{post.date|date:"%F"}}">{{post.date|date:"%b %d, %Y"}}</time></td>  
	    <td><a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a></td>
	</tr>
	{% endfor %}
</table>
