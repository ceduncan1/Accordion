// Notes from Today


var myLib = {
  
  getName: function() {
    return 'My Awesome Library';
  },

  gloat: function() {
    var message = this.getName() + ' is so freaking awesome!';
    console.log(message);
    return this;
  },

  bye: function() {
    console.log('bye bye now');
    return this;
  }


}