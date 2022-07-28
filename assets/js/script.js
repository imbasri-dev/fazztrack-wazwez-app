// testing connect javascript console
console.log("hello world");

// tambah task start
let tambahTask = document.querySelector(".todolist_right");
let showTask = document.querySelector(".task_show");
tambahTask.addEventListener("click", function () {
  showTask.classList.toggle("task_show");
});
// tambah task end

// form input
// check ambil nilai input start
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
// check ambil nilai input end

// newtask start
function handleEnter() {
  const task = {
    name: document.getElementById("inputName").value,
    desc: document.getElementById("inputDesc").value,
    date: document.getElementById("inputDate").value,
  };

  let newTask = document.getElementById("inputBaru");
  newTask.innerHTML += `<div class="task_content_bar" id="newTaskBar ">
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
                <img src="/assets/img/dropdown black.png" alt="dropdown" class="task_dropdown" id="dropTaskContent" />
              </div>
              <!-- content 1 end -->
              <!-- subtask dropdown start -->
              <div class="subtask_bar show" id="subTaskBar">
                <div class="subtask_head">
                  <h4>Subtask</h4>
                  <button type="submit"><img src="/assets/img/Iconly-Curved-Plus.svg">Tambah</button>
                </div>
                <!-- subtask  start-->
                <div class="subtask_content" id="subtask_content">
                  <div class="subtask_input">
                    <input type="checkbox" id="subtask1" />
                    <label for="subtask1"></label>
                    <span>Design Review</span>
                  </div>
                  <img src="/assets/img/trash-delete.png" alt="Tambah Task" class="subtask_content_delete">
                </div>
                <!-- subtask  end-->
              </div>
              <!-- subtask dropdown end -->
              <!-- move hasil input  start-->
              <div id="inputBaru">
              </div>`;

  // subtask dropdown start
  let subTaskBar = document.querySelectorAll("#subTaskBar");
  let taskButton = document.querySelectorAll(".task_dropdown");
  // jika ada class task_drop maka akan
  for (let index = 0; index < taskButton.length; index++) {
    taskButton[index].addEventListener("click", function () {
      if (taskButton[index].classList.contains("task_dropdown")) {
        // active , jika salah
        taskButton[index].classList.add("rotate");
        taskButton[index].classList.remove("task_dropdown");
      } // active
      else {
        taskButton[index].classList.remove("rotate");
        taskButton[index].classList.add("task_dropdown");
      }
      // ini saya loop berdasarkan dari jumlah taskdropdown dikarenakan 1 paket
      subTaskBar[index].classList.toggle("show");
    });
  }
  // subtask dropdown end

  // modal more start
  let modalButton = document.querySelectorAll(".more");
  let modalBar = document.querySelectorAll(".modal_content");
  for (let modalNode = 0; modalNode < modalButton.length; modalNode++) {
    modalButton[modalNode].addEventListener("click", function () {
      if (modalBar[modalNode].style.display === "block") {
        modalBar[modalNode].style.display = "none";
      } else {
        modalBar[modalNode].style.display = "block";
      }
    });
  }
  // modal more end

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
}
// newtask  end
