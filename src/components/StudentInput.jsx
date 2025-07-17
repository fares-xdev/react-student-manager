export default function StudentInput({newStudent, onChange, onAdd}) {
  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Enter student name"
        value={newStudent}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onAdd();
          }
        }}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
