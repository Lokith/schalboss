var game = new Phaser.Game(640, 943, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('enveloppe', 'assets/enveloppe.png');
    game.load.image('enveloppe_bleu', 'assets/enveloppe-blue-close.png');
    game.load.image('enveloppe_rouge', 'assets/enveloppe-red-close.png');
    game.load.image('enveloppe_jaune', 'assets/enveloppe-yellow-close.png');

    game.load.image('fondecran', 'assets/schalbi.png');
    game.load.image('overlay', 'assets/overlay.png');
    game.load.image('overlay_bas', 'assets/overlay_bas.png');
    game.load.image('coeur', 'assets/coeur.png')
}

var total = 1;
var speed = 20000;

var blue = 'bleu';
var red = 'rouge';
var yellow = 'jaune';

var score = 0;
var vie = 10;

var textScore;
var textVie;


function create() {

    game.add.image(0,0,'overlay');
    game.add.image(0,898, 'overlay_bas');
    game.add.image(550, 7, 'coeur');
    game.add.image(0, 45, 'fondecran');

    enveloppeTimerBlue = game.time.events.loop(Phaser.Timer.SECOND, createEnveloppe, this, blue);
    enveloppeTimerRed = game.time.events.loop(Phaser.Timer.SECOND * 3.4, createEnveloppe, this, red);
    enveloppeTimerYellow = game.time.events.loop(Phaser.Timer.SECOND * 7.6, createEnveloppe, this, yellow);


    textScore = game.add.text(0, 5, 'Score: 0', { font: "32px Arial", fill: "#000000", align: "center" });
    textScore.anchor.setTo(0, 0);

    textVie = game.add.text(250, 5, 'Vie: 10', { font: "32px Arial", fill: "#000000", align: "center" });
    textVie.anchor.setTo(0, 0);
}

function update() {

if(score === 20) speed = 10000;
}

function createEnveloppe(color){
    var colorEnveloppe;
    switch (color){
        case 'bleu':
            colorEnveloppe = 'enveloppe_bleu';
            break;
        case 'rouge':
            colorEnveloppe = 'enveloppe_rouge';
            break;
        case 'jaune':
            colorEnveloppe = 'enveloppe_jaune';
            break;
        default :
            colorEnveloppe = 'enveloppe_bleu';
            break;
    }
    var enveloppe = game.add.sprite(getRandomInt(-15,475), 0, colorEnveloppe);
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
    console.log(enveloppe.key);
    if(enveloppe.key === 'enveloppe_bleu') vie--;
    if(enveloppe.key === 'enveloppe_rouge') score++;
    if(enveloppe.key === 'enveloppe_jaune') score++;
    enveloppe.destroy();

    textScore.setText('Score: '+ score);
    textVie.setText('Vie: '+ vie);
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function render() {

    game.debug.text("Time until event: " + game.time.events.duration, 32, 32);

}