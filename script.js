// 2. Write a blog on Difference between HTTP1.1 vs HTTP2
  
// SOLUTION:

         HTTP1.1                                        HTTP2

  1.HTTP1.1 WORKS ON THE TEXTUAL               1.IT WORKS ON BINARY PROTOCOL
    FORMAT
  2.IT LOADS THE DATA ONE AFTER                2.IT IS ABLE TO USE A SINGLE 
    THE OTHER,SO IF ONE DATA                     TAP CONNECTION TO SENT MULTIPLE
    CANNOT BE LOADED ,IT BLOCKS                  STREAMS OF DATA AT ONCE, SO THAT
    ALL OTHER DATA BEHIND IT                     NO ONE RESOURCE BLOCK ANY OTHER RESOURCE
  3.IT COMPRESSES DATA BY ITSELF               3.IT USES HPACK FOR DATA COMPRESSION

------------------------------------------------------------------------------------------- ----------
// 3. Write a blog about objects and its internal representation in Javascript 

// SOLUTION:

=> Ojects are non-primitive data types of java script 
=> Objects can be defined as collection of related data of primitive(numbers,string,boolean,undefined,null) or reference types(array,function), in the form of "key: value" pairs .
   These keys can be variables or functions and are called properties and methods .
=> For Eg. If our object is Employee , it will have properties like name, age, address, id, etc and methods like updateAddress, updateNam, etc.
=> we can create objects in two ways 
a. By object literals.

eg :  let bike = {name: "SuperSport",
              maker:"Ducati", 
              engine:"937cc"};


 b. constructor approach(By creating instance of Object directly).

eg: class employee {
     constructor(name,age)
     {this.name = name,
     this.age = age}
     getdetails()
     {
      console.log(`NAME: ${this.name}
                   AGE: ${this.age}`) }}
    var obj1= new employee("nandhu",25);
    obj1.getdetails();  

    // OUTPUT
         NAME: nandhu
         AGE: 25
 
c. Using java script keyword new

eg: var person = new Object();
    person.firstName = "John";
    person.lastName = "Doe";
    person.age = 50;
    person.eyeColor = "blue";
    console.log(person);

   // OUTPUT
    { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
--------------------------------------------------------------------------------------------------------