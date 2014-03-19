/**
 * Created by PAGT08882 on 19/03/2014.
 */

var total = 1;
var speed = 20000;

var blue = 'bleu';
var red = 'rouge';
var yellow = 'jaune';

var score = 0;
var vie = 10;
var niveau = 1;

var textScore;
var textVie;
//var textNiveau;

function loadAssets() {
    game.add.image(0,0,'overlay');
    game.add.image(0,898, 'overlay_bas');
    game.add.image(550, 7, 'coeur');
    game.add.image(0, 45, 'fondecran');

    textScore = game.add.text(0, 5, 'Score: 0', { font: "32px Arial", fill: "#000000", align: "center" });
    textScore.anchor.setTo(0, 0);

    textVie = game.add.text(250, 5, 'Vie: 10', { font: "32px Arial", fill: "#000000", align: "center" });
    textVie.anchor.setTo(0, 0);

    enveloppeTimerBlue = game.time.events.loop(Phaser.Timer.SECOND, createEnveloppe, this);
}

function createEnveloppe(){
    var color = game.rnd.integerInRange(1,10);
    var colorEnveloppe;
    if(score >= 10 && score < 20){
        if(color <= 7) colorEnveloppe = 'enveloppe_rouge';
        else if (color > 7)colorEnveloppe = 'enveloppe_bleu';
        speed = 9000;
        niveau = 2;
        //textNiveau.setText('Niveau: '+ niveau);
    }
    else if(score >= 20 && score < 30){
        if(color <= 5) colorEnveloppe = 'enveloppe_rouge';
        else if (color > 5 && color <= 8)colorEnveloppe = 'enveloppe_bleu';
        else if (color > 8)colorEnveloppe = 'enveloppe_jaune';
        speed = 8000;
        niveau = 3;
        //textNiveau.setText('Niveau: '+ niveau);
    }
    else if(score >= 30 && score < 40){
        if(color <= 6) colorEnveloppe = 'enveloppe_rouge';
        else if (color > 6 && color <= 9)colorEnveloppe = 'enveloppe_bleu';
        else if (color > 9)colorEnveloppe = 'enveloppe_jaune';
        speed = 7000;
        niveau = 4;
        //textNiveau.setText('Niveau: '+ niveau);
    }
    else if(score >= 40){
        if(color <= 5) colorEnveloppe = 'enveloppe_rouge';
        else if (color > 5 && color <= 6)colorEnveloppe = 'enveloppe_bleu';
        else if (color > 6)colorEnveloppe = 'enveloppe_jaune';
        speed = 6000;
        niveau = 5;
        //textNiveau.setText('Niveau: '+ niveau);
    }
    else {
        if(color <= 6) colorEnveloppe = 'enveloppe_rouge';
        else if (color > 6)colorEnveloppe = 'enveloppe_bleu';
        speed = 10000;
        niveau = 1;
        //textNiveau.setText('Niveau: '+ niveau);
    }
    var enveloppe = game.add.sprite(game.rnd.integerInRange(1,5)*128-128, 0, colorEnveloppe);
    enveloppe.scale.setTo(0.3, 0.3);
    enveloppe.animations.add('run');
    enveloppe.animations.play('run', 36, true);
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
    textVie.setText(vie);
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function render() {

    game.debug.text("Time until event: " + game.time.events.duration, 32, 32);

}