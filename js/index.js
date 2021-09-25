// question : object benevisid
// obgect (name: , age: , adress {city , cuntry} )
 const userDate ={
     name : "gomnam",
     age : 100,
     address :{
         city : "esf",
         country : "IR"
     },
 };
 //ye function benevisid k object.key ra namayesh bede ba for-in
 function showUser (obj) {
     for (let key in obj ) console.log(key,obj[key])
 }
 showUser (userDate);



 // name gomnam
 //age 100
 //address {city: 'esf', country: 'IR'}city: "esf"country: "IR"[[Prototype]]: Object