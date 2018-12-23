/*
console.log(this);
var myCar={
    maxSpeed:70, 
    driver:"Johnny", 
    drive:function(speed, time){
        console.log("distance traveled = "+speed*time)
    },
    test: function(){
        console.log(this)
    }
};
myCar.test();
myCar.drive(50,3);
*/
var myCar={
    maxSpeed:70, 
    driver:"Johnny", 
    drive:function(speed, time){
        console.log("distance traveled = "+speed*time)
    },
    logDriver: function(){
        console.log("driver name is "+ this.driver)
    }
};
myCar.logDriver();