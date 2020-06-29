// Given an array of integers, return indices of the two numbers such that they add up to a specific target.//

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


function twoSum(nums, target){
    let sum ;
    for(let i=0; i<nums.length; i++){
        for (let j=1; j<Array.length; j++){
            if(nums[i]+ nums[j] == target){
                sum += (i,j)
            }
        }
       
    } return sum
}
console.log(twoSum([2,7,11,5], 9))

