function ziplist(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

function ziplistTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const list1 = [1, 2, 3];
const list2 = [4, 5, 6];
console.log(ziplist(list1, list2));
console.log(ziplistTheSimpleWay(list1, list2));
