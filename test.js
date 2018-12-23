/*
var myCar=new Object();
myCar.maxSpeed=50;
myCar.driver="John";
myCar.drive=function(){console.log("now driving");};

// =

var myCar2={
    maxSpeed:70, 
    driver:"Johnny", 
    drive:function(){console.log("now driving again");
    }
};
*/
var myCar={
    maxSpeed:70, 
    driver:"Johnny", 
    drive:function(speed, time){console.log("distance traveled = "+speed*time)
    }
};

myCar.drive(50,3);