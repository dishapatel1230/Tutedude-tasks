
    const students = [
      { name: "Disha Patel", marks: 85, class: "10th", address: "Vadodara" },
      { name: "Rahul Sharma", marks: 78, class: "9th", address: "Mumbai" },
      { name: "Priya Mehta", marks: 92, class: "10th", address: "Ahmedabad" },
      { name: "Amit Singh", marks: 67, class: "8th", address: "Delhi" },
      { name: "Neha Verma", marks: 88, class: "9th", address: "Pune" },
      {name: "Ishita Chokshi",marks:86,class:"8th",address:"Surat"},
      {name:"Ekta Chauhan",marks:90,class:"9th",address:"Mumbai"}
    ];

    const container = document.getElementById("studentContainer");
    const searchInput = document.getElementById("searchInput");

    function renderStudents(studentList) {
      if (studentList.length === 0) {
        container.innerHTML = "<p class='no-data'>No students found</p>";
        return;
      }

      const cardsHTML = studentList.map(student => `
        <div class="card">
          <h3>${student.name}</h3>
          <p><strong>Marks:</strong> ${student.marks}</p>
          <p><strong>Class:</strong> ${student.class}</p>
          <p><strong>Address:</strong> ${student.address}</p>
        </div>
      `).join("");

      container.innerHTML = cardsHTML;
    }

    // Initial Render
    renderStudents(students);

    searchInput.addEventListener("input", function () {
      const searchValue = this.value.toLowerCase();

      const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchValue)
      );

      renderStudents(filteredStudents);
    });

