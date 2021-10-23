// User add notes add it to local storage.
let addBtn = document.getElementById('addBtn');
showNotes();
addBtn.addEventListener('click',(e)=>{
    let text = document.getElementById('addTxt');

    let notes = localStorage.getItem("notes");

    if(notes == null){
        notesObj = [];
    }else{
        //values are stored in form of String, converting it to array
        notesObj = JSON.parse(notes);

    }
    notesObj.push(text.value);

    localStorage.setItem("notes",JSON.stringify(notesObj));
    text.value ='';
    //console.log(text);
    showNotes();
})



function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
      html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Note ${index + 1}</h5>
                          <p class="card-text"> ${element}</p>
                          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                      </div>
                  </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
  }


  function deleteNote(index){
    console.log("Deleting node",index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();

  }


  let search = document.getElementById('searchTxt');

  search.addEventListener('input',()=>{
    //   console.log("Input Event Called")

      let inputVal = search.value;
     
      let noteCards = document.getElementsByClassName('noteCard');

      Array.from(noteCards).forEach((element)=>{
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "Block";
        }
        else{
            element.style.display = "none";
        }
      })

  })