/*
label: statement
*/

let x = 0; 
mainloop: while (x < 10){
    for (let i of [1, 2, 3, 4, 5]){
        // do something
        if (i == 3){
            x++
            continue mainloop
        }
    }
}