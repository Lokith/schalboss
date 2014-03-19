var game = new Phaser.Game(640, 943, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    AssetsPreLoader();
}

function create() {

    splashScreen();

}

function update() {

}

