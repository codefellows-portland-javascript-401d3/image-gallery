import template from './list.html';

export default{
  template,
  controller(){
    this.info = {
      title: 'Ernie',
      description: 'Visiting the vet',
      link: 'https://static1.squarespace.com/static/51911780e4b00c72ce749dc2/t/57bcb321e4fcb567fdff2ee0/1471984444747/?format=1000w'
    };
  }
};
