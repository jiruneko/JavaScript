// const myProfile = {
//     name: "じゃけぇ",
//     age: 31
// }

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`

// console.log(message1);

// const myProfile = ["じゃけぇ", 32]

// const message2 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`

// console.log(message2);

// const [name, age] = myProfile
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`)
// sayHello("じゃけぇ")

// const myProfile = {
//     age: 31
// }
// const { age, name = "ゲスト" } = myProfile
// console.log(age)
// console.log(name)

// const name = "じゃけぇ"
// const age = 31

// const myProfile = { name, age }
// console.log(myProfile)

// const arr1 = [1, 2]
// console.log(arr1)
// console.log(...arr1)

// const sumFunc = (num1, num2) => console.log(num1 + num2)
// sumFunc(arr1[0], arr1[1])
// sumFunc(...arr1)

// const arr2 = [1,2,3,4,5]
// const [num1, num2, ...arr3] = arr2
// console.log(num1)
// console.log(num2)
// console.log(arr3)

const arr4 = [10, 20]
const arr5 = [30, 40]
// console.log(...arr4);

const arr6 = [...arr4]
arr6[0] = 100
console.log(arr6)
console.log(arr4)


// const arr7 = [...arr4, ...arr5]
// console.log(arr7)

// const arr8 = arr4
// arr8[0] = 100
// console.log(arr4)
