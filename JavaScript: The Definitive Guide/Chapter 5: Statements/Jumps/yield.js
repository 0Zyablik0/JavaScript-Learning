function* range(from, to){
    for (let i = from; i < to; i++){
        yield i;
    }
}

gen = range(0, 10)


for (elem of gen){
    console.log(elem)
}
