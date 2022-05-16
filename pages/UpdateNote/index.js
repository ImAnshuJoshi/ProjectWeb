// const inputval=document.querySelector('.create-note-input');

// inputval.addEventListener('input',(e)=>{
//     console.log(e.target.value);
// });

// //to fetch the id 
// const urlSearchParams = new URLSearchParams(window.location.search);
// const nodeId = urlSearchParams.get("IdNumber"); //jis naam se apan ne bheja hai url main in a tag (see js)

// console.log(nodeId);
  
const urlParams = new URLSearchParams(window.location.search);
const noteId = urlParams.get("noteId");

console.log(noteId);

const updateNoteButton = document.querySelector(".create-note-button");

const apiUrl = "http://localhost:8000";

const token = localStorage.getItem("jwt");

updateNoteButton.addEventListener("click", () => {
  const content = document.querySelector(".create-note-input").value;
  const heading = document.querySelector(".create-note-heading").value;

  if (token) {
    fetch(`${apiUrl}/note/update/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ content, heading }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          location.href = "/pages/dashboard/dashboard.html";
        }
      })
      .catch((err) => {
        alert("Error Creating Note!! Re-try....");
        console.log(err);
      });
  }
});
