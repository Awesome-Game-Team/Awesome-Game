<<<<<<< HEAD
var game = new Phaser.Game(640, 360, Phaser.AUTO, 'phaser');
//var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser');
=======
var game = new Phaser.Game(800, 500, Phaser.AUTO, 'phaser');
>>>>>>> 4016570d6c8063eb4426199ffc57c8c3056a8f66

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('end', endState);

game.state.start('boot');
