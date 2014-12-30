function Person(initial,total   ,pic,bubble){
  this.index = 0,
  this.initial = initial,
  this.total = total + 1,
  this.bubble = bubble,
  this.counter = function(){
    return this.index % this.total;
  },

  this.talk = function(){
    var src;
    this.index += 1;
    console.log(this.counter());

    if (this.counter() !== 0){
      src = "img/" + this.initial + this.counter() + ".png";
      this.bubble.attr("src",src).show();
    } else {
      this.bubble.hide();
    }
    console.log(src);
  },

  this.popup = function(){

  }

  bubble.hide();

  pic.on("click",this,function(e){
    var self = e.data
    self.talk();
    self.bubble.parent().attr("href", instaFrame[self.initial + self.counter()]);
  });

  bubble.parent().magnificPopup({
    type: 'iframe'
  });
};

jQuery(document).ready(function(){

  var rhino = new Person ("R",13,$("#rhino"),$("#r-talk img"));
  var lisa = new Person ("L",7,$("#lisa"),$("#l-talk img"));
  var trevor = new Person ("T",10,$("#trevor"),$("#t-talk img"));

  setTimeout(function(){
    $("#r-talk img:hidden").attr("src","img/R2.png").show("slow");
  },2000);

});


var instaFrame = {
  "L1" : "http://instagram.com/p/dnQi4EGuZx/embed/",
}

var lisaLinks = [];
var rhinoLinks = [];
var trevorLinks = [];
