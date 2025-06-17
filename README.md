# WAPH-Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

## Student

**Name:** Milo Ginn

**Email:** [ginnms@mail.uc.edu](mailto:ginnms@mail.uc.edu)

![Milo-Headshot](assets/img/headshot.jpg)


# Individual Project 1 - Front-end Web Development with a Professional Profile Website and API Integration

## Overview

The objective of this assignment was to understand the basics of web development. This includes web design, technologies such as Bootstrap and jQuery, as well as how to reference external APIs to retrieve data.

Find both the site and the source code here: 

[Website](https://ginnms.github.io) - [GitHub](https://github.com/ginnms/ginnms.github.io)


## General Requirements

### Professional Profile

This task was fairly straightforward, I found a bootstrap template which fit my purposes and created a page with all my relevant information under the [About Me]() page.

### WAPH Page

Unsure of what exactly to include here, so I included the course description from canvas as well as links to the GitHub repo containing each lab. 

## Non-technical Requirements

### Bootstrap

As stated above, the resume page was implemented using bootstrap and a template which implements a scrolling navbar for each section as well as formatting and styling for elements.
Ideally I would have implemented the same styling on the other pages as well, but as discussed in the JS Framework section I spent too long on work which was ultimately not used and 
had to rush the final product.

### Page-Tracker

On the main page, the flag counter is included in the sidebar. [flagcounter.com](https://flagcounter.com/) provides an html element which can be added directly to the webpage.

## Technical Requirements

### JS Framework

This section was the most challenging. Originally I planned on using AngularJS, which I have some previous experience with, but this proved to be too ambitious to properly implement in the timeframe for this project. Part of this is that my last experience was with Angular 17 or lower, and since then they have deprecated many features and redone much of their documentation. Additionally it proved to be more of a challenge to set up GitHub actions to deploy the site to Pages. Lastly implementing both Angular and jQuery was counterintuitive and—from what I've read—bad practice. 

These factors led to me dropping Angular and utilizing only jQuery for my final submission. The remnants of my Angular project are available [here](https://github.com/ginnms/ginnms.github.io/tree/angular). There are many features I would like to improve about the project currently deployed to Pages, but with the time crunch imposed by spending so much time on Angular I'm shipping it as is.

### Public Web APIs

Both jokeapi and weatherbit are implemented with some basic functionality to display text on the page. Under the hood there is some basic logic to interpret the response jsons to display the correct fields. 

### JavaScript Cookies

With some minimal edits to the code provided in lecture, the cookies feature is implemented to save when the user opens the main page and display that info on the next visit. This feature could be improved by changing formatting settings to present the time and date in a more concise method.

