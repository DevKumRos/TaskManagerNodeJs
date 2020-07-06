const dowork = async () => {
    throw new Error('Same test');
    return 'Kumar';
};

dowork().then((data)=>{
console.log("Data: ", data);
}).catch((err)=>{
    console.log("err: ", err);
});

const add = (a, b) => {
    return new Promise((response, reject) => {
        setTimeout(() => {
            if(a< 0 || b< 0 )
                return reject('Number should be greater than Zero');
            response(a+b);
        }, 2000)
    })
};

// await always use with async 

const callMultipleAdd = async () =>{
    const sum = await add(10, -20);
    const sum1 = await add(sum, 20);
    const sum2 = await add(sum1, 50);
    return sum2;
}

callMultipleAdd().then((data) => {
    console.log("Data: ", data);
}).catch((err) => {
    console.log("Error: ", err);
})
