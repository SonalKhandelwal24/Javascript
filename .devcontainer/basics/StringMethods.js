const str = "Sonal Khandelwal Sonal code";
console.log(str);

const str1 = str.indexOf("jis");
console.log(str1);

const str2 = str.lastIndexOf("john");
console.log(str2);

const str3 = str.search("Sonal");
console.log(str3);

console.log(str.includes("Sonal"));

console.log(str.match("Sonal"));
const iterator = str.matchAll("Sonal");
console.log(Array.from(iterator));

console.log(str.endsWith("Sonal"));

console.log(str.startsWith("Khandelwal", 6));


