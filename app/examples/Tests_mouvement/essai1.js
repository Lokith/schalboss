
var game = new Phaser.Game(640, 960, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('enveloppe', 'Tests_mouvement/enveloppe.png');
    game.load.image('colour', 'Tests_mouvement/colour.png');

}
var timer = 0;
var total = 1;
var state = true;
var speed = 90000;
var time = 2;


function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
    game.add.image(0, 0, 'colour');
    createEnveloppe();


    enveloppeTimer = game.time.events.repeat(Phaser.Timer.SECOND * 2, 5, createEnveloppe, this);


}

function update(){
    if (total === 100)
    {
        //  Removes the timer, starting with the top one and working down
        game.time.events.remove(enveloppeTimer);
        total = 0;
        enveloppeTimer = game.time.events.repeat(Phaser.Timer.SECOND * time, 5, createEnveloppe, this);
        time = time*0.9;
        speed -= 1000;

    }

}

function destoyIt (enveloppe) {

    enveloppe.destroy();
}

function createEnveloppe(){

        var enveloppe = game.add.sprite(game.world.randomX, 0, 'enveloppe');
        enveloppe.animations.add('run');
        enveloppe.animations.play('run', 20, true);

        enveloppe.inputEnabled = true;

        enveloppe.input.useHandCursor = true;

        enveloppe.events.onInputDown.add(destoyIt, this);

        game.add.tween(enveloppe).to({ y: game.height + (1600 + enveloppe.y) }, speed, Phaser.Easing.Linear.None, true);

        total++;
        timer = game.time.now + 100;

}
