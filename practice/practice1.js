const posts =[
    {title: 'happy one',body: 'this way',createdAt:new Date().getTime()},
    {title: 'happy two',body: 'this way get it',createdAt:new Date().getTime()}
];
let intervalId=0;
function getPost(){
        clearInterval(intervalId);
        intervalId=setInterval(()=>{
            let output='';
            for(let i=0;i<posts.length;i++){ 
                output+=`<li>${posts[i].title} - last updated ${(new Date().getTime()-posts[i].createdAt)/1000} seconds ago</li>`
            }
        console.log('timer running id is',intervalId)
        document.body.innerHTML=output;
        },1000)
        
}
createPost(){
    return new Promise((resolve,reject)=>{
        
    })
}