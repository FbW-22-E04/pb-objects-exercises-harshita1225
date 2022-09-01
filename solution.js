const { TRUE } = require("sass");

//1
const data = { a: 1 };

function isPlainObject(data) {
  if (data.constructor !== Array && data.length !== 0) return true;
  else return false;
}
console.log("is plain ==>", isPlainObject(data)); // true
console.log("is plain ==>", isPlainObject([1, 2, 3]));
console.log(typeof [1, 2, 3]);

//2
const data2 = { a: 1, b: 2 };
function makePairs(obj) {
  return Object.entries(obj);
}
console.log(makePairs(data2)); // [['a', 1], ['b', 2]]

//3

const data3 = { a: 1, b: 2 };
function without(obj, x) {
  const result = Object.entries(obj).filter(
    (Element, i) => !Element.includes(x)
  );
  console.log(result);
  const resultObj2 = Object.fromEntries(result);
  return resultObj2;
}
console.log("---------------------------", without(data3, "b")); // { a: 1 }

//4

const data4 = { a: 1, b: undefined };
const data40 = { a: undefined };
function isEmpty(data1) {
  const values = Object.values(data1);
  if (values.length === 0) {
    return true;
  }
  for (const i in data1) {
    if (data1[i] !== undefined) {
      return false;
    }
  }
  return true;
}
console.log("is empty", isEmpty(data4)); // false
console.log("is empty", isEmpty(data40)); // true

//5
const data5 = { a: 1, b: 1 };
const data51 = { a: 1, b: 1 };
const data52 = { a: 1, b: 2 };

function isEqual(data1, data2) {
  return JSON.stringify(data1) === JSON.stringify(data2) ? true : false;
}

console.log(isEqual(data5, data51)); // true
console.log(isEqual(data5, data52)); // false

//6
const data6 = { a: { b: [1, 2, 3] } };
function invoke(data, str, func, args) {
  let strArr = str.split(".");
  const result = strArr.reduce((acc, item) => {
    return acc[item];
  }, data);
  return Array.prototype[func].apply(result, args);
}
console.log("SOLUTION=============", invoke(data6, "a.b", "splice", [1, 2]));

//7
const data7 = { a: { b: undefined } };
function isEmptyDeep(obj) {
  const values = Object.values(obj);

  if (values.length === 0) return true;

  for (const i in obj) {
    for (const j in obj) {
      if (obj[j] !== undefined) {
        return false;
      }
    }
  }

  return true;
}
console.log("isEmptyDeep ==>", isEmptyDeep({}));
console.log("isEmptyDeep ==>", isEmptyDeep({ a: { b: [] } }));
console.log("isEmptyDeep ==>", isEmptyDeep(data7));

//8
const data8 = { a: 1, b: { c: 1 } };
const data81 = { a: 1, b: { c: 1 } };
const data82 = { a: 1, b: { c: 2 } };

function isEqualDeep(data1, data2) {
  return JSON.stringify(data1) === JSON.stringify(data2) ? true : false;
}

console.log("is equal deep ==>", isEqualDeep(data8, data81)); // true
console.log("is equal deep ==>", isEqualDeep(data8, data82)); // false

//9

const data9 = { a: 1, b: 2 };
const data91 = { c: 1, b: 2 };

function intersection(obj1, obj2) {
  const result = {};
  for (const key1 in obj1) {
    for (const key2 in obj2) {
      if (key1 === key2 && obj1[key1] === obj2[key2]) result[key1] = obj1[key1];
    }
  }
  return result;
}
console.log(intersection(data9, data91));
console.log(`---------------------------------------`);

//10
const data10 = { a: 1, b: { c: 3 } };
const data11 = { c: 1, b: { c: 3 } };
function intersectionDeep(obj1, obj2) {
  const result = {};
  for (const key1 in obj1) {
    for (const key2 in obj2) {
      if (
        key1 === key2 &&
        JSON.stringify(obj1[key1]) === JSON.stringify(obj2[key2])
      ) {
        result[key1] = obj1[key1];
      }
    }
  }
  return result;
}

console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }
