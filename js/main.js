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
    self.bubble.parent()
      .attr("href", instaLink[self.initial + self.counter()])
      .attr("target","blank");

    $("#instaExtra").append(getInsta(instaLink[self.initial + self.counter()]));
  });


   //
  //  bubble.parent().magnificPopup({
  //    type: 'iframe'
  //  });
};

jQuery(document).ready(function(){

  var rhino = new Person ("R",13,$("#rhino"),$("#r-talk img"));
  var lisa = new Person ("L",7,$("#lisa"),$("#l-talk img"));
  var trevor = new Person ("T",10,$("#trevor"),$("#t-talk img"));

  setTimeout(function(){
    $("#r-talk img:hidden").attr("src","img/R2.png").show("slow");
  },2000);

  window.getInsta = function(page){
    var proxy = "proxy.php?requrl=";
    var api = "http://api.instagram.com/oembed?url=";
    var ajax = $.getJSON(proxy + api + page,function(data){
      console.log(data)
      });
  }

});

var instaLink = {
	"R1" : "http://instagram.com/p/wwlaUPGCH4/",
	"R6" : "http://instagram.com/p/kdRQ_vGCKf/",
	"R7" : "http://instagram.com/p/wzHGbfDI3d/",
	"R8" : "http://instagram.com/p/mHLIcaGCPl/",
	"R9" : "http://instagram.com/p/w-wp_HGCFt/",
	"R10": "http://instagram.com/p/mosocPNnH5/",
	"T3" : "http://instagram.com/p/mQJ26fmCHh/",
	"T5" : "http://instagram.com/p/i0WQlamCPB/",
	"T9" : "http://instagram.com/p/eS0YWDNnFr/",
	"T10": "http://instagram.com/p/vvtnSomCEj/",
	"L1" : "http://instagram.com/p/vPuFrYGCLB/",
	"L2" : "http://instagram.com/p/sYKL8lmCG3/",
	"L5" : "http://instagram.com/p/trZsyqGCFa/",
	"L6" : "http://instagram.com/p/ty7eNpmCGS/",
	"L7" : "http://instagram.com/p/v9hmJwmCFo/"
}
