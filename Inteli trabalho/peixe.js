var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
    
};

var game = new Phaser.Game(config);

var crustaceo;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png')
    this.load.image('logo', 'assets/logo-inteli_branco.png')
    this.load.image('peixe', 'assets/crustaceo.png')
    this.load.image('recife','assets/recife_de_coral.png')
    this.load.image('yan', 'assets/yandeoliveira.png')
    this.load.image('submarino', 'assets/submarino.png')
}

function create() {
    this.add.image(400, 300, 'mar')
    this.add.image(400, 525, 'logo').setScale(0.5)
    this.add.image(80, 480, 'recife')
    this.add.image(560, 420, 'yan').setScale(0.15)
    this.add.image(620, 480, 'submarino').setScale(0.4)
    crustaceo = this.add.image(395, 300, 'peixe')
    crustaceo.setFlip(true,false)

}

function update() { 
    crustaceo.x = this.input.x
    crustaceo.y = this.input.y
 }