import Phaser from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
};

document.addEventListener('DOMContentLoaded', () => new Phaser.Game(config));
