// Promise.all()->This returns the values of the all the promise when resolved if it gets rejected then it stops all other promise 
// and returns the first rejected reason.

// const p1=new Promise((resolve,rejet)=>{
//     resolve(2);
// });

// const p2=new Promise((resolve,reject)=>{
//     reject("This is rejeted!");
// });

// const p3=new Promise((resolve,reject)=>{
//     resolve("This is resolved!");
// });

// Promise.all([p1,p2,p3]).then((messages)=>{
//     console.log(messages);
// }).catch((err)=>{
//     console.log(err);
// })

// ------------------------------------------------------------------------------------------------------------------------------

// Promise.allSettled()-> The Promise.race() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise settles with the eventual state of the first promise that settles.


// I have tried to change the names for the(resolve,reject) to (yes,no) and it works completely fine.

// const p1=new Promise((yes,no)=>{
//     yes("This is p1!")
// });

// const p2=new Promise((yes,no)=>{
//     no("This is P2!")
// });

// const p3=new Promise((yes,reject)=>{
//     yes("This is p3!")
// });

// Promise.allSettled([p1,p2,p3]).then((messages)=>{
//     console.log(messages);
// }).catch((err)=>{
//     console.log(err);
// })


// -----------------------------------------------------------------------------------------------------------------------------

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("This is p1 and the time is 3sec ")
    },3000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("This is p2 and the time taken is 2sec")
    },2000);
});

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("This is p3 with the reject and the time taken for that is 1sec")
    },1000);
});


Promise.race([p1,p2,p3]).then((messages)=>{
    console.log(messages);
}).catch((err)=>{
    console.log(err);
});
