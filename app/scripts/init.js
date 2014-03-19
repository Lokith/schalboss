/**
 * Created by PAGT08882 on 19/03/2014.
 */

function splashScreen() {
    game.paused = true;
    game.add.image(0,0,'fondecran_start');

    textScore = game.add.text(0, 5, 'Score: 0', { font: "32px Arial", fill: "#000000", align: "center" });
    textScore.anchor.setTo(0, 0);

    textVie = game.add.text(250, 5, 'Vie: 10', { font: "32px Arial", fill: "#000000", align: "center" });
    textVie.anchor.setTo(0, 0);

}