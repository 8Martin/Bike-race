class Game{

    constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
   
    form = new Form();
    form.display();

    player = new Player();
    playerCount = player.getCount();


    /*bike1 = createSprite(width / 2 - 50, height - 100,10,10);
    bike1.addImage("b1", bike1_img);
    bike1.scale = 0.07;

    bike2 = createSprite(width / 2 + 100, height - 100,20,20);
    bike2.addImage("b2", bike2_img);
    bike2.scale = 0.07;

    bike = [bike1, bike2];

   // drawSprites();*/
  }

  handleElements() {
    form.hide();
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      //index of the array
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the cars in x and y direction
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        dino[index - 1].position.x = x;
        dino[index - 1].position.y = y;
        if(index === player.index){
          fill ("red");
          ellipse(x,y,60,60);
          camera . position .x = bike[index-1].position.x;
          camera . position .y = bike[index-1].position.y;
        }
      }

      this.handlePlayerControls();

     // drawSprites();
    }
  }

  handlePlayerControls() {
    // handling keyboard events
    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10;
      player.update();
    }
  }

   


}