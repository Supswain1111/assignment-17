console.log('PERSON 1: SHOWS TICKET');
console.log('PERSON 2: SHOWS TICKET');
const promiseWifeBringingTicket = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve('ticket');
    },3000);
});
promiseWifeBringingTicket.then((t)=>{
    console.log(`person 3: ${t}`);
});
console.log(`person 4: ${t}`)
console.log(`person 5: ${t}`)