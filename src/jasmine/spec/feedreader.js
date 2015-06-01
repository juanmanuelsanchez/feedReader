/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        var feed=null;
        var url=null;
        var name=null;
        var i=0;

        beforeEach(function() {

            for(i; i<allFeeds.length; i++){

                feed=allFeeds[i];
                url=feed.url;
                name=feed.name;

            }
        });


        afterEach(function() {

            feed=null;
            url=null;
            name=null;
            i=0;

        });


        it('are defined', function() {
            expect(feed).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('url are defined', function() {
            expect(url).toBeDefined();
            expect(url).not.toBeNull();

        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('names are defined', function() {
            expect(name).toBeDefined();
            expect(name).not.toBeNull();

        });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         *
         * In this case describe blocks are nested with specs defined
         * at different levels.
         */

    describe('The menu', function() {

        it('is hidden by default ', function () {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         * The .menu-icon-link must be clicked twice over a span of 2 seconds
         * to check that the menu is hidden by default and that
         * it changes when clicked.
         */

        describe('The menu changes visibility', function () {

            var menuIcon = $('.menu-icon-link');
            var value = 0;

            beforeEach(function (done) {

                menuIcon.on('click', function () {

                    done();
                });

            });


            if (value == 0) {

                it('displays when clicked', function (done) {

                    expect($('body').hasClass('menu-hidden')).toBeFalsy();
                    done();
                });

                value++;
            }

            if (value > 0) {

                it('hides when clicked again', function (done) {
                    expect($('body').hasClass('menu-hidden')).toBeTruthy();

                    done();
                    value = 0;

                });
            }

        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test wil require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    describe('Initial Entries', function() {

        var container= $('.feed');
        var containerFirst=container[0];
        var feedId=0;
        var feedUrl=allFeeds[feedId].url;
        var feed = new google.feeds.Feed(feedUrl);





       beforeEach(function(done) {

           loadFeed(feedId,function() {
               done();
           });
       });

        it('are ready', function(done) {
            expect(containerFirst).not.toBeNull();
            expect(container.length).toBeGreaterThan(0);
            console.log(containerFirst.childNodes);
            console.log(containerFirst.childNodes.length);
            console.log(feed);
            console.log(feedId);

            done();

        });
    });

    /* TODO: Write a new test suite named "New Feed Selection"

     /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     * After clicking The .menu-icon-link, the .feed-list should be
     * clicked twice to ensure that when a new feed is loaded
     * the content changes.
     */

    describe('New Feed Selection', function() {

        var feedList= $('.feed-list');
        var count = 0;
        var container= $('.feed');
        var containerFirst=container[0];
        var feedId=0;
        var feedUrl;
        var feed;
        var feedName;
        var id;



        beforeEach(function (done) {

            feedList.on('click','a', function () {

                done();
            });
        });

        if (count==0) {

            it('displays default content', function (done) {


                feedUrl=allFeeds[feedId].url;
                feed = new google.feeds.Feed(feedUrl);

                expect(containerFirst).not.toBeNull();
                expect(container.length).toBeGreaterThan(0);
                expect(feedId).toEqual(0);
                console.log(feed);
                console.log(feedUrl);
                console.log(feedId);
                done();

                feedId++;
            });

            count++;

        }

        if (count>0) {

            it('displays another content', function (done) {

                feedUrl=allFeeds[feedId].url;
                feed = new google.feeds.Feed(feedUrl);
                feedName=allFeeds[feedId].name;
                id=allFeeds[feedId].id;



                expect(feedId).toBeGreaterThan(0);
                expect(id).toBeGreaterThan(0);
                expect(feedName).toMatch("CSS Tricks");

                console.log(feed);
                console.log(feedUrl);
                console.log(feedId);
                console.log(id);
                console.log(feedName);
                done();
                count = 0;
                feedId=0;


            });
        }

    });

}());
