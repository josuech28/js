"use strict";
var Circle = function(dxN,dyN,dRadiusN,colorN){

  var color = colorN;
  var dx = dxN;
  var dy = dyN;
  var dRadius = dRadiusN;

  return {
    move : function(){
     console.log('Circle moved!');
    },
    scale : function(scale1){ 
      dx = dx * scale1;
      dy = dy * scale1;
      console.log('Scale x: ' + dx + 'Scale Y: ' + dy);
    },
    toString: function(){
      console.log('I am a Circle x: ' + dx + 'y: ' + dy + ' radius: ' + dRadius + ' color: ' + color);
    },
    getColor: function(){
      return color;
    },
    setColor: function(newColor){
      color = newColor;
    },
    area: function(){
      var areaResult = 0;
      areaResult = 3.14 * dRadius * dRadius;
      console.log(areaResult);
      return areaResult;
      
    },
    perimeter: function(){
      var per = 2 * dRadius;
      console.log(per);
      return per;
    }
   }
 };

var Circle1 = Circle(2,2,2,'Red');
Circle1.move();
Circle1.getColor();
Circle1.toString();
Circle1.area();
Circle1.perimeter();
Circle1.setColor('YELLOW');
Circle1.toString();

