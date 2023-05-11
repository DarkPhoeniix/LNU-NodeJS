const students = [
    {
        name: "John Doe",
        email: "john.doe@email.com",
        isActive: true,
        group: "PMI-32",
        courses: ["Math", "Physics"]
    },
    {
        name: "Jane Doe",
        email: "jane.doe@email.com",
        isActive: true,
        group: "PMI-31",
        courses: ["Art", "Physics", "Programming"]
    },
    {
        name: "Bob Doe",
        email: "bob.doe@email.com",
        isActive: true,
        group: "PMI-32",
        courses: ["English", "Art", "Math"]
    },
    {
        name: "Jason Doe",
        email: "jason.doe@email.com",
        isActive: true,
        group: "PMI-34",
        courses: ["Art", "English"]
    },
    {
        name: "Clarke Doe",
        email: "clarke.doe@email.com",
        isActive: true,
        group: "PMI-34",
        courses: ["Math", "Art", "Physics"]
    }
];

const student = students.find(s => s.name === "Bob Doe");
console.log("Student with name 'Bob Doe':");
console.log(student);

const math_students = students.filter(s => s.courses.includes("Math"));
console.log("\nStudent attending Math:");
console.log(math_students);
