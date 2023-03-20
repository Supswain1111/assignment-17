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

function createPost(post) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        posts.push(post);
        const error = false;

        if(!error){
            resolve();

        }
        else{
            reject('error:something went wrong');
        }
    },2000);
    });
    
};

/*createPost(
{title: 'hello three',body: 'that way'})
.then(getPost)
.catch(error=> console.log(error));
*/
//promise.all


/*const promise1=Promise.resolve('hello world');
const promise2=10;
const promise3 = new Promise((resolve,reject) =>
setTimeout(resolve,2000 ,'goodbye'));


Promise.all([promise1,promise2,promise3]).then((values)=>
console.log(values));
*/
