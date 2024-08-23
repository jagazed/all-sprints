//1
// let str = 'Hello, world!';
// let startIndex = 7;
// let getSubStr = (str, startIndex) => {
//     return str.slice(startIndex);
// }
//
// console.log(getSubStr(str,startIndex));

//2
// let arr = [1, 2, 3, 4, 5]
// let getLastElements= (arr) => subArr = arr.slice(2);
// console.log(getLastElements([1, 2, 3, 4, 5], 3));

//3
// let subStr;
// let extractPath = (a, b) => subStr = a.slice(b);
// console.log(extractPath('https://example.com/blog/article', 18));

function extractPath(url, index) {
    const path = new URL(url).pathname;
    return path.slice(index);
}
console.log(extractPath('https://example.com/blog/article', 18)); // Выведет "/blog/article"
console.log("asd");
