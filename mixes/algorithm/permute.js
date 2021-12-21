const arr = [2, 9, 7, 4];

function permute(nums) {
  if (!nums || !nums.length) {
    return null;
  }
  if (nums.length === 1) {
    return [nums];
  }

  const ret = [];

  for (var i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const subGroups = permute(nums.filter((c) => c !== cur));
    subGroups.forEach((c) => {
      ret.push([cur, ...c]);
    });
  }
  return ret;
}

const all = permute(arr);
let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;
let arrMax, arrMin;

for (let box of all) {
  const num = `${box[0]}${box[1]}${box[2]}`;
  const ret = parseInt(num) * box[3];
  // console.log(`${num} * ${box[3]} = ${ret}`);
  if (ret > max) {
    arrMax = box;
    max = ret;
  }
  if (ret < min) {
    arrMin = box;
    min = ret;
  }
}
console.log(`max is: ${arrMax.slice(0, 3).join("")} * ${arrMax[3]}`);
console.log(`min is: ${arrMin.slice(0, 3).join("")} * ${arrMin[3]}`);
