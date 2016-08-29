import template from './album.html';
import styles from './album.scss';

export default{
  template,
  controller(){
    this.styles = styles;
    this.view = 'list';
    this.add = imageToAdd=>{
      this.images.push(imageToAdd);
    };
    this.images = [
      {
        title: 'Vet Visit',
        description: 'Ernie smiling while waiting for the doctor to come in.',
        link: 'https://static1.squarespace.com/static/51911780e4b00c72ce749dc2/t/57bcb321e4fcb567fdff2ee0/1471984444747/?format=1000w'
      },
      {
        title: 'Sandwich Cat',
        description: 'Ernie seems sleepy and is hanging out with sandwich cat.',
        link: 'https://static1.squarespace.com/static/51911780e4b00c72ce749dc2/t/57bdeaad37c581748d11649b/1472064177550/IMG_2604.JPG?format=1000w'
      },
      {
        title: 'Ready for a Walk',
        description: 'Ernie patiently waiting to go out for his evening walk.',
        link: 'https://static1.squarespace.com/static/51911780e4b00c72ce749dc2/t/57bdeba9e6f2e187400cfefb/1472064434532/FullSizeRender.jpg?format=1000w'
      },
      {
        title: 'Hanging out',
        description: 'Just sitting around the apartment being a dog.',
        link: 'https://static1.squarespace.com/static/51911780e4b00c72ce749dc2/t/57bdea8537c581748d11629a/1472064140299/IMG_2451.JPG?format=1000w'
      }
    ];
  }
};
