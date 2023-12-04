// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:  
//I created a test that was able to execute the code useing the const's provided above. I struggled with this last time and I always feel like I dont know what to say. I had to review the lecture and used a youtube video to help me execute the code as requested. 
// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("divByThree", () => {
    it("is a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
      expect(divByThree(object1)).toEqual("15 is divisible by three")
      expect(divByThree(object2)).toEqual("0 is divisible by three")
      expect(divByThree(object3)).toEqual("-7 is not divisible by three")
    })
  })


const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
// b) Create the function that makes the test pass.
const divByThree = (object) => {
    if (object.number % 3 === 0){
        return `${object.number} is divisible by three`
    } else if (object.number % 3 !== 0){
        return `${object.number} is not divisible by three`
    } 
  }

// Pseudo code:I created a test that was able to execute the code useing the const's provided above. I struggled with this last time and I always feel like I dont know what to say. I had to review the lecture and used a youtube video to help me execute the code as requested.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("randomArrayy", () => {
    it("returns a generic greeting", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
      expect(randomArrayy(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(randomArrayy(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
  })


const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
const randomArrayy = (capWords) => {
    return capWords.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
}

// Pseudo code:I created a test that was able to execute the code useing the const's provided above. I struggled with this last time and I always feel like I dont know what to say. I had to review the lecture and used a youtube video to help me execute the code as requested.