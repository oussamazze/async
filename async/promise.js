// let myPromise = new Promise ((resolve,reject)=>{
//     let success = true ;
//     if (success){
//         resolve ("operation succeded")
    
//     }
//     else {
//         reject ("operation failed")
//     }

// })
// function delay(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout (()=>{
//             resolve (`Resolved after ${ms} milliseconds`)
//         },ms)

//     });
    
    
//         }

        
    


// delay (5000)
// .then (result=>{
//     console.log(result);

// })
// .catch (error=>{
//     console.log(error);
// })
function delay(ms,message){
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
            resolve (message)
        },ms);
        });

            
        }
        delay (1000,"tasq one completed")
        .then (result=>{
            console.log(result);
            return delay(2000,"tasq 2 completed")
        })
        .then (result=>{
            console.log(result);
            return delay(1500,"tasq 3 completed")
        })
        .then (result=>{
            console.log(result);

            })
            .catch (error=>{
                console.log(error);

                })
                