console.log("hello world");
// tambah tugas start
let buttonTambahTugas = document.querySelector("#tambah_tugas");
// tambah tugas end
// subtask dropdown start
let subTaskBar = document.querySelector("#subTaskBar");
let taskButton = document.querySelector(".task_dropdown");
taskButton.addEventListener("click", function () {
  // jika ada class task_drop maka akan
  if (taskButton.classList.contains("task_dropdown")) {
    // active , jika salah
    taskButton.classList.add("rotate");
    taskButton.classList.remove("task_dropdown");
  } // active
  else {
    taskButton.classList.remove("rotate");
    taskButton.classList.add("task_dropdown");
  }
  subTaskBar.classList.toggle("show");
});
// subtask dropdown end

// subtask content start
let deleteSubTask = document.querySelectorAll(".subtask_content_delete");
let contentSubTask = document.querySelectorAll("#subtask_content");

for (let i = 0; i < deleteSubTask.length; i++) {
  deleteSubTask[i].addEventListener("click", function () {
    let konfirm = confirm("Apakah dihapus ?");
    if (konfirm == true) {
      contentSubTask[i].remove(".subtask_content");
    }
  });
}
// subtask content end

// modal more start
let modalButton = document.querySelector(".more");
let modalBar = document.querySelector(".modal_content");
modalButton.addEventListener("click", function () {
  if (modalBar.style.display === "block") {
    modalBar.style.display = "none";
  } else {
    modalBar.style.display = "block";
  }
});
// modal more end

// tambah task start
let tambahTask = document.querySelector(".todolist_right");
let showTask = document.querySelector(".task_show");
tambahTask.addEventListener("click", function () {
  showTask.classList.toggle("task_show");
});
// tambah task start

// form input
// check ambil nilai input
let input = document.getElementById("form-tambah");
input.addEventListener("keypress", function (event) {
  const task = {
    name: document.getElementById("inputName").value,
    desc: document.getElementById("inputDesc").value,
    date: document.getElementById("inputDate").value,
  };
  if (event.key === "Enter") {
    event.preventDefault();
    if (task.name === "") {
      alert("Nama tugas tidak boleh kosong !");
    } else {
      console.log(task.name);
      console.log(task.desc);
      console.log(task.date);
      handleEnter();
      showTask.classList.toggle("task_show");
      document.getElementById("inputName").value = "";
      document.getElementById("inputDesc").value = "";
      document.getElementById("inputDate").value = "";
      alert("Data berhasil ditambahkan");
    }
  }
});

// newtask
function handleEnter() {
  const task = {
    name: document.getElementById("inputName").value,
    desc: document.getElementById("inputDesc").value,
    date: document.getElementById("inputDate").value,
  };
  let newTask = document.getElementById("newTask");
  newTask.innerHTML += `
      <div class=" task_content_bar" id="newTaskBar ">
      <div class="task_content" id="newTask">
                <input type="checkbox" name="task" value="task" id="${task.name}" />
                <label for="${task.name}"></label>
                <span class="title_content">${task.name}</span>
                <span class="sort_content">${task.date}</span>
                <img src="/assets/img/more-vertical.png" alt="more" class="more">
                <!-- task modal start -->
                <div class="task_content_modal" id="modalTask">
                  <div class="modal_content">
                    <div class="modal_task edit">
                      <img src="/assets/img/Iconly-Bold-Edit.png" alt="rename">
                      <p>Rename Task</p>
                    </div>
                    <div class="modal_task delete">
                      <img src="/assets/img/Iconly-Bold-Delete.png" alt="delete">
                      <p>Delete Task</p>
                    </div>
                  </div>
                </div>
                <!-- task modal end -->
                <p class="text_content">${task.desc}</p>

              </div>
              </div>
              `;
}
