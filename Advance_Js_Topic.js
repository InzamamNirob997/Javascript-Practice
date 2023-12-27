// let a, b, c;

// b = 8
// c = 3
// a = b+ c;

// console.log(a)



// let a = "Nirob"
// let b = 23;
// console.log( a + " "+ b)


// Tempreture code: 

// var temp = prompt("Please enter temperature: ");
// var result = 9/5*temp + 32;
// alert("Fahrenheit: " + result + " Degree");
// console.log("Task Complete!");





// var x;
// x = 3.141;
// x = 34;
// x = 123e5; // 123 * 10 ** 5
// x = 123e-5;
// console.log(x)


// var x = "Hello";
// var y = Boolean(x);
// console.log(y)
// console.log(x)  



                                     // Object oriented Programming wth ES6 class: //

//1: 

// let carname = {
//         Name: "Inzamam",
//         brand: "Toyota",
//         Number: 634778838,
//         color: "Blue",

//         fullname: function() {
//             console.log(`${this.Name} ${this.brand}`)
    
//         }
    
    
//     }

//     // console.log(carname)
//     document.write(carname.Name)







//2: 

    // class Data {
    //     constructor(mobile, simname, issues){
    //         this.mobile_Name = mobile
    //         this.simname_Name = simname
    //         this.issues = issues

    //     }

    // }
   

    // let Rahims_Data = new Data ("Samsung A32", "Banglalink", "Broken sim and motherboard")
    // let Shafiq_Data = new Data ("Samsung M51", "GrameenPhone", "Broken sim")
    // console.log(Rahims_Data)
    // console.log(Shafiq_Data)



    //3

    // class Person {
    //     constructor(fname, lname) {
    //         this.firstname = fname;
    //         this.lastname = lname;
    //     }
    
    //     greeting() {
    //         console.log(`Hello ${this.firstname} ${this.lastname}!`);
    //     }
    
    //     static test() {
    //         console.log("I am staic!");
    //     }
    // }
    
    // let person1 = new Person("Nirob", "Khan");
    
    // console.log(person1.greeting());
    // console.log(Person.test());



                                                            // DOM://
//BASIC DOM:
    // let val;
    // val = this;
    // val = window;
    // val = window.document;
    // val = document;
    // val = document.all;
    // val = document.all[2];
    // val = document.all.length;
    // val = document.head;
    // val = document.body;
    // val = document.doctype;
    // val = document.domain;
    // val = document.URL;
    // val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].href;
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;

// val = document.scripts;
// val = document.scripts[0];
// val = document.scripts[0].src;
// val = document.scripts[0].getAttribute('src');
// console.log(val)




    // DOM selector: 

    // let value = document.getElementById("name")
    // console.log(value)

    // document.getElementById("name").style.backgroundColor = "black"
    // document.getElementById("name").style.color = "white"
    // document.getElementById("name").style.textAlign = "center"
    // document.getElementById("name").textContent = "Simple linked based website"
    // document.getElementById("name").innerHTML = "<h2><i>Hey this is a beautiful website</i></h2>"



    //  val = document.querySelector("#name")
   
    // val = document.querySelector('ol li')
    // val.style.color = "blue"
    // console.log(val)




                                        // ADD,remove, delete in JS://
  

 
// let olItem = document.createElement('li');
// // Add Id and Class
// olItem.className = "a new another-class";
// olItem.id = "new-element";

// // Add Attribute
// olItem.setAttribute('title', 'A title to new Element');

// olItem.appendChild(document.createTextNode('JavaScript'));
// document.querySelector('ol').appendChild(olItem);


// console.log(olItem)





// let ulItem = document.createElement('li');
// let link = document.createElement('a');

// link.appendChild(document.createTextNode('Instagram'));
// link.setAttribute('href', 'https://www.instagram.com');

// ulItem.appendChild(link);

// document.querySelector('ul').appendChild(ulItem);

// console.log(ulItem);







// // Replacing Elements
// let newHeading = document.createElement('h1');
// newHeading.appendChild(document.createTextNode('H1 New Heading'));
// newHeading.className = "sample-class";

// let oldHeading = document.querySelector('h3');

// let parent = document.querySelector('.container');
// //parent = oldHeading.parentElement;
// parent.replaceChild(newHeading, oldHeading);


// console.log(newHeading);
// console.log(oldHeading);
// console.log(parent);


// // Remove element

// let lis = document.querySelectorAll('li');
// let list = document.querySelector('ul');

// lis[0].remove();
// list.removeChild(lis[7]);

// //
// list.classList.add("test");
// list.classList.add("test-new");
// list.classList.remove("test-new");
// let val = list.hasAttribute('title');
// val = list.hasAttribute("class");
// list.setAttribute("title", "Yes")
// list.removeAttribute("title");
// console.log(list);

// //console.log(link); 


                 //error: 

                 console.log("My name")
                 try{
                    hi_hakkaka
                 } catch(err){
                    console.log(err)
                    console.log(err.name)
                    console.log(err.message);
                   

                 }
                 finally {
                    console.log("I am inside finally!");
                }
                 console.log("Error is removed")



                 let a = 3;
                 try {
                    if(a>15) throw "Too Big";
                    else if (a<5) throw "Too small";
                } catch(err) {
                    console.log(err);
                }


                


                




