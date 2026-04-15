const wrapper = document.getElementById("container");


fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
.then (response => response.json())
.then (data => {
    renderData(data)

})


function renderData(data) {
    const cards = data.map(el => `
        <div key = {el.id}>
           <img src=${el.avatar} alt="">
           <h1>${el.name}</h1>
   </div>
        `).join("")

        wrapper.innerHTML = cards
}