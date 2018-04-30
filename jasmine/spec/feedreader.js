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
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URLs are defined',function(){
            allFeeds.forEach((element)=>{
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            })
        });

         it('names are defined',function(){
            allFeeds.forEach((element)=>{
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            })
         });
    });

    describe('The menu', function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('Menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('Menu Link is clicked and Class is applied',function(){
             if($('body').hasClass('menu-hidden')){
            $('a.menu-icon-link').click( function(){
                expect($('body').hasClass('menu-hidden')).toBe(false)}
            )
        }
        if(!$('body').hasClass('menu-hidden')){
            $('a.menu-icon-link').click( function(){
                expect($('body').hasClass('menu-hidden')).toBe(true)}
            )
        }
         });  
        });
        describe('Initial Entries',function(){
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
               });
              done();
          
            });
        it('LoadFeed is completed',function(done){
            expect($('.feed .entry').toBeGreaterThan(0));
        });
        });
 
    describe('New Feed Selection', function(){
     beforeEach(function(done) {
        loadFeed(0, function() {
            variable1 = $('.feed').html();
             loadFeed(1, function() {
                 variable2 = $('.feed').html();
                 done();
             });
     })});
      });
     it('New Feed is loaded', function(){
        expect(variable2).toEqual(variable1);
     });

    });
