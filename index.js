var $ = document.querySelector();

var flagSlider = {
  el: {
    flag: $("#flag"),
    allFlagBands: $(".flag-band")
  },
  init: function() {
    // manual scrolling
    this.el.flag.on("scroll", function(event) {
      flag-slider.moveSlidePosition(event);
    });
  },
  moveSlidePosition: function(event) {
    // Magic Numbers
    this.el.allFlagBands.css({
      "background-position": $(event.target).scrollLeft()/6-100+ "px 0"
    });
  }
};

flagSlider.init();