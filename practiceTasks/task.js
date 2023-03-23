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

axios.post("https://crudcrud.com/api/4d5b9ad9965f45f5b5e512a77a74d5c6/appointmentdata/",obj)
.then((resource)=>{
    showNewUserOnScreen(resource);
    console.log(resource);
})
.catch((error)=> {

    console.log(error);
})

}

window.addEventListener("DOMContentLoaded", ()=> {
    axios.get("https://crudcrud.com/api/4d5b9ad9965f45f5b5e512a77a74d5c6/appointmentdata/")
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
    const childHTML = `<li id = ${user._id} >${user.name} - ${user.email} -${user.phone}
                        <button onclick=deleteUser('${user._id}')>Delete User</button>
                        <button onclick=editUserDetails('${user.email}','${user.name}','${user.phone}','${user._id}')>Edit User</button> 
                        </li>`

    parentNode.innerHTML = parentNode.innerHTML+childHTML;
}

//Edit User

function editUserDetails(email, name, phone, userId) {
    document.getElementById('email').value = email;
    document.getElementById('name').value = name;
    document.getElementById('PHONE').value = phone;

  

    // add an event listener to the form submit button to update the user's data
   /* const form = document.querySelector('form');
    form.removeEventListener('submit', saveToStorage);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.PHONE.value;
        const obj = { name, email, phone };

        axios.put(`https://crudcrud.com/api/4d5b9ad9965f45f5b5e512a77a74d5c6/appointmentdata/${userId}`, obj)
            .then((resource) => {
                showNewUserOnScreen(resource.data);
                console.log(resource);
            })
            .catch((error) => {
                console.log(error);
            });*/
    

    // change the text of the submit button to "Update Response"
   // const submitBtn = form.querySelector('button');
    //submitBtn.textContent = 'Update Response';
    deleteUser(userId);
}


function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/4d5b9ad9965f45f5b5e512a77a74d5c6/appointmentdata/${userId}`)
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



