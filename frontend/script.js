const API_URL =
  "http://localhost:5000/api/students";

async function loadStudents() {

  const list =
    document.getElementById("studentList");

  try {

    const response =
      await fetch(API_URL);

    const students =
      await response.json();

    list.innerHTML = "";

    students.forEach(student => {

      const li =
        document.createElement("li");

      li.innerHTML = `
        ${student.name} - ${student.course}

        <button
          onclick="deleteStudent(${student.id})">
          Delete
        </button>
      `;

      list.appendChild(li);
    });

  } catch (error) {

    console.error(error);

    list.innerHTML =
      "<li>Error loading students</li>";
  }
}

async function addStudent() {

  const name =
    document.getElementById("name").value;

  const course =
    document.getElementById("course").value;

  if (!name || !course) {
    alert("Please fill all fields");
    return;
  }

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type":
        "application/json"
    },
    body: JSON.stringify({
      name,
      course
    })
  });

  document.getElementById("name").value = "";
  document.getElementById("course").value = "";

  loadStudents();
}

async function deleteStudent(id) {

  await fetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE"
    }
  );

  loadStudents();
}

loadStudents();