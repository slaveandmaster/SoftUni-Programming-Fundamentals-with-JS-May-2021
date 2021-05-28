function condenseArrayToNumber(input) {
    let nums = input;
    // if (nums.length === 1) {
    //     console.log(1);
    // }
    while (nums.length > 1) {
        let condense = [];
        for (let i = 0; i < nums.length - 1; i++) {
            condense.push(nums[i] + nums[i + 1]);
            
            
        }
        nums = condense;
        
    }
    console.log(nums.join(''));
}
condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);