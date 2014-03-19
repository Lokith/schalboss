/**
 * Created by PAGT08882 on 19/03/2014.
 */

function splashScreen() {

    game.add.image(0,0,'fondecran_start');
    var start_button = game.add.sprite(195,615, 'start_button');
    start_button.inputEnabled = true;
    start_button.input.useHandCursor = true;
    start_button.events.onInputDown.add(onStartButtonClicked, this);
    var textAide = game.add.text(100,5, 'Laissez passer les enveloppes bleues (+5 points) ', { font: "32px Arial", fill: "#000000", align: "center" });
    textAide.anchor.setTo(0,0);
}

function onStartButtonClicked(start_button) {
    start_button.destroy();
    startGame();
}