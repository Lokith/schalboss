var game = new Phaser.Game(640, 943, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    assetsPreLoader();
}

function create() {
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.startFullScreen();
    splashScreen();
}

function update() {

}

