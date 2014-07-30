/* game namespace */
var game = {
 
    /** 
     * an object where to store game global data
     */
    data : {
        // score
        score : 0
    },
     
    // Run on page load.
    "onload" : function (crimes) {

        //console.log("crimes is " + crimes);

        game.width = window.innerWidth;
        game.height = window.innerHeight;
 
        // Initialize the video.
        if (!me.video.init("screen", game.width, game.height, true, 'auto')) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }
         
        // add "#debug" to the URL to enable the debug Panel
        if (document.location.hash === "#debug") {
            window.onReady(function () {
                me.plugin.register.defer(this, debugPanel, "debug");

                // Show hitboxes
                me.debug.renderHitBox = true;
            });
        }
 
        // Initialize the audio.
        me.audio.init("mp3,ogg");
 
        // Set a callback to run when loading is complete.
        me.loader.onload = this.loaded.bind(this);
      
        // Load the resources.
        me.loader.preload(game.resources);
 
        // Initialize melonJS and display a loading screen.
        me.state.change(me.state.LOADING);
    },
 
 
 
    /* ---
 
   callback when everything is loaded
     
   ---  */
     
	"loaded" : function ()
	{
		console.log("loaded was called");
      // set the "Play/Ingame" Screen Object
      me.state.set(me.state.PLAY, new game.PlayScreen());
	     
      // register our player entity in the object pool
      me.pool.register("mainPlayer", game.PlayerEntity);

      // register exit
      me.pool.register("exit", game.Exit);

      // register NPC
      me.pool.register("NPC", game.NPC);

      // register Criminal
      me.pool.register("Criminal", game.Criminal);

      // register Criminal Spawner
      me.pool.register("CriminalSpawner", game.CriminalSpawner);

      // register fire
      me.pool.register("ParticleEffect", game.ParticleEffect);


      // enable the keyboard
      me.input.bindKey(me.input.KEY.UP, "up");
      me.input.bindKey(me.input.KEY.LEFT, "left");
      me.input.bindKey(me.input.KEY.RIGHT, "right");
      me.input.bindKey(me.input.KEY.DOWN, "down");
      me.input.bindKey(me.input.KEY.SHIFT, "shift");

      me.input.bindKey(me.input.KEY.SPACE, "fire");
      //me.input.bindPointer(me.input.KEY.SPACE);


	      
	   // start the game 
	   me.state.change(me.state.PLAY);

     //console.log(me.pool.pull('mainPlayer'));

	   console.log("loaded has finished");
	}

  /*"onLevelLoaded" : function(){
    console.log("Level Loaded!");
  }*/
};