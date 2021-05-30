function matrix(number) {
    let row = '';
    for (let index = 0; index < number; index++) {
       
        for (let j = 0; j < number; j++) {
            row += number +' ';
            
        }
       row += '\n';
        
    }
    console.log(row);
}
//console.log(matrix(3));
matrix(3);
matrix(7);
matrix(2);
