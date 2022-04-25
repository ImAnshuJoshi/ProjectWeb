const cardContainer=document.querySelector('.card-container');

const cardData=[
    {heading:"heading1" , content:"This is the content1", id:1},
    {heading:"heading2" , content:"This is the content2", id:2},
    {heading:"heading3" , content:"This is the content3", id:3},
    {heading:"heading4" , content:"This is the content4", id:4},
    {heading:"heading5" , content:"This is the content5", id:5},
    {heading:"heading6" , content:"This is the content6", id:6},
    {heading:"heading7" , content:"This is the content7", id:7},
];

const createNotes=(array)=>{
    array.forEach(cardObj=>{
        // card.heading,
        // card.content,
        // card.id
        const {heading,content,id}=cardObj;

        const card=document.createElement('div');
        card.classList.add('card');
        card.id=id;

        card.innerHTML=`<div class="card-header"><div class="card-heading ">${heading}</div><div class="edit-note"><img src="../../assets/edit-note.svg" alt=""></div></div><div class="card-content">${content}</div>`;
        
        cardContainer.appendChild(card);
    })
}

createNotes(cardData);