let counter = 0;

function test(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            counter++
            resolve(`$x value: $x{x}, counter:${counter}`)
        }, 1000)
    })
}

async function aFunc(val){
    console.log(`ready ${val} counter:${counter}`);
    const result = await test(val);
    console.log(result)

}

for (let x = 0; x < 10; x++){
    aFunc(x)
}