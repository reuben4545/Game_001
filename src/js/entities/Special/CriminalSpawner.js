game.CriminalSpawner = me.ObjectEntity.extend({
  "init": function(x, y, settings) {

    console.log("CriminalSpawner init called"); // called

    this.parent(x, y, settings);

    this.type = "Spawner";
    this.name = "Spawner";

    this.spawn(1);

  },


  spawn: function(round){

    index = Math.round(Math.random() * (game.crimes.length - 1))

    crime = game.crimes[index];

    game.crimes.splice(game.crimes, 1);

    console.log("::" + crime.length);
    crime.split(' ').join(''); // remove spaces
    console.log("::" + crime.length);

    console.log("SPAWNING! - " + crime);

    var criminal = game.crimeDictonary[crime];

    if(typeof criminal === "undefined"){
      criminal = game.ASBO;
      console.log("BING BING BING");
    }


    console.log(criminal);

    me.game.world.addChild(new criminal( 
      this.pos.x, 
      this.pos.y, 
      { gid: null,
        height: 64,
        image: "debug_die",
        isEllipse: false,
        isPolygon: false,
        isPolyline: false,
        name: "Criminal",
        spriteheight: 128,
        spritewidth: 64,
        type: undefined,
        width: 64,
        x: this.pos.x,
        y: this.pos.y,
        z: 100,
      } 
    ), 100);

  }


});