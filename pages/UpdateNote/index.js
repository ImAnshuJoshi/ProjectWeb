const inputval=document.querySelector('.create-note-input');

inputval.addEventListener('input',(e)=>{
    console.log(e.target.value);
});

//to fetch the id 
const urlSearchParams = new URLSearchParams(window.location.search);
const nodeId = urlSearchParams.get("IdNumber"); //jis naam se apan ne bheja hai url main in a tag (see js)

console.log(nodeId);