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
     * empty.
     * In this case we're iterating through allFeeds JSON
     * to help verifying that RSS Feeds "are defined" and
     * RSS Feeds "url are defined".
     */
    var feed,
        url,
        name,
        i=0;


    /* To help the test suite to DRY up any repeated
     * setup we're using afterEach functions
     *
     */
    afterEach(function() {

      feed=null;
      url=null;
      name=null;
      i=0;

    });


    it('and all feeds-Url are defined', function() {

      for(i; i<allFeeds.length; i++) {

        feed=allFeeds[i];
        url=feed.url;

        expect(feed).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
        expect(url).toBeDefined();
        expect(url).not.toBeNull();
        console.log(url);

      }

    });


    it('and all feeds-names are defined', function() {

      for(i; i<allFeeds.length; i++) {

        feed=allFeeds[i];
        name=feed.name;

        expect(name).toBeDefined();
        expect(name).not.toBeNull();
        console.log(name);

      }

    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     * All the url provided in allFeeds JSON are defined and
     * different from null.
     */




    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     * All the names provided in allFeeds JSON are defined and
     * different from null.
     */

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


    describe('displays and hides when clicked', function() {


      var menuIcon = $('.menu-icon-link');


      it('displays when clicked', function () {

        $(menuIcon).trigger( "click" );
        console.log("Click and displays!");
        expect($('body').hasClass('menu-hidden')).toBeFalsy();

      });

      it('hides when clicked again', function () {

        $(menuIcon).trigger( "click" );
        console.log("Click and hides!");
        expect($('body').hasClass('menu-hidden')).toBeTruthy();

      });

    });

  });




  describe('New feed selection', function() {


    var firstFeedName,
        secondFeedName,
        defaultFeedName,
        firstFeedId=0;
        secondFeedId=1,
        firstFeedTitle=null,
        secondFeedTitle=null;



    beforeEach(function(done) {

      loadFeed(firstFeedId,function() {

        loadFeed(secondFeedId, function() {

          secondFeedName=allFeeds[secondFeedId].name;

          done();

        });
      });
    });

    afterAll(function(callback){

      loadFeed(firstFeedId, function() {

        callback();

      });
    });


    it('produces new content', function (done) {

      firstFeedName=allFeeds[firstFeedId].name;
      expect(firstFeedName).toMatch('Udacity Blog');
      expect(secondFeedName).toMatch('CSS Tricks');
      console.log(firstFeedName);
      console.log(secondFeedName);
      expect(firstFeedName).not.toEqual(secondFeedName);

      done();

    });

    it('restores the loadFeed to the default', function (callback) {

      defaultFeedName= allFeeds[firstFeedId].name;
      expect(defaultFeedName).toMatch('Udacity Blog');
      console.log(defaultFeedName);

      callback();
    });

  });


}());
