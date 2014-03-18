var game = new Phaser.Game(640, 943, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('enveloppe', 'assets/enveloppe.png');
    game.load.image('fondecran', 'assets/schalbi.png');
    game.load.image('overlay', 'assets/overlay.png');
}

var enveloppe;


function create() {

    game.add.image(0,0,'overlay');
    game.add.image(0,898, 'overlay');
    game.add.image(0, 45, 'fondecran');
    enveloppe = game.add.sprite(100, 100, 'enveloppe');
    enveloppe.animations.add('run');
    enveloppe.animations.play('run', 60, true);

}

function update() {

    enveloppe.y += 3.5;

    if (enveloppe.y > game.world.height)
    {
        enveloppe.y = 0;
        var x_random = Math.round(Math.random()*600);
        enveloppe.x = x_random;
    }


}