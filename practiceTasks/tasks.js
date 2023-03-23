function saveToStorage(event){
    event.preventDefault();
const name = event.target.name.value;
const email=event.target.email.value;
const phone=event.target.PHONE.value;

const obj ={
    name,
    email,
    phone
}

axios.post("https://crudcrud.com/api/b38f8af6fa8c4a0288c10c148ebaef2c/appointmentdata",obj)
.then((resource)=>{
    showNewUserOnScreen(resource);
    console.log(resource);
})
.catch((error)=> {

    console.log(error);
})

}

window.addEventListener("DOMContentLoaded", ()=> {
    axios.get("https://crudcrud.com/api/b38f8af6fa8c4a0288c10c148ebaef2c/appointmentdata")
    .then((resource)=> {
        console.log(resource);

        for(var i=0;i<resource.data.length;i++){
            showNewUserOnScreen(resource.data[i]);
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
                        <button onclick=deleteUser('${user._id}')>Delete User</button>
                        <button onclick = editUserDetails('${user.email}','${user.name}','${user.phone}','${user._id}')
                        > Edit User </button> 
                        </li>`

    parentNode.innerHTML = parentNode.innerHTML+childHTML;
}

//Edit User

function editUserDetails(Email, Name, Phone, userId) {
    document.getElementById('email').value = Email;
    document.getElementById('name').value = Name;
    document.getElementById('PHONE').value = Phone;
  
    deleteUser(userId);
  }
  

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/b38f8af6fa8c4a0288c10c148ebaef2c/appointmentdata/${userId}`)
    .then((response) =>{
        removeUserFromScreen(userId);
    })
    .catch ((err)=> {
        console.log(err);
    });
}

function removeUserFromScreen(userId){
    const parentNode = document.getElementById('Items');
    const childToBeDeleted = document.getElementById(userId);
    if(childToBeDeleted){
        parentNode.removeChild(childToBeDeleted)
    }
}



