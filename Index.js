// Constructor function for Student details
function Student(name, roll_no, studentClass, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.studentClass = studentClass;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    // Function method to print top three subjects based on marks
    this.printTop3Subjects = function () {
        // Sort the subjects based on marks in descending order
        const sortedSubjects = Object.keys(this.marks_of_5_subjects).sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);

        // Print the top three subjects
        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(sortedSubjects[i]);
        }
    };

    // Function method to print the report card
    this.printReportCard = function () {
        console.log("+----------------------+");
        console.log("|     REPORT CARD      |");
        console.log("+----------------------+");
        console.log("| Name       -", this.name,"|");
        console.log("| Roll no.   -", this.roll_no,"     |");
        console.log("| Class      -", this.studentClass,"      |");
        console.log("| Section    -", this.section,"      |");

        // Print marks for each subject
        Object.keys(this.marks_of_5_subjects).forEach(subject => {
            console.log(`|`,subject +"    -", this.marks_of_5_subjects[subject]);
        });

        // Calculate and print percentage
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((total, mark) => total + mark, 0);
        const percentage = (totalMarks / 500) * 100;
        console.log("| Percentage -",percentage+"%","    |");
        console.log("+----------------------+");
    };
}

// Example usage
const student1 = new Student("Paras", 21, "X", "C", {
    Science: 63,
    S_Sc   : 89,
    Maths  : 65,
    English: 87,
    Hindi  : 91
});

student1.printTop3Subjects();
student1.printReportCard();

