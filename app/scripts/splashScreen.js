/**
 * Created by PAGT08882 on 19/03/2014.
 */

function splashScreen() {

    game.add.image(0,0,'fondecran_start');
    var start_button = game.add.sprite(195,615, 'start_button');
    start_button.inputEnabled = true;
    start_button.input.useHandCursor = true;
    start_button.events.onInputDown.add(onStartButtonClicked, this);

    var TA_EnvBleu = game.add.text(150,140, 'Ca c\'est du boulot! Faites passer. ', { font: "24px Arial", fill: "#000000", align: "center" });
    var TA_EnvRouge = game.add.text(150,240, 'Une farce schalberienne ! Cliquer dessus !', { font: "24px Arial", fill: "#000000", align: "center" });
    var TA_EnvJaune = game.add.text(150,340, 'Vous feriez mieux de l\'ouvrir... ou pas. ', { font: "24px Arial", fill: "#000000", align: "center" });
    var TA_EnvPriorite = game.add.text(150,440, 'Essayez donc de la rattraper pour voir.', { font: "24px Arial", fill: "#000000", align: "center" });
    var TA_EnvVie = game.add.text(150,540, 'Ticket +1 Vie. C\'est cadeau. ', { font: "24px Arial", fill: "#000000", align: "center" });

    var SpriteBleu = game.add.image(10,80, 'enveloppe_bleu');
    var SpriteRouge = game.add.image(10,180, 'enveloppe_rouge');
    var SpriteJaune = game.add.image(10,280,'enveloppe_jaune');
    var SpritePriorite = game.add.image(10,380,'enveloppe_priorite');
    var SpriteVie = game.add.image(10, 480, 'enveloppe_vie');

    SpriteBleu.scale.setTo(0.3, 0.3);
    SpriteRouge.scale.setTo(0.3, 0.3);
    SpriteJaune.scale.setTo(0.3, 0.3);
    SpritePriorite.scale.setTo(0.3, 0.3);
    SpriteVie.scale.setTo(0.3, 0.3);

    var fontTitre = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
    fontTitre.text = 'SCHALBOSS';
    var titre = game.add.image(140, 40, fontTitre);
    titre.scale.setTo(1.4,1.4);

}

function onStartButtonClicked(start_button) {
    start_button.destroy();
    startGame();
}