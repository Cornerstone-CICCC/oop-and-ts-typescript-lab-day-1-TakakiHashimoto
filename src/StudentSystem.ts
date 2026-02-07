// 🏫 Create a Student Management System where students can be added, marked as passed/failed, and checked for status.

// 1. Create a union literal type called StudentStatus that can be "active", "graduated", or "dropped".
type StudentStatus = "active" | "graduated" | "dropped";

// 2. Create a type alias called Student which contains: studentId (number), name (string), age (number), subjects (string[]), status (StudentStatus).
type Student = {
  studentId: number;
  name: string;
  age: number;
  subjects: string[];
  status: StudentStatus;
};

let students: Student[] = [];

// 3. Create a function called addStudent which will add a student to the students array. The function needs to return a Student object.
function addStudent(
  studentId: number,
  name: string,
  age: number,
  subjects: string[],
  status: StudentStatus,
): Student {
  const student = {
    studentId,
    name,
    age,
    subjects,
    status,
  };

  students.push(student);
  return student;
}

// 4. Create a function called updateStatus which updates a student's status. The return needs to be a string.
function updateStatus(studentId: number, status: StudentStatus) {
  const foundStudnet = students.find((st) => st.studentId === studentId);
  if (!foundStudnet) {
    return "No student matching found";
  }
  foundStudnet.status = status;
  return `${foundStudnet.name} ${foundStudnet.status}`;
}

// 5. Create a function called addSubject which adds a subject to a student’s subjects array. The return needs to be a string.
function addSubject(studentId: number, subject: string) {
  const foundStudnet = students.find((st) => st.studentId === studentId);
  if (!foundStudnet) {
    return "No student matching found";
  }

  foundStudnet.subjects.push(subject);
  return `${subject} is added to ${foundStudnet.name}'s subjects`;
}

// 6. Create a function called getStudent which returns a student’s information based on studentId.
function getStudent(studentId: number): string | Student {
  const foundStudnet = students.find((st) => st.studentId === studentId);
  if (!foundStudnet) {
    return "No student matching found";
  }

  return foundStudnet;
}

// Test cases (Create more if needed)
console.log(addStudent(1, "Alice", 20, ["Math", "Science"], "active")); // { studentId: 1, name: "Alice", age: 20, subjects: ["Math", "Science"], status: "active" }
console.log(updateStatus(1, "graduated")); // "Alice has graduated"
console.log(addSubject(1, "History")); // "History added to Alice's subjects"
console.log(getStudent(1)); // { studentId: 1, name: "Alice", age: 20, subjects: ["Math", "Science", "History"], status: "graduated" }
