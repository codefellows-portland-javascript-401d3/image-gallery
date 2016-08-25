import template from './app.html';

export default {
  template,
  controller: function appCtrl() {
    this.images = [
      { title: 'Starfury', description: 'A Starfury type space fighter from Babylon 5.', url: 'http://i.imgur.com/rTrk6ib.jpg' },
      { title: 'X-Wing Fighter', description: 'An X-Wing Fighter from Star Wars.', url: 'http://i.imgur.com/R1wMXmC.jpg' },
      { title: 'Colonial Viper', description: 'A Colonial Viper from Battlestar Galactica.', url: 'http://i.imgur.com/DsXpPYy.jpg' }
    ];

    this.chooseFrame = selection => {
      this.list = false;
      this.thumb = false;
      this.full = false;
      this[selection] = true;
    };
  }
};
