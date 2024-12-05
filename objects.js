

const student={
    name:"jayesh",
    age:23,
    email: 'jay@gmail.com',
    isLoggedIn: true,
    
}
 console.log( typeof student.name)

 student.email='jay777@gmail.com'
 Object.freeze(student)  // yha object.freeze krne se jo mail upr diya he vo hi output milega
 student.email='jayeshkamle7@gmail.com'  // ye print nhi hoga kyuki freeze kr diya he upr
 console.log(student);

 // isme object ke andr function add krna sikhna h or symbol ko jb bhi hum refer krenge to[] is se kremge
 // for ex [mySym]='jayesh'
 //object literal se kra he ye upr. part 2 acche se dekhna or smjna he object ka part 3 me api he.  





