const wrapper = document.getElementById("container");
let searchInput = document.getElementById("input");


fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
.then (response => response.json())
.then (data => {
    renderData(data)

})


function renderData(data) {
    const cards = data.map(el => `
        <div id= "malumot" key = {el.id}>
           <img id= "rasm" src=${el.avatar} alt="">
           <h1>${el.name}</h1>
   </div>
        `).join("")

        wrapper.innerHTML = cards
}



// searchInput.addEventListener("input", function(e) {
//    let malumot = e.target.value.toLowerCase();
//   const filterData = datas.filter(user => 
//     user.title.toLowerCase().includes(malumot)
//   );
//   renderUser(filterData)
// })
  