import template from './app.html';
import styles from './app.scss';

export default {
  template,
  controllerAs: 'app',
  controller() {
    this.styles = styles;
    this.collection = [
      {
        title : 'Blue-burries!',
        caption : 'I got a call from our sweet neighbors last week asking how our build was progressing and if we knew there were men with big trucks on our property. I told her we were having the well installed and she was relieved that she wouldn\'t have to go scare the off with her shotgun. After resolving the case of the "intruders" she told us she missed us and that we should come over and take some of her blueberries this weekend. We visited for over an hour on Saturday night, drank beer, and ate the most delicious blueberries until my tummy ached. Now I can\'t get the idea of a weekly card/domino game night with them out of my head.',
        link : 'https://scontent.xx.fbcdn.net/t31.0-8/13692933_10208598285026313_4964730177215303654_o.jpg'
      },
      {
        title: 'Werkin!',
        caption: 'There\'s only so much brush that my puny arms, and our battery-powered trimmer (and two batteries) could tackle today, and of course the batteries died with about 30ft left over to the right of our driveway. Glad the batteries and I have a week to recharge before we get back to it.',
        link: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13494772_10208434206524453_4129712838873273660_n.jpg?oh=32061c0f0559a205e9fc23b41de7b5b4&oe=584C8F18'
      },
      {
        title: 'Diggin\'',
        caption: 'Playing in the dirt with the family today. 🌲🚜',
        link: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/12986962_10207904697407056_610953020186499048_n.jpg?oh=cb505a36030203999ed9147d94cd19a5&oe=5858BECC'
      }
    ];
    console.log('app', this.collection);
  }
};
