var gptAdSlots = [];
//push all the ads into the global ad queue
googletag.cmd.push(function () {

    //
    //SIZE MAPPING
    //

    //define the var name of the size map
    var leaderboard_mapping = googletag.sizeMapping().
    //desktop >
    addSize([1024, 768], [
                [970, 250],
                [970, 90],
                [728, 90]
            ]).
    // tablet landscape
    addSize([980, 690], [
                [970, 250],
                [728, 90]
            ]).
    //tablet portrait
    addSize([640, 480], [
                [320, 50],
                [320, 100],
                [300, 50]
            ]).
    // Fits browsers of any size smaller than 640 x 480
    addSize([0, 0], [
                [320, 50],
                [320, 100],
                [300, 50]
            ]).build();

    //    
    //DEFINE SLOTS
    //   

    //define an ad slot with the ad path
    gptAdSlots[0] = googletag.defineSlot('/24156345/TEST_testsite/TEST_pring-site/homepage/leaderboard-1',
        //define default ad size if browser not detected
                [
                    [728, 90]
                ],
        //set the div id to be targeted
        'leaderboard-1').
    //define which mapping this ad slot uses
    defineSizeMapping(leaderboard_mapping).
    addService(googletag.pubads());
    //
    //define ads following above structure
    //


    googletag.defineSlot('/24156345/TEST_testsite/TEST_pring-site/homepage/mpu-1', [
                [300, 600],
                [300, 250],
            ], 'mpu-1').addService(googletag.pubads());
    googletag.defineSlot('/24156345/TEST_testsite/TEST_pring-site/homepage/mpu-2', [
                [300, 600],
                [300, 250],
            ], 'mpu-2').addService(googletag.pubads());

    //native ad
    
    /*
    //DISABLE NATIVE
    
    
    googletag.defineSlot('/24156345/TEST_testsite/TEST_pring-site/homepage/native', [
                ['fluid'],
            ], 'native').addService(googletag.pubads());
    
    //DISABLE NATIVE END
    */ 

    //
    //Define page variables
    //
    //ads adtest kv to this page
    googletag.pubads().setTargeting("adtest", ["hellome", "testads", "adopshub"]);
    //age set by var
    //googletag.pubads().setTargeting("age", age);
    //enable SRA mode
    googletag.pubads().enableSingleRequest();
    //signals to GPT video ads will be on page to trigger video and display exclusion rules
    //is this set correctly?
    googletag.pubads().enableVideoAds();
    //center ads
    //googletag.pubads().setCentering(true);
    googletag.enableServices();
});