// Search Members

const memberSearch =
document.getElementById("memberSearch");

if(memberSearch){

memberSearch.addEventListener("keyup",()=>{

const filter =
memberSearch.value.toLowerCase();

const rows =
document.querySelectorAll("tbody tr");

rows.forEach(row=>{

const text =
row.innerText.toLowerCase();

row.style.display =
text.includes(filter)
? ""
: "none";

});

});

}


// Delete Member

function deleteMember(id){

const result =
confirm(
`Delete member ${id}?`
);

if(result){

alert(
`Member ${id} deleted`
);

}

}