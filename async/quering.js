const promise1 = Promise.resolve('Promise 1 resolved');  
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 2 resolved'));  
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 3 resolved'));
Promise.all([promise1,promise2,promise3])
.then(values=>{
    console.log(values)
})
.catch (error=>{
    console.log(error);

    })