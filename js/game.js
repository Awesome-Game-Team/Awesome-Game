var game = new Phaser.Game(640, 360, Phaser.AUTO, 'phaser');
//var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('end', endState);

game.state.start('boot');
