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

## Technologies, Approaches, Fails and Wins

### Tech & Approaches

* API
  * [ACNH API](http://acnhapi.com/)
    * I used the URL that sorted them by array (https://acnhapi.com/v1a/), the one that was nested JSON (https://acnhapi.com/v1/) didn't work for the Villagers.
* Responsive Design
  * I used media quarries and percentages when possible
    * I only used media quarries for the text box. Percentages worked fine for the rest of it.
* Graphics and Animations
  * I really wanted to use the CSS Animations
    * The ballon graphics and background were previously made by me via photoshop for a friend  
* Modal
  * I've used modals before but this was the first one I made from scratch.

### Struggles

* Modals
  * Even though the HTML changed in the console it would only show the first Villager data on click. I eventually found I had to five each modal a unique ID (villager.id)
  * It took me forever to get them to close! Eventually I found it since was it was inside of the model div more then one handler was being called. I had append them to the body instead.
* github
  * I ran into some issues pushing to github. Thats the only reason there were not pushes on Tuesday. I thought it was because I added the README via the browser or from changing directory names locally but I think was pushing from the wrong folder.

### Failed Attempts

* Original API
  * I originally wanted to use a Dragon Ball API but could not get it to work. I'm still not sure why.
* Infinite Scrolling
  * I could get it to console.log when it reached the bottom of the page but it would not stop loading the Villagers. Many of the solutions I found required use of PHP and I was not ready to mess with that. I eventually had to admit defeat.
* Sorting by species
  * I tried to make buttons that would split() the villagers by species but I could only get them to console.log on click and it logged them five times every click.
* Birthday App
  * I originally wanted to make an app that let the user search a date to find the Villagers who had a birthday on that date but I could not get the API to call by date.

### Wins!

* Super stocked about how much my jQuery improve during this project!
* I enjoyed this project a lot. I've been going through ups and downs with this class but knowing I could do something like this, all from scratch, really reaffirmed my desire to become a developer.
* I'm really happy with my modal designs. I've worked a lot with CSS in the past but thought I had lost my touch. This class had helped me understand the more technical side of it and what the attributes actually mean. I'm excited to see myself improving again.

### Other Notes

* Since there are over 400 villagers I used split() to only display 100 of them, starting with the cats because they're really cute.
* I didn't make a mockup because I wasn't sure what I was going to be able to achieve with the API.
* A lot of my struggles and failed attempts were hard to lookup because they were all solutions for libraries or plugins.
* I used an [old CSS template](https://github.com/mimnetto/simple-starter-templates) of mine to get started on the css.
* Fonts from Adobe
* The only time I asked for help is when I needed to know if something I was trying to do was actually possible. I was told this API is bare bones and some things might not work.
* Please forgive spelling mistakes and typos on this README. This is the last thing I'm doing for this project and my brain is very fried. OTL
* I went from playing ACNH 10 hours day to 20 minutes a day (if I'm lucky)

![ga](/img/gaLogo.png) <br>

For General Assembly SEIR 810 Moss!
