---
layout: default
title: Home
tagline: Supporting tagline
group: navigation
weight: 1
submenu:
- { anchor: "why_study_with_paul", title: "Why Study With Paul?"}

---
{% include JB/setup %}

<h1>
		Guitar &amp; Bass Instruction/Jazz Improv Studies with Paul Shumsky
	</h1>

<div class="row well">
	<div class="span4" style="float:right" >
		<img src="{{BASE_PATH}}assets/images/paul-homepage-pic.jpg"/>
	</div>
	<h4>Have you</h4>
	<ul> 
		<li>been playing for years but want to break into new sounds?</li>
		<li>always been a good chord player but really want to be a better lead guitarist?</li>
		<li>taught yourself some guitar but are afraid you've picked up some bad habits?</li>
		<li>always wanted to learn but were afraid it wouldn't be fun?</li>
	</ul>
	Then you want to take classes with Paul. Checkout some <a href="{{BASE_PATH}}testimonials.html">testimonials</a> from Paul's students
</div>


## Why Study With Paul?

* Learn from a professional musician
* Patient, experienced guidance
* All levels taught, from brand-new beginner to pro
* Jazz, pop, blues, rock, funk, world, folk, classical styles
* Jazz improvisation and theory for all instruments
* Play the songs you want to learn





## Posts/Readings

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

