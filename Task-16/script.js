//student data
const students = [
    {name:"Disha", marks: 80, class: "10th", address: "Vadodara" },
    {name:"Keyur", marks:90, class:"9th", address:"Mumbai"},
    {name:"Shrey", marks:87, class:"8th",address:"Vadodara"},
    { name: "Priya", marks: 90, class: "10th", address: "Ahmedabad" }
];
// get elements
const container = document.getElementById("studentContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");
/*
 map() → used to create cards
*/
function renderStudents(List){

    const cards = List.map(function(item){
        return `
        <div class="card">
        <p>Name:${item.name}</p>
        <p>Marks:${item.marks}</p>
        <p>Class:${item.class}</p>
        <p>Address:${item.address}</p>
        </div>
        `;
    });
    container.innerHTML = cards.join("");
}
renderStudents(students)
/* filter() → used for search*/
searchBtn.addEventListener("click",function(){
    const value = searchInput.value.toLowerCase();
    const result = students.filter(function(item){
        return item.name.toLowerCase().includes(value);
    });
    renderStudents(result);
});

resetBtn.addEventListener("click",function(){
    searchInput.value ="";
    renderStudents(students);
});
