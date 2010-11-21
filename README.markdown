# Welcome to UX/Spoke

Copyright (c) 2010 Andrew Peterson. All Rights Reserved.

The UX/Spoke tool is designed to help you explore many of the different
usability tools out there. It is designed to force you to approach it
in a certain way-- what questions am I asking now-- and spur you to
consider other tools that you may not be using.

This product was provoked by working with people and teams that found
one tool and hammered it to death--
  "How do we add metrics to this?",
  "What do our metrics tell us to do next?"
  "Let's do usability testing every week."
  "Let's make sure we're talking to our users every week."

Although none of those are necessarily bad ideas, it's worth stepping back
to get the big picture.

Go to http://uxspoke.com to check it out.


# Technical

It's all Javascript, using Canvas for the wheel. I'm not sure I meant to
make a lotto wheel, but I stumbled across one, thought it would be fun to
build (but probably not usable)... and here we are. I think there are probably
other interfaces that would be more intuitive, but what the heck-- is it
usable _enough_?

I use Csster (http://github.com/ndp/csster) and jQuery (http://jQuery.com).
I don't use jQueryUI (except for a single easing function, which-- to be honest--
would be good to factor away).

I also used this as a playground to learn about:
- more canvas functionality and animations
- trig
- easing in jQuery (and in animations in general)
- HTML5 fonts
- color calculations and developing a "color factory" Javascript helper.
- different Ux tools (duh)


# Research

Micro-apps: This project fits into my investigation into "micro-apps"
What can I build in just a few hours that is useful in its own right?
I used to have 24 minute BART ride and challenge myself to find "bite
size" pieces of code to exactly fit the window.

Randomness in UIs: where can randomness be incorporated into UIs and add
value? In UX/Spoke, questions are distributed randomly on the wheel on each
page load, and it is spun to reveal a different question. Many earlier
iterations involved randomizing colors as well, but this proved too much--
at least for me with my rusty visual design chops.

Visual Design: I'm also working on being a better visual designer.

Comments, thoughts always welcome,
Andy