// Step 1: Define the student object

const student = {

    name: "John Doe",

    grade: 10,

    subjects: ["Math", "Science", "English"],

    // Step 2: Define the displayInfo method
    displayInfo: function () {

        console.log("Student Name:", this.name);

        console.log("Grade:", this.grade);

        console.log(
            "Subjects:",
            this.subjects.join(", ")
        );
    }
};

// Step 3: Add "isPassed" property dynamically

const passingGrade = 10;

student.isPassed = student.grade >= passingGrade;

// Step 4: Loop through object keys and values

console.log("Student Object Details:\n");

for (let key in student) {

    console.log(key + ":", student[key]);
}