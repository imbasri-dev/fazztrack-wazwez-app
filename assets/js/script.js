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

// modal more
let modalButton = document.querySelector(".more");
let modalBar = document.querySelector(".modal_content");
modalButton.addEventListener("click", function () {
  if (modalBar.style.display === "block") {
    modalBar.style.display = "none";
  } else {
    modalBar.style.display = "block";
  }
});

// tambah task

let tambahTask = document.querySelector(".todolist_right");
let showTask = document.querySelector(".task_show");
tambahTask.addEventListener("click", function () {
  showTask.classList.toggle("task_show");
});
