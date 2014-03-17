
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('enveloppe', 'Tests_mouvement/enveloppe.png');
}

var enveloppe;


function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
    enveloppe = game.add.sprite(100, 100, 'enveloppe');


/*
    game.physics.enable(enveloppe, Phaser.Physics.ARCADE);

    enveloppe.body.velocity.y=150;*/

    //  Here we add a new animation called 'run'
    //  We haven't specified any frames because it's using every frame in the texture atlas
    enveloppe.animations.add('run');

    //  And this starts the animation playing by using its key ("run")
    //  15 is the frame rate (15fps)
    //  true means it will loop when it finishes
    enveloppe.animations.play('run', 15, true);

}

function update() {

    enveloppe.y += 2;

    if (enveloppe.y > game.world.height)
    {
        enveloppe.y = 0;
        var x_random = Math.round(Math.random()*700);
        enveloppe.x = x_random;
    }


}