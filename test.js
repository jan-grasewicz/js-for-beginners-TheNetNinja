
//Construstor function
var Car=function(maxSpeed,driver){
    this.maxSpeed=maxSpeed;
    this.driver=driver;
    this.drive=function(speed, time){
        console.log("distance traveled = "+speed*time)};
    this.logDriver=function(){console.log("driver name is "+ this.driver)};
}
var myCar1=new Car(10,"exampe name1");
var myCar2=new Car(20,"exampe name2");
var myCar3=new Car(30,"exampe name3");
var myCar4=new Car(40,"exampe name4");

myCar1.drive(30,5);
myCar3.logDriver();
console.log(myCar4.maxSpeed);