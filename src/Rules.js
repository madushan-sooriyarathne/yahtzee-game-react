const getCount = arr => {
  let items = [];
  let counts = [];
  arr.forEach(item => {
    if (items.includes(item)) {
      counts.forEach(count => {
        if (count.value === item) {
          count.count++;
        }
      });
    } else {
      items.push(item);
      counts.push({ value: item, count: 1 });
    }
  });
  return counts;
};

// Upper rules
const nums = (number, arr, marks = undefined) => {
  let total = 0;
  arr.forEach(item => {
    total += item === number ? item : 0;
  });
  return total;
};

// 3 of a kind and 4 of a kind
const ofAKind = (number, arr, marks = undefined) => {
  let hasKind = false;
  const counter = getCount(arr);
  counter.forEach(count => {
    if (count.count >= number) {
      hasKind = true;
    }
  });
  if (hasKind) {
    return arr.reduce((acc, val) => acc + val);
  }
  return 0;
};

// straights (if large pass 5 as number and 40 as marks or if short pass 4 as number and 30 as marks)
const straight = (number, arr, marks) => {
  let sortedArr = arr;
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length; j++) {
      if (sortedArr[i] < sortedArr[j]) {
        let temp = sortedArr[i];
        sortedArr[i] = sortedArr[j];
        sortedArr[j] = temp;
      }
    }
  }
  let prevItem = 0;
  let seqCount = 0;
  sortedArr.forEach((item, index) => {
    if (index === 0) {
      prevItem = item;
      seqCount++;
    } else {
      if (prevItem + 1 === item) {
        seqCount++;
        prevItem = item;
      }
    }
  });
  if (seqCount === number) {
    return marks;
  }
  return 0;
};

const fullHouse = (number = undefined, arr, marks = undefined) => {
  const counts = getCount(arr);
  if (counts.length === 2) {
    if (
      (counts[0].count === 2 || counts[0].count === 2) &&
      (counts[1].count === 2 || counts[1].count === 3)
    ) {
      return 25;
    }
  }
  return 0;
};

// yahtzee
const yahtzee = (number = undefined, arr, marks = undefined) => {
  let firstItem = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== firstItem) {
      return 0;
    }
  }
  return 50;
};

// Chance
const chance = (number = undefined, arr, marks = undefined) => {
  return arr.reduce((acc, val) => acc + val);
};

export { nums, ofAKind, straight, fullHouse, yahtzee, chance };
