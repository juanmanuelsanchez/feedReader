# feedReader

## Project Description
  --------------------
Creates a feed reader application with articles taken from Udacity Blog, CSS Tricks,
HTML5 Rocks and Linear Digressions. Firstly it'll show a list view of articles taken 
Udacity Blog by default. At the top left corner there's a .menu-icon-link to display 
a menu with other feed suggestions from other sites. These suggestions are 
clickable and, when clicked, the app will show additional articles taken from those sites.
The program is implemented with Test Driven development pattern, so when the user is running the
application there's a group of test suites that are running at the same time. 
In order to run the application follow the instructions detailed on the second paragraph.
In order to run the application and pass test suites that are implemented, the user should 
take some steps that are detailed on the third paragraph.


## Instructions to run the program
  ---------------------------------
1) Click the `index.html` file to run the application.
2) Click on one of the suggestions listed to read the related article.
3) Click on the top left corner's .menu-icon-link to display the feed list view menu,
   and choose another one to read.
   
## Instructions to test the program
  ---------------------------------
The user should perform the some steps to make the application pass the 
different test suites that are implemented to test its features. **The steps should
be done over a recommended span of 2-4 seconds.**
We will test that the data that is needed to run the program is perfectly defined;
that the feeds list view menu is hidden by default and that it displays when clicked;
that the feeds container will have at least a single entry element when `loadFeed`
function is called and completed and, finally, that when a new feed is loaded
by the `loadFeed` function, the content actually changes. 

1) Click the `index.html` file to run the application.
2) Click on the top left corner's icon to display the feed reader list view menu.
3) Click on the top left corner's icon to hide the feed reader list view menu.
4) Repeat the second step.
5) When the menu is displayed click on `CSS Tricks` feed reader suggestion.


## Packages
  ---------
* _src_ folder contains the development version of the program, which is run by default when
  `index.html` is clicked as mentioned above.

## Dev dependencies
   ----------------
*  JQuery.
*  Handlebars 2.0.0.
*  Jasmine-2.1.2.
*  Icomoon fonts.
*  normalize.css

   
## Acknowledgements
  -----------------
These are the list of Web sites, books, forums, blog posts, github repositories etc, 
that I referred to or used in this submission:
* JavaScript Testing course at Udacity.
* [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
* [Jasmine documentation](http://jasmine.github.io/2.2/introduction.html)
* [Handlebars](http://handlebarsjs.com/)


