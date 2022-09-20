

function bubbleSort(arr){
    
    for(var i = 0; i < arr.length; i++){

      for(var j = 0; j < ( arr.length - i -1 ); j++){

        if(arr[j] > arr[j+1]){

          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    console.log("Sorted array = " + arr);
   }
    

   var arr = [6,4,0, 3,-2,1];

   bubbleSort(arr);



var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
 console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject)
{
 console.log(this.name + " is now teaching " + subject);
}
var teacher = new Teacher();
teacher.initialize("Smith", 40);
teacher.teach("Inheritance");