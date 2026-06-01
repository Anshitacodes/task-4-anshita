const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: "Anshita", course: "BCA" },
  { id: 2, name: "Rahul", course: "B.Tech" },
  { id: 3, name: "Priya", course: "BSc IT" }
];

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.post("/api/students", (req, res) => {
  const student = {
    id: Date.now(),
    name: req.body.name,
    course: req.body.course
  };

  students.push(student);
  res.json(student);
});

app.delete("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);

  students = students.filter(
    student => student.id !== id
  );

  res.json({ message: "Deleted" });
});

app.listen(5000, () => {
  console.log("Backend is running");
});