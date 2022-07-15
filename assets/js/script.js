console.log("hello world");
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
    for (let task = 0; task < contentSubTask.length; task++) {
      contentSubTask[i].remove(".subtask_content");
    }
  });
}
// subtask content end

// modal more
let modalButton = document.querySelector(".more");
let modalBar = document.querySelector(".modal_content");
modalButton.addEventListener("click", function () {
  console.log("klik");
  if (modalBar.style.display === "block") {
    modalBar.style.display = "none";
  } else {
    modalBar.style.display = "block";
  }
});
