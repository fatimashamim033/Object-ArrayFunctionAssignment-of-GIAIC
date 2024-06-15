//      *#* Assignment 1: Building Your Friend List *#*
//  Learning Objective: Practice working with objects and arrays in TypeScript
//   to create a data structure.
// Task: Create a program that manages a simple friend list.
//***
//  1. Define an object named people containing an empty array called friends.
var people = {
    friends: []
};
//  2. Create three separate objects, each representing a friend,
//  with properties like firstName, lastName, and optionale id.
var friend = {
    firstName: 'string',
    secondName: 'string',
    id: 'number'
};
var friend1 = {
    firstName: 'Fatima',
    lastName: 'Shamim',
    id: 1
};
var friend2 = {
    firstName: 'Rumana',
    lastName: 'Arshad',
    id: 2
};
var friend3 = {
    firstName: 'Intikhab',
    lastName: 'Alam',
    id: 3
};
//  3. Add these friend objects to the friends array within the people object.
people.friends.push(friend1, friend2, friend3);
//  4. Output the entire people object to the console, displaying your information and your
//   friend list.
console.log(people.friends);
//************************************************* */
//************************************************ */
//      *#* Assignment2: Manipulating an Array: Rearranging Words *#* 
//  Object
//  Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
//  Steps:
//  1. Scrambled Array:
//  o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// Step 1: Convert non-string elements to strings
var stringArray = scrambledArray.map(function (element) { return element.toString(); });
// Step 2: Rearrange the array elements to form the correct sentence
var rearrangedArray = [];
scrambledArray.splice(2, 4);
scrambledArray.splice(2, 4); // from index 2 delete 4 elements (true to a)
scrambledArray.pop(); //remove I
scrambledArray.unshift("I"); // add "I" on index 0
scrambledArray.splice(1, 0, "am", "a"); //add "am" and "a" after I
scrambledArray.splice(5, 1, 'of');
scrambledArray.push('GIAIC');
var join = scrambledArray.join(" "); //converts array into a single string 
console.log("\"".concat(join, "\"")); // print desired output
// Step 3: Combine elements back into a single string
var result = rearrangedArray.join(' ');
//*********************************************** */
//******************************************************* */
//  Assignment 3: Company Product Catalog
//  Learning Objective: Implement data structures in TypeScript to represent and manage product 
//  information.
//  Task: Create a program to represent a product catalog using an array and perform basic queries.
//  1. Define an array named inventory to store product information.
// Step 1: Define an array named inventory to store product information
var inventory = [];
//  2. Create three separate objects, each representing a product, with properties like name, 
//  model, cost, and quantity.
// Step 2: Create three separate objects, each representing a product
var product1 = {
    name: "Laptop",
    model: "XPS 13",
    cost: 1200,
    quantity: 10
};
var product2 = {
    name: "Smartphone",
    model: "Galaxy S21",
    cost: 800,
    quantity: 15
};
var product3 = {
    name: "Headphones",
    model: "WH-1000XM4",
    cost: 350,
    quantity: 30
};
//  3. Add these product objects to the inventory array using an appropriate array method.
// Step 3: Add these product objects to the inventory array using an appropriate array method
inventory.push(product1, product2, product3);
console.log(inventory);
//  4. Access and log the quantity property of a specific product (e.g., third product) in the 
//  inventory array.
// Step 4: Access and log the quantity property of a specific product (e.g., third product) in the inventory array
console.log("Quantity of the third product (".concat(inventory[2].name, "): ").concat(inventory[2].quantity));
//  5. Explore adding and accessing more elements within the inventory array to understand 
//  how to manage product data
var product4 = {
    name: "Tablet",
    model: "iPad Air",
    cost: 600,
    quantity: 20
};
inventory.push(product4);
// Accessing the new product
console.log("Quantity of the fourth product (".concat(inventory[3].name, "): ").concat(inventory[3].quantity));
//  2. Student List:
//  o An array named students stores information about several students using the 
//  Student template. Think of this array as your class list!
var students = [
    {
        name: "Fatima",
        isSenior: true,
        hasCompletedAssignments: true
    },
    {
        name: "Shamim",
        isSenior: true,
        hasCompletedAssignments: false
    },
    {
        name: "Maryam",
        isSenior: false,
        hasCompletedAssignments: true
    },
    {
        name: "Rumana",
        isSenior: true,
        hasCompletedAssignments: true
    },
    {
        name: "Intikhab",
        isSenior: false,
        hasCompletedAssignments: false
    }
];
console.log("Student List:");
students.forEach(function (student) {
    console.log("Name: ".concat(student.name, ", Senior: ").concat(student.isSenior, ", Completed Assignments: ").concat(student.hasCompletedAssignments));
});
//  3. Find Senior Students with Assignments (Optional):
//  o The code (not shown here) has a function that might find students who are seniors 
//  and have completed their assignments.
//  o Can you guess why this information might be helpful?
function findSeniorStudentsWithAssignments(students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompletedAssignments; });
}
var seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior students who have completed their assignments:", seniorStudentsWithAssignments);
//  4. Class List Update:
//  o Imagine you need to update your class list! The code (not shown here) might have 
//  a function that removes students who haven't completed their assignments 
//  (assuming only seniors are responsible).
//  o Can you think of any reasons why this might be useful (consider limitations)?
function updateClassList(students) {
    return students.filter(function (student) { return student.hasCompletedAssignments; });
}
var updatedClassList = updateClassList(students);
console.log("Updated class list:", updatedClassList);
