# Readme for the SCSS strategy

Angular needs an Angular CSS strategy.
One that leverages the MVC/Component architecture yet truly flexible, specifity conscious, lightweight and disciplined.

Don't taze me bro! 
BTW I've set everything to display:flex because 75% of your layout is flex... You are using flex layout aren't you?

How do I actually determine which style is the most specific?
The industry uses a four-category system for CSS selector value. The selector with the most specific value get the CSS rule applied to it.

+-----------------+-----------------+-----------------+-----------------+
| style attribute |        ID       |    classname    |     element     |
|        0        |        0        |        0        |        0        |
+-----------------+-----------------+-----------------+-----------------+



