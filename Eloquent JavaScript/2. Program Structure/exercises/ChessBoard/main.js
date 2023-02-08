let grid_col = 8
let grid_row = 8
let output = ""
for (let i = 0; i < grid_row; i++) {
    for (let j = 0; j < grid_col; j++) {
        output += (i + j) % 2 == 1 ? "#" : " "
    }
    output += '\n'

}
console.log(output)