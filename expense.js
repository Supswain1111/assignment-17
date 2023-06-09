function SaveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    
    const obj ={
        name,
        email,
        phone
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
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