console.log("Welcome to notes app");
showNotes();

// If user add note, add it to the localstorage

let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  // console.log(notesObj);
  showNotes();
});

// Function to show elements from localstorage

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
             <div class="card-body">
                 <h5 class="card-title">Note ${index + 1}</h5>
                 <p class="card-text">${element}</p>
                 <button id="${index}" onclick= "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
             </div>
         </div>`;
  });

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = ` Add Your Notes in "Add a Note" section.`;
  }
}

// Function to delete a note

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// Animated Typing

var typed = new Typed(".typing", {
  strings: ["My", "Sticky", "Magic"],
  typedSpeed: 100,
  backSpeed: 80,
  loop: true,
});
