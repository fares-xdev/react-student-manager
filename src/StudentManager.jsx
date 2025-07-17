import "./App.css";
import StudentList from "./components/StudentList";
import StudentInput from "./components/StudentInput";
import { useEffect, useState } from "react";
export default function StudentManager() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  const [newStudent, setNewStudent] = useState("");

  const handleAdd = () => {
    if (newStudent.trim() !== "") {
      setStudents([...students, newStudent]);
      setNewStudent("");
    }
  };

  const handleDelete = (indexDelete) => {
    const updated = students.filter((_, index) => index !== indexDelete);
    setStudents(updated);
  };

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <div className="container">
      <h2>Student Maneger</h2>

      <StudentList students={students} onDelete={handleDelete} />

      <StudentInput
        newStudent={newStudent}
        onChange={setNewStudent}
        onAdd={handleAdd}
      />
    </div>
  );
}
