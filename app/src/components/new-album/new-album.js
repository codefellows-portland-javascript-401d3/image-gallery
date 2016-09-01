import template from './new-album.html';

export default {
  template,
  controllerAs: 'newAlbum',
  bindings: {
    add: '&'
  },
  controller: function(){
    this.item = '';
    this.submit = function(){
      const item = this.item;
      if ( !item ) return;
      this.add({ item });
      this.item = '';
    };
  }
};
