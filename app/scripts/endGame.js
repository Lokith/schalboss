/**
 * Created by codfractal on 19/03/14.
 */

function showLeaderboard() {

    game.add.image(0,0,'fondecran_start');
    var fontTitre = game.add.retroFont('font', 31, 25, Phaser.RetroFont.TEXT_SET6, 10, 1, 1);
    fontTitre.text = 'SCORES';
    var titre = game.add.image(180, 40, fontTitre);
    titre.scale.setTo(1.4,1.4);

}