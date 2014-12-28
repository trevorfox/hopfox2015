function Person(initial,total,pic,bubble){
  this.index = 0,
  this.initial = initial,
  this.total = total + 1,
  this.bubble = bubble,

  this.talk = function(){
    var src;
    this.index += 1;

    console.log(this.index % this.total);

    if ((this.index % this.total) !== 0){
      src = "img/" + this.initial + (this.index % (this.total)) + ".png";
      this.bubble.attr("src",src).show();
    } else {
      console.log("enter else")
      this.bubble.hide()
    }
  console.log(src);
  }

  bubble.hide();
  pic.on("click",this,function(e){
    var person = e.data
    person.talk(person.bubble);
  });
};

jQuery(document).ready(function(){

  var rhino = new Person ("R",13,$("#rhino"),$("#r-talk img"));
  var lisa = new Person ("L",7,$("#lisa"),$("#l-talk img"));
  var trevor = new Person ("T",10,$("#trevor"),$("#t-talk img"));

  setTimeout(function(){
      $("#r-talk img:hidden").attr("src","img/R2.png").show("slow");
  },2000);

$('.test-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

});
