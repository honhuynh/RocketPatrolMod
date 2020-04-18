class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('menubackground', './assets/menubackground.png');
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create() {
        this.menubackground = this.add.tileSprite(0, 0, 640, 480, 'menubackground').setOrigin(0, 0);
        //menu display
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#15CDEE',
            color: '#D25B5B',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        //show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY - textSpacer, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(centerX - textSpacer - 80, centerY, 'Player 1', menuConfig).setOrigin(0.5);
        this.add.text(centerX + textSpacer + 80, centerY, 'Player 2', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '20px';
        this.add.text(centerX - textSpacer - 80, centerY + 30, '↑ to Fire/ ←→ to Move', menuConfig).setOrigin(0.5);
        this.add.text(centerX + textSpacer + 80, centerY + 30, 'W to Fire/ AD to Move', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '28px';
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(centerX - textSpacer - 20, centerY + textSpacer + 20, ' Easy ← ', menuConfig).setOrigin(0.5);
        this.add.text(centerX + textSpacer + 20, centerY + textSpacer + 20, ' → Hard ', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //launch the next scene
        //this.scene.start("playScene");
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
    }
}