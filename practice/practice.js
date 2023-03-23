const blogs =[];
function create1stBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG1'});
            resolve();
        }, 3000)
    }) 
}
function create2ndBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG2'});
            resolve()
        }, 2000)
    }) 
}

function createPost(post) {
    
    setTimeout(() => {
        blogs.push({post});
          
    },2000);
};
let intervalId=0;
function updateLastUserActivity(){
    return new Promise((resolve,reject)=> {
        clearInterval(intervalId);
        intervalId=setInterval(()=>{
            let output='';
            for(let i=0;i<blogs.length;i++){ 
                output+=`<li>${blogs[i].title} - last updated at ${new Date()} </li>`
            }
        console.log('timer running id is',intervalId)
        document.body.innerHTML=output;
        resolve();
        },1000)
    });
};

/*create1stBlog().then(()=> {
    updateLastUserActivity()
}).then(()=>{
    create2ndBlog().then(()=>{
        updateLastUserActivity()
    })
})*/

Promise.all([create1stBlog(),updateLastUserActivity()])
.then(()=>{
    create2ndBlog().then(()=>{
        updateLastUserActivity().then((resolve)=>{
            console.log(resolve);
        })
    })
})