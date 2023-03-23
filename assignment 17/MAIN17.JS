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

    axios.post("https://crudcrud.com/api/eec5cf56164b4dbba9b2d5ebd6a3eaff/resource",obj)
    .then((data)=> {
        console.log(data.data);
    })
        .catch((err) =>{
            console.log(err);
        })

   // localStorage.setItem(obj.email,JSON.stringify(obj));
    //ShowOnScreen(obj);
    }
window.addEventListener("DOMContentLoaded", ()=> {
    axios.get("https://crudcrud.com/api/eec5cf56164b4dbba9b2d5ebd6a3eaff/resource")
    .then((data)=> {
        console.log(data);

        for(var i=0;i<data.data.length;i++){
            showNewUserOnScreen(data.data[i]);
        }
    }).catch((err)=>{
        
        console.log(err);
    })
})

function showNewUserOnScreen(user){
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('PHONE').value='';

    if(localStorage.getItem(user.email)!== null){
        removeUserFromScreen(user.email);
    }

    const parentNode =document.getElementById('Items');
    const childHTML = `<li id = ${user._id} >${user.name} -- ${user.email}
                        <button onclick =function deleteUser(${user._id})> Delete User
                        <button onclick = editUserDetails(${user._id} )','${user.email} ',' ${user.name}> Edit User 
                        </li>`

    parentNode.innerHTML = parentNode.innerHTML+childHTML;
}

//Edit User

function editUserDetails (Email ,Name ,Phone){

    document.getElementById('name').value = Name;
    document.getElementById('email').value = Email;
    document.getElementById('PHONE').value = Phone;

    deleteUser(Email);

}

function deleteUser(userId){
    axios.delete(`
    axios.post("https://crudcrud.com/api/eec5cf56164b4dbba9b2d5ebd6a3eaff/resource/${userId}`)
    .then(()=>{
        removeUserFromScreen(userId)
    })
    .catch ((err)=> {
        console.log(err);
    })
    //console.log(userId);
    //localStorage.removeItem(userId);
    //removeUserFronScreen(userId);
}
function removeUserFromScreen(userId){
    const parentNode = document.getElementById('Items');
    const childToBeDeleted = document.getElementById(userId);
    if(childToBeDeleted){
        parentNode.removeChild(childToBeDeleted)
    }
}








/*
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
*/