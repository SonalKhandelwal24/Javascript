const firstname = "Sonal";
const lastname = "Khandelwal";
const channel = new String('codewithchai');
// console.log(channel[4]);
// console.log(channel._proto_);

// console.log(`First name is ${firstname} and last name is ${lastname} `);

// String.concat
 const name = firstname.concat(" ", lastname);
 console.log(name);

//  String.len
const len = firstname.length;
// console.log(len);

//  String.chatAt
const char = firstname.charAt(4);
// console.log(char);                //l

//  String.chatCodeAt
const charCode = firstname.charCodeAt(3)
// console.log(charCode);             //97

console.log(firstname.toUpperCase()); 

// replace
const str = "This is java programming, java language ";

// const slic = str.slice(1, 15);
const slic = str.slice(-23, -15);
// const slic = str.slice(1);
// const slic = str.slice(-5);      
console.log(slic);

// const substringg = str.substring(2, 9);
const substringg = str.substring(-4);              //it assumes -ve values as 0
console.log(substringg);

const substrr = str.substr(-5);
// const substrr = str.substr(1, 10);
console.log(substrr);

const rep = str.replace("java", "code");
// console.log(rep);
const repAll = str.replaceAll("java", "code");
// console.log(repAll);
// console.log(str.repeat(3));
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// console.log(str.split(""));            //converted into an array




