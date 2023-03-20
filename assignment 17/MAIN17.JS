function SaveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email=event.target.email.value;
    const phone=event.target.PHONE.value;
    
    const obj ={
        name,
        email,
        phone
    }

    axios.post("https://crudcrud.com/api/71c293c1352043e9be298ab0a8d73117/resource",obj)
    .then((data)=> {
        console.log(data);
    })
        .catch((err) =>{
            console.log(err);
        })

   // localStorage.setItem(obj.email,JSON.stringify(obj));
    ShowOnScreen(obj);
}
function ShowOnScreen (obj){
    const parentElement= document.getElementById('Items');
    const childElement = document.createElement('li');
    childElement.textContent = obj.name+" - "+obj.email +" - "+obj.phone;

    const deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "Delete Respone";
    const editButton = document.createElement('input');
    editButton.type = "button";
    editButton.value = "Edit Response";

    deleteButton.onclick = () =>{
        localStorage.removeItem(obj.email);
        parentElement.removeChild(childElement);
    }
    editButton.onclick = () =>{
        localStorage.removeItem(obj.email);
        parentElement.removeChild(childElement);
        document.getElementById('nameInputTag').value= odj.name;
        document.getElementById('emailInputTag').value= odj.email;
        document.getElementById('phoneInputTag').value= odj.phone;

    }
    childElement.appendChild(deleteButton);
    childElement.appendChild(editButton);
    parentElement.appendChild(childElement);
}