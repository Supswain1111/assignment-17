const posts =[
    {title: 'happy one',body: 'this way'},
    {title: 'happy two',body: 'this way get it'}
];

function getPost(){
    setTimeout(()=> {
        let output='';
        posts.forEach((post,index) =>{
            output+=`<li>${post.title}</li>`
        });
        document.body.innerHTML=output;
    },2000);
}

function createPost(post,callback) {
    
        setTimeout(() => {
            if(callback){
                callback();
            }
        posts.push(post);
    },2000);
};

createPost({title:'post 3',body:'hi'},getPost);