// Copyright (c) 2010 Andrew J. Peterson / NDP Software. All Rights Reserved.
/**
 * Canvas abstraction implementation
 * see http://svgopen.org/2009/papers/54-SVG_vs_Canvas_on_Trivial_Drawing_Application/
 */
var canvasWrapper = function(element) {
  var ctx = element.getContext('2d');
  return {
    context: function() {
      return ctx;
    },
    drawCircle: function(c, fillStyle) {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2, true); // Outer circle
      ctx.fillStyle = fillStyle;
      ctx.strokeStyle = "#ffffff";
      ctx.fill();
      ctx.stroke();
    },
    clear: function() {
      ctx.clearRect(0,0,element.width, element.height);
    },
    clearRect: function(x,y,w,h) {
      ctx.clearRect(x,y,w,h);
    }
  };
};


if (typeof console == 'undefined') {
  console = {
    log: function() {
    }
  }
}

