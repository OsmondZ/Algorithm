const nums = [2, 7, 11, 15];
const target = 9;

// function twoSums(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return "nothing";
// }

// function twoSums(nums, target) {
//   const diffs = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (diffs[target - nums[i]] !== undefined) {
//       return [diffs[target - nums[i]], i];
//     }

//     diffs[nums[i]] = i;
//   }
// }
function twoSums(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(target - nums[i]) !== undefined) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
}
console.log(twoSums(nums, target));
