---
layout: home
title: Beyond Basics Guitar
---
{% include JB/setup %}

<div class="well">

	<h3>Have you</h3>
	<ul> 
		<li>been playing for years but want to break into new sounds?</li>
		<li>always been a good chord player but really want to be a better lead guitarist?</li>
		<li>taught yourself some guitar but are afraid you've picked up some bad habits?</li>
		<li>always wanted to learn but were afraid it wouldn't be fun?</li>
	</ul>
	<em>"...Regardless of what we're working on,  I leave every lesson feeling like I've learned something new, practical, and essential."    – J. P., Boston MA</em>
	<br/>
         <a href="{{BASE_PATH}}testimonials.html">more testimonials</a>.
</div>



<div class="row">
  {% for post in site.posts limit:4 %}
  <div class="span4">
    <a href="{{ BASE_PATH }}{{ post.url }}"><h2>{{ post.title }}</h2></a>
	<p>&nbsp;</p>
	<p>
	{{ post.content | strip_html | truncatewords:20 }}
	</p>
	<p>
	<a class="btn" href="{{ BASE_PATH }}{{ post.url }}">Read more...</a>
	</p>
  </div>
  {% endfor %}
</div>




