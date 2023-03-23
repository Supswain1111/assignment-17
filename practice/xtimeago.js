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

function createPost(post,callback) {
    
    setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()});
            callback();
    },2000);
};
function create4thPost(post,callback) {
    
    setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()});
            callback();
},3000);
};

getPost();
createPost({title:'post 3',body:'hi'},getPost);
create4thPost({title:'post 4',body:'hi 4'},getPost);

var timer;
var count= 0;
function lastEditedTime(){
    count=0;
    clearInterval(timer)
    setInterval(()=>{
        count++;
        console.log(count);
    },3000);
}