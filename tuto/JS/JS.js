/**
 * Created by PRJS12821 on 18/03/2014.
 */
var game = new Phaser.Game(640, 960, Phaser.AUTO, '', { preload: preload, create: create, update: update }),
    texteTitre = " SCHALBOSS",
    introStyle = { align: "center" },
    texteTuto = "AAA : enveloppe à ouvrir\n\
AAA : enveloppe rapide\n\
AAA : enveloppe à laisser passer, +5 point\n\
AAA : enveloppe à détruire -1 vie\n\n\
BONUS\n\
Laser : détruit toutes les enveloppes rouges,\n\
\t\tcompris celles squi ne sont pas ouvertes\n\
\t\t-50 points";

var textStart,
    tailleStart = {
        taille : 0,
        sens: true,
        anim: true
    };

function preload() {
    game.load.image("fond", "IMG/fond.png");
    game.load.image('knightHawks', 'IMG/KNIGHT3.png');
}

function create() {
    game.add.sprite(0,0,"fond");
    var fontTitre = game.add.retroFont('knightHawks', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
    fontTitre.text = texteTitre;

    var titre = game.add.image(game.world.centerX - 180, 70, fontTitre);

    var startText = game.add.retroFont('knightHawks', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
    startText.text = "start!";
    textStart = game.add.image(game.world.centerX - 180, 300, startText);


}

function update() {
    if (tailleStart.anim) {
        if (tailleStart.taille < 2 && tailleStart.sens)
            tailleStart.taille += 0.01;
        else
            tailleStart.taille -= 0.01;

        if (tailleStart.taille >= 2)
            tailleStart.sens = false;
        else if (tailleStart.taille <= 1.5)
            tailleStart.sens = true;

        textStart.scale.setTo(tailleStart.taille, tailleStart.taille);
    }
}

function StopAnimText() {
    tailleStart.anim = false;
};