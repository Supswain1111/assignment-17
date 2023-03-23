function saveData(event) {
    event.preventDefault();
    
    const price = document.querySelector("#price").value;
    const dish = document.querySelector("#dish").value;
    const category = document.querySelector("#category").value;
    
    const order = document.createElement("li");
    order.textContent = dish + " - " + price;
    
    if (category === "Table 1") {
      const table1 = document.querySelector(".orders1");
      table1.appendChild(order);
    }
    else if (category === "Table 2")
    {
        const table2 = document.querySelector(".orders2");
      table2.appendChild(order);
    }
    else if (category === "Table 3")
    {
        const table3 = document.querySelector(".orders3");
      table3.appendChild(order);
    }
    
    
    document.querySelector("form").reset();
  }
  

  

/*function saveData(event){
    event.preventDefault();
const price=event.target.price.value;
const dish=event.target.dish.value;
const table=event.target.category.value;
    const obj ={
        price,
        dish,
        table
    }

    axios.post("https://crudcrud.com/api/5463ddee6ef944daa66bfbee8eeea004/waiterdata",obj)
        .then((resource) =>{
            console.log(resource);
        })
        .catch((error) =>{
            console.log(error);
        })
}
window.addEventListener("DOMContentLoaded" ,()=>{
    axios.get("https://crudcrud.com/api/5463ddee6ef944daa66bfbee8eeea004/waiterdata")
    .then((resource)=>{
        console.log(resource);

        for(var i=0;i<resource.data.length;i++)
        {
            showNewUserOnScreen(resource.data[i]);
        }
    })
    .catch((error)=>{
        console.log(error);
    })
})

function showNewUserOnScreen(){
    const form = document.querySelector("form");
const table1 = document.querySelector(".orders2");
const table2 = document.querySelector(".orders3");
const table3 = document.querySelector(".orders");

form.addEventListener("onclick", (event) => {
  event.preventDefault();
  
  const price = document.querySelector("#price").value;
  const dish = document.querySelector("#dish").value;
  const category = document.querySelector("#category").value;
  
  const order = document.createElement("li");
  order.textContent = `${dish} - $${price}`;
  
  if (category === "Table 1") {
    table1.appendChild(order);
  } else if (category === "Table 2") {
    table2.appendChild(order);
  } else if (category === "Table 3") {
    table3.appendChild(order);
  }
  
  document.querySelector("form").reset();
});
}*/