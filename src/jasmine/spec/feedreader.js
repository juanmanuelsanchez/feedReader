/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* This is our first test to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     * In this case we're going to iterate through allFeeds JSON
     * to help verifying that RSS Feeds "are defined" and
     * RSS Feeds "url are defined" and different from null.
     */

     describe('RSS Feeds', function() {


        /* Declares the variables we're using to iterate
         * through allFeeds JSON.
         */
         var feed,
             url,
             name,
             i=0;


       /* To help the test suite to DRY up any repeated
        * setup we're using afterEach function.
        * Restores the variables to their original state.
        */
        afterEach(function() {

            feed,
            url,
            name,
            i=0;

        });

       /* Checks that the url property provided
        * in allFeeds JSON is defined in all cases and different from null.
        * We're iterating through allFeeds JSON with a for loop.
        */
        it('and allFeeds-url are defined', function() {

            for(i; i<allFeeds.length; i++) {
                feed=allFeeds[i];
                url=feed.url;

                expect(feed).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
                expect(url).toBeDefined();
                expect(url).not.toBeNull();

            }

        });

       /* Checks that the name property provided in allFeeds
        * JSON is defined in all cases and different from null.
        * We're iterating through allFeeds JSON with a for loop.
        */
        it('and allFeeds-name are defined', function() {

            for(i; i<allFeeds.length; i++) {

                feed=allFeeds[i];
                name=feed.name;

                expect(name).toBeDefined();
                expect(name).not.toBeNull();

            }

        });

  });



    /* This is the second test suite and tests the interactive
     * nature of the menu.
     */
    describe('The menu', function() {

       /* Checks that menu is hidden by default with JQuery .hasClass()
        * .parent() methods. The 'menu-hidden' class evaluates to true on the body
        * by default.
        */

        //Holds the menu
        var menu=$('.menu.hidden');

        it('is hidden by default ', function () {

           expect($('body').hasClass('menu-hidden')).toBeTruthy();
           expect($(menu).parent().hasClass('menu-hidden')).toBeTruthy();

        });

       /* Checks that menu displays when clicking .menu-icon-link
        * with JQuery .trigger() to perform a click event, and
        * .hasClass() methods.
        */

        describe('displays and hides when clicked', function() {

            //Holds the menu
            var menu=$('.menu.hidden');

            //Holds the menu-icon-link of the DOM
            var menuIcon = $('.menu-icon-link');

            /* Evaluates to  false the presence of 'menu-hidden' class
             * in the body when clicking the menu-icon-link through
             * JQuery .trigger() method.
             */
            it('displays when clicked', function () {

                //performs a click event
                $(menuIcon).trigger( "click" );
                expect($('body').hasClass('menu-hidden')).toBeFalsy();
                expect($(menu).parent().hasClass('menu-hidden')).toBeFalsy();

            });

            /* Evaluates to true the presence of 'menu-hidden' class in
             * the body when clicking again the menu-icon-link through
             * JQuery .trigger() method.
             */
            it('hides when clicked again', function () {

                //performs a click event
                $(menuIcon).trigger( "click" );
                expect($('body').hasClass('menu-hidden')).toBeTruthy();
                expect($(menu).parent().hasClass('menu-hidden')).toBeTruthy();

            });

        });

    });

  /* This is the third test suite that ensures when the loadFeed function is
   * called and completes its work, there is at least a single .entry element
   * within the .feed container.
   */
   describe('Initial entries', function() {

       /* Declares the variables we're using to
        * load a feed, hold a reference to the
        * .feed container and to the .entry class
        */
       var feedId= 0,
           container = $('.feed'),
           entry;

       //Loads a feed passing an ID
       beforeEach(function(done) {

          loadFeed(feedId,done);

       });

     /* This test checks that when the loadFeed function is
      * called and completes its work, .feed container has
      * content. We're using JQuery content(), :has(),
      * and .find() methods to traversing the DOM.
      */
       it('has at least a single entry', function(done) {
           entry=$(container).contents().find('.entry');
           expect(entry.length).toBeGreaterThan(0);
           expect(container.contents().find('.entry')).toBeTruthy();
           expect($(".feed:has('.entry-link')")).toBeTruthy();

           done();
       });
   });


  /* This is the fourth test suite and ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   */
    describe('New feed selection', function() {

      /* Declares the variables that are going to be used
       * throughout the test.
       */
        var firstFeedName,
            secondFeedName,
            defaultFeedName,
            firstFeedId=0,
            secondFeedId=1,
            firstFeedTitle=null,
            secondFeedTitle=null;


       /* Jasmine beforeEach method loads the feed with an initial
        * ID and passes a callback function to load another feed with
        * different ID.
        */
        beforeEach(function(done) {

            loadFeed(firstFeedId,function() {

                //Stores the header-title of the first feed
                firstFeedTitle=$('.header-title').text();

                loadFeed(secondFeedId, function() {
                    //Stores the value of the name property of the second feed
                    secondFeedName=allFeeds[secondFeedId].name;

                    done();

                });
            });
        });

       /* afterAll method restores loadFeed function to the default.
        */
        afterAll(function(callback){

           loadFeed(firstFeedId, function() {

               callback();

           });
        });

      /* This test checks that the values of the first feed and the
       * second feed are not equal.
       */
        it('produces new content', function (done) {

            //Stores the header-title of the second feed
            secondFeedTitle=$('.header-title').text();
            //Stores the name property of the first feed
            firstFeedName=allFeeds[firstFeedId].name;

            //Checks the differences
            expect(firstFeedName).toMatch('Udacity Blog');
            expect(secondFeedName).toMatch('CSS Tricks');
            expect(firstFeedName).not.toEqual(secondFeedName);
            expect(firstFeedTitle).not.toEqual(secondFeedTitle);

            done();

        });

      /* This test checks that the values of the loadFeed function are
       * restored to the default.
       */

        it('restores the loadFeed to the default', function (callback) {

            defaultFeedName= allFeeds[firstFeedId].name;
            expect(defaultFeedName).toMatch('Udacity Blog');

            callback();
        });

    });


}());
