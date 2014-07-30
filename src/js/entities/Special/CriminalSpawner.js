game.CriminalSpawner = me.ObjectEntity.extend({
  "init": function(x, y, settings) {

    console.log("CriminalSpawner init called"); // called

    this.parent(x, y, settings);

    this.type = "CriminalSpawner";

    /*me.game.world.addChild(new game.NPC( 
      this.pos.x, 
      this.pos.y, 
      { sprite:      'npc_red_invader', 
        spritewidth: 64,
        spriteheight: 64,
        height: 64,
        width: 64
      } 
    ));*/

    me.game.world.addChild(new game.Criminal( 
      this.pos.x, 
      this.pos.y, 
      { gid: null,
        height: 64,
        image: "debug_die",
        isEllipse: false,
        isPolygon: false,
        isPolyline: false,
        name: "Criminal",
        spriteheight: 64,
        spritewidth: 64,
        type: undefined,
        width: 64,
        x: 1600,
        y: 2176,
        z: 6
      } 
    ));




  }


});