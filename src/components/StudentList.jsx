export default function StudentList({ students, onDelete }) {
  return (
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            👤 {student}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
  );
}