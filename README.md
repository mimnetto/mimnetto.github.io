# Animal Crossing Villager App!

![Animal Crossing](/img/nookabel.png)   _By Mimi Netto_

## Minimum Viable Product

- [x] Built with HTML, CSS, JavaScript and jQuery
- [x] Hosted on github pages
- [x] Commits to github every day
- [x] A README.md file
- [x] Use AJAX to make a request
- [x] Implement responsive design
- [x] Have one or more complex user interface modules

## Technologies and Approach
* API
  * [ACNH API](http://acnhapi.com/)
* Responsive Design
  * I used media quarries and percentages when possible
* Graphics and Animations
  * I really wanted to use the CSS Animations
    * The ballon graphics were previously made by me via photoshop  
* Modal
  * I've used modals before but this was the first one I made from scratch.

### Struggles

* Modals
  * Even though the HTML changed in the console it would only show the first Villager data on click. I eventually found I had to five each modal a unique ID (villager.id)
  * It took me forever to get them to close! Eventually I found it since was it was inside of the model div more then one handler was being called. I had append them to the body instead.

### Failed Attempts

* Original API
  * I originally wanted to use a Dragon Ball API but could not get it to work. I'm still not sure why.
* Infinite Scrolling
  * I could get it to console.log when it reached the bottom of the page but it would not stop loading the Villagers. I eventually had to admit defeat.
* Sorting by species
  * I tried to make buttons that would split() the villagers by species but I could only get them to console.log on click and it logged them five times every click.

### Other Notes

* Since there are over 400 villagers I used split() to only display 100 of them, starting with the cats because they're really cute.
* A lot of my struggles and failed attempts were hard to lookup because they were all solutions for libraries or plugins.
* I used an [old CSS template](https://github.com/mimnetto/simple-starter-templates) of mine to get started on the css.
* The only time I asked for help is when I needed to know if something I was trying to do was actually possible. I was told this API is bare bones and some things might not work.
* Please forgive spelling mistakes and typos on this README. This is the last thing I'm doing for this project and my brain is very fried. OTL

![ga](/img/gaLogo.png) <br>

For General Assembly SEIR 810 Moss!
