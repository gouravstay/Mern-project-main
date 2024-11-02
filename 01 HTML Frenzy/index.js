alert("Reload")



// console.log('This is variable repl')


// let 8yash = 7 // Not allowed this will thorow an error
// let var = 7 // var is a reserved word in Js

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
}