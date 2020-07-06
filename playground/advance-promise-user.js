const add = (a, b) => {
    return new Promise((response, reject) => {
        setTimeout(() => {
            response(a+b);
        }, 2000)
    })
}

add(4, 6).then((sum) => {
        console.log(sum);  
        add(sum, 5).then((sum2)=>{
            console.log(sum2);
        }).catch((e)=>{
            console.log(e);
        });
    }
    ).catch((e) => {
        console.log(e);
    });

 // Promise chaining  & more readable formate.

add(3, 2).then((sum) => {
    console.log(sum);
    return add(sum, 3);
}).then((sum2) => {
    console.log(sum2);
}).catch((e) => {
    console.log(e);
});