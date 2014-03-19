var game = new Phaser.Game(640, 943, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('enveloppe', 'assets/enveloppe.png');
    game.load.image('enveloppe_bleu', 'assets/enveloppe-blue-close.png');
    game.load.image('enveloppe_rouge', 'assets/enveloppe-red-close.png');
    game.load.image('enveloppe_jaune', 'assets/enveloppe-yellow-close.png');
    game.load.image('fondecran_start', 'assets/fond_starter.png');

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
    splashScreen();

    enveloppeTimerBlue = game.time.events.loop(Phaser.Timer.SECOND, createEnveloppe, this);

}

function update() {

    if(score === 10) speed = 18000;
    if(score === 20) speed = 16000;
    if(score === 30) speed = 14000;
    if(score === 40) speed = 12000;
    if(score === 50) speed = 10000;
}

function createEnveloppe(){
    color = game.rnd.integerInRange(1,3);
    var colorEnveloppe;
    switch (color){
        case 1:
            colorEnveloppe = 'enveloppe_bleu';
            break;
        case 2:
            colorEnveloppe = 'enveloppe_rouge';
            break;
        case 3:
            colorEnveloppe = 'enveloppe_jaune';
            break;
        default :
            colorEnveloppe = 'enveloppe_bleu';
            break;
    }
    var enveloppe = game.add.sprite(game.rnd.integerInRange(1,5)*128-128, 0, colorEnveloppe);
    enveloppe.scale.setTo(0.3, 0.3);
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