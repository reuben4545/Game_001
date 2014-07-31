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
    onload : function (crimes) {

        //console.log("crimes is " + crimes);

        game.crimes = crimes;

        // Create a dictonary to store all the types of criminals 
        // Metropolitan Police Database Category --> Game_001 Class
        game.crimeDictonary = new Object();


      //So many. Don't they look pretty. They outline the reflection of my bloodshot eyes on my monitor flowing with cafiene. Leave me with Coffee and a computer for two days and who knows what I will do. TODO: CLEANUP
        game.crimeDictonary["anti-social-behaviour"] = game.ASBO;
        game.crimeDictonary["burglary"] = game.burglar;
        game.crimeDictonary["bicycle-theft"] = game.thief;
        game.crimeDictonary["theft-from-the-person"] = game.thief;
        game.crimeDictonary["other-theft"] = game.theif;
        game.crimeDictonary["criminal-damage-arson"] = game.arson;
        game.crimeDictonary["shoplifting"] = game.teen;
        game.crimeDictonary["possession-of-weapons"] = game.weapons;
        game.crimeDictonary["vehicle-crime"] = game.vehicle;
        game.crimeDictonary["violent-crime"] = game.violent;
        game.crimeDictonary["public-order"] = game.weirdal;
        game.crimeDictonary["drugs"] = game.thief;


        game.round = 1;

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
     
	loaded : function ()
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
	},

  updateRound: function(){

    console.log("updateRound called!");

    criminals = me.game.world.getChildByName("Criminal");

    console.log("updateRound called, criminals.length is: " + criminals.length);
    console.log(" condition is " + criminals.length <= 0);


    // If all but one criminals have been killed, this is but one because to actually call this function, the criminal must exist. If this function is being called, the criminal is about to die.
    if(criminals.length - 1 <= 0){

      console.log("NEW ROUND!");

      spawners = me.game.world.getChildByName("Spawner");

      for(var i = 0; i < spawners.length; i++){

        spawners[i].spawn(game.round);

        game.round += 1;

     }

    }

  }

};