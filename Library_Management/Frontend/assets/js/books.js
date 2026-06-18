// Search Books

const searchInput =
document.getElementById("bookSearch");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const filter =
searchInput.value.toLowerCase();

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


// Delete Book

function deleteBook(id){

const confirmDelete =
confirm(
"Are you sure you want to delete this book?"
);

if(confirmDelete){

alert(`Book ${id} deleted`);

}

}