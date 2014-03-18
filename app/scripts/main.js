var game = new Phaser.Game(640, 943, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('enveloppe', 'assets/enveloppe.png');
    game.load.image('enveloppe_bleu', 'assets/enveloppe-blue-close.png');
    game.load.image('enveloppe_rouge', 'assets/enveloppe-red-close.png');
    game.load.image('enveloppe_jaune', 'assets/enveloppe-yellow-close.png');

    game.load.image('fondecran', 'assets/schalbi.png');
    game.load.image('overlay', 'assets/overlay.png');
}

var enveloppe;
var total = 1;
var speed = 90000;
var time = 2;


function create() {

    game.add.image(0,0,'overlay');
    game.add.image(0,898, 'overlay');
    game.add.image(0, 45, 'fondecran');

    enveloppeTimer = game.time.events.repeat(Phaser.Timer.SECOND * time, 100, createEnveloppeBlue, this);


}

function update() {
    if (total === 100)
    {
        game.time.events.remove(enveloppeTimer);
        total = 0;
        enveloppeTimer = game.time.events.repeat(Phaser.Timer.SECOND * time, 5, createEnveloppeBlue, this);
        time = time*0.9;
        speed -= 1000;
    }

}

function createEnveloppeBlue(){

    var enveloppe = game.add.sprite(getRandomInt(50,400), 0, 'enveloppe_bleu');
    enveloppe.scale.setTo(0.4, 0.4);
    enveloppe.animations.add('run');
    enveloppe.animations.play('run', 20, true);
    enveloppe.inputEnabled = true;
    enveloppe.input.useHandCursor = true;
    enveloppe.events.onInputDown.add(destroyIt, this);
    game.add.tween(enveloppe).to({ y: game.height + (1600 + enveloppe.y) }, speed, Phaser.Easing.Linear.None, true);
    total++;
}

function destroyIt (enveloppe) {
    enveloppe.destroy();
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}