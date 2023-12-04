// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "India 2023"
console.log(cohort.split(" "))

// a) Your answer: The output will be the constant named cohort "split" and dislay `Inda` `2023`
// b) Verify and explain: The output was as predicted. The split "mehtod" was used to seperate the string and achieve the predicted output. What is iteration?

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 console.log(greeter("LEARN Student"))

// a) Your answer:The ouput of the code above will be udnefined since it does not have a return statemnet 
// b) Verify and explain:The output was indeed "undefined" since it did not have a return statemnt letting the computer know what to ouput when calling upon that function. 

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:The output will be 11, 13, 15.
// b) Verify and explain:The output was the odd numbers in the code, .filter being used for extracting specific elements from an array, in this case, the odd numbers. 

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:The code above will log "Javascript"
// b) Verify and explain:The output was "Javascript" and I was able to determine that based on .notation and I just followed the path. 0 being the first postion in the index, it also happened to be where "Javascript" was, hence the output. 

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "India"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer:The output will be George, India, 2023
// b) Verify and explain:The ouput was George, India, and 2023 but "student", "cohort", and "year" were also listed prior to each of the previos 3 all inside curly brackets. When we console log "learn students", we call upon the instance which will call upon the class that already had 2 default values in "cohort" and "year". The name was left as a parameter until "George" was passed as the arguement resulting in that being the output for "Student:"
