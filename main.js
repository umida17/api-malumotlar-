const wrapper = document.getElementById("container");
let searchInput = document.getElementById("input");

let datas = []; 

fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
.then(response => response.json())
.then(data => {
    datas = data;
    renderData(datas);
});

function renderData(data) {
    const cards = data.map(el => `
        <div id="malumot">
           <img id="rasm" src="${el.avatar}" alt="">
           <h1>${el.name}</h1>
        </div>
    `).join("");

    wrapper.innerHTML = cards;
}

searchInput.addEventListener("input", function(e) {
    let malumot = e.target.value.toLowerCase();

    const filterData = datas.filter(user => 
        user.name.toLowerCase().includes(malumot)
    );

    renderData(filterData); 
});