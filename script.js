// <!DOCTYPE html>
// <html>
// <head>
//   <title>Select Option Example</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       margin: 40px;
//     }
//     #output {
//       margin-top: 20px;
//       font-weight: bold;
//       color: #2a7;
//     }
//   </style>
// </head>
// <body>

//   <h2>Select an Option</h2>

//   <select id="mySelect" onchange="showSelected()">
//     <option value="">-- Please choose --</option>
//     <option value="Option 1">Option 1</option>
//     <option value="Option 2">Option 2</option>
//     <option value="Option 3">Option 3</option>
//     <option value="Option 4">Option 4</option>
//     <option value="Option 5">Option 5</option>
//   </select>

//   <div id="output"></div>

//   <script>
//     function showSelected() {
//       const selectElement = document.getElementById("mySelect");
//       const selectedValue = selectElement.value;
//       const outputDiv = document.getElementById("output");

//       if (selectedValue) {
//         outputDiv.textContent = "You selected: " + selectedValue;
//       } else {
//         outputDiv.textContent = "";
//       }
//     }
//   </script>

// </body>
// </html>

console.log("Hello Dear");

const person = {
    name : "Lavesh Gaur",
    age : 20,
    gender : "Male"
}
console.log(person.name);

const createObject = function (name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const person1 = new createObject("Mradul Siddhu",20,"Female");
const person2 = new createObject("Nigam Singh",20,"Trans");

console.log(person1);
console.log(person2);

const createObjectUsingArrow = (name, age, gender) => ({
    name: name,
    age: age,
    gender: gender
});

const person3 = createObjectUsingArrow("Mradul Duddu",20,"Gay");
console.log(person3);

const person4 = createObjectUsingArrow("Mradul",20,"Gay");
console.log(person4);

console.log(person4.name);

console.log(person1 instanceof createObject); 
// console.log(person3 instanceof createObjectUsingArrow);