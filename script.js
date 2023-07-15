function threeSum(arr, target) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order

  let closestSum = arr[0] + arr[1] + arr[2]; // Initialize closestSum with the sum of the first three numbers
  let diff = Math.abs(target - closestSum); // Initialize the minimum difference as the absolute difference between target and closestSum

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; // Pointer for the second element
    let right = arr.length - 1; // Pointer for the third element

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right]; // Calculate the sum of three elements
      const newDiff = Math.abs(target - sum); // Calculate the difference between the sum and the target

      if (newDiff < diff) {
        // Update the closest sum and difference if the new difference is smaller
        closestSum = sum;
        diff = newDiff;
      }

      if (sum < target) {
        // If the sum is smaller than the target, move the left pointer to the right to increase the sum
        left++;
      } else {
        // If the sum is greater than or equal to the target, move the right pointer to the left to decrease the sum
        right--;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;

