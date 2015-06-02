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
         * empty. To help the test suite to DRY up any repeated
         * setup we're using beforeEach and afterEach functions.
         * In this case we're iterating through allFeeds JSON
         * to help verifying that RSS Feeds "are defined" and
         * RSS Feeds "url are defined".
         */
        var feed=null,
            url=null,
            name=null,
            i=0;

        beforeEach(function() {

            for(i; i<allFeeds.length; i++) {

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
         * All the url provided in allFeeds JSON are defined and
         * different from null.
         */

        it('url are defined', function() {
            expect(url).toBeDefined();
            expect(url).not.toBeNull();

        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         * All the names provided in allFeeds JSON are defined and
         * different from null.
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
         *
         * The .menu-icon-link must be clicked twice over a
         * recommended span of 2-3 seconds to check that the menu is
         * hidden by default and that it displays when clicked.
         * The first click will display the menu and the second
         * will hide it.
         * As we're testing an eventual click event of the user,
         * testing asynchronous operations is required.
         * By default jasmine will wait for 5 seconds for an
         * asynchronous spec to finish before causing a timeout
         * failure.
         * The variable "value" is set to 0 by default and it
         * allows us to test the absence of 'menu-hidden' class on
         * the 'body' element and, as the variable "value" changes
         * its value to 1, we'll test the presence of 'menu-hidden' class
         * on the second click.
         */

        describe('The menu changes visibility', function() {

            var menuIcon = $('.menu-icon-link'),
                value = 0;

            beforeEach(function(done) {

                menuIcon.on('click', function () {

                    done();
                });

            });


            if (value == 0) {

                it('displays when clicked', function(done) {

                    expect($('body').hasClass('menu-hidden')).toBeFalsy();
                    done();
                });

                value++;
            }

            if (value > 0) {

                it('hides when clicked again', function(done) {
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
        *
        * In this test suite we're checking, with the help of asynchronous
        * testing operations, that the .feed container is not
        * empty through a reference to its childNodes. They're defined and
        * their length property is greater than 0.
        */

    describe('Initial Entries', function() {

        var container= $('.feed'),
            containerFirst=container[0],
            feedId= 0,
            feedUrl=allFeeds[feedId].url,
            feed = new google.feeds.Feed(feedUrl);


        beforeEach(function(done) {

            loadFeed(feedId,function() {
                done();
            });
        });

        it('are ready', function(done) {
            expect(containerFirst).toBeDefined();
            expect(containerFirst).not.toBeNull();
            expect(container.length).toBeGreaterThan(0);
            expect(containerFirst.childNodes.length).toBeGreaterThan(0);
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
        *
        * After clicking The .menu-icon-link, the .feed-list items should be
        * clicked twice: first, necessarily 'CSS tricks' link should be
        * clicked to ensure not only that when a new feed is loaded
        * the content changes, but that it matches the 'name' property
        * of the selected item ('CSS tricks') as defined in allFeeds JSON.
        * This test is performed with the help of asynchronous testing
        * operations.
        */

    describe('New Feed Selection', function() {

        var feedList= $('.feed-list'),
            count = 0,
            container= $('.feed'),
            containerFirst=container[0],
            feedId=0,
            feedUrl,
            feed,
            feedName,
            id;



        beforeEach(function (done) {

            feedList.on('click','a', function () {

                done();
            });
        });

        if (count==0) {

            it('displays default content', function (done) {


                feedUrl=allFeeds[feedId].url;
                feed = new google.feeds.Feed(feedUrl);
                feedName=allFeeds[feedId].name;

                expect(containerFirst).not.toBeNull();
                expect(container.length).toBeGreaterThan(0);
                expect(feedId).toEqual(0);
                expect(feedName).toMatch('Udacity Blog');
                console.log(feed);
                console.log(feedUrl);
                console.log(feedId);
                console.log(feedName);
                done();

                feedId++;
            });

            count++;

        }

        if (count>0) {

            it('displays another content', function(done) {

                feedUrl=allFeeds[feedId].url;
                feed = new google.feeds.Feed(feedUrl);
                feedName=allFeeds[feedId].name;
                id=allFeeds[feedId].id;



                expect(feedId).toBeGreaterThan(0);
                expect(id).toBeGreaterThan(0);
                expect(feedName).toMatch('CSS Tricks');

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
