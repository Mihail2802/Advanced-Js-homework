// # Exercises

// ## Exercise 1
// There is a JSON file with students. Make a call to the file and get the following data from it:
// * All students with an average grade higher than 3
// * All female student names with an average grade of 5
// * All male student full names who live in Skopje and are over 18 years old
// * The average grades of all female students over the age of 24
// * All male students with a name starting with B and average grade over 2

// Use higher order functions to find the answers
// **Link:** https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json

const Base_Url =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

fetch(Base_Url)
  .then((res) => res.json())
  .then((students) => {
    console.log(students);
    console.log("Students with average grade above 3 :");
    students
      .filter((student) => student.averageGrade > 3)
      .map((student) => `${student.firstName} ${student.lastName}`)
      .forEach((student) => console.log(student));

    console.log("Female Students with average grade of 5 :  ");
    students
      .filter(
        (student) => student.gender === "Female" && student.averageGrade === 5
      )
      .map((student) => `${student.firstName} ${student.lastName}`)
      .forEach((student) => console.log(student));

    console.log("Male students that are in Skopje and are 18 or above:");
    students
      .filter(
        (student) =>
          student.city === "Skopje" &&
          student.age >= 18 &&
          student.gender === "Male"
      )
      .map((student) => `${student.firstName} ${student.lastName}`)
      .forEach((student) => console.log(student));

    console.log(
      "Female students that are older than 24 and have average grade:"
    );

    students
      .filter(
        (student) =>
          student.gender === "Female" &&
          student.averageGrade >= 0 &&
          student.age > 24
      )
      .map((student) => `${student.firstName} ${student.lastName}`)
      .forEach((student) => console.log(student));
    console.log(
      "Male students that have average grade higher than 2 and start with the letter B : "
    );

    students
      .filter(
        (student) =>
          student.gender === "Male" &&
          student.averageGrade > 2 &&
          student.firstName.startsWith("B")
      )
      .map((student) => `${student.firstName} ${student.lastName}`)
      .forEach((student) => console.log(student));
  });
