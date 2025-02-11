// if (false) {
//     console.log("ここのコードは実行されません");
// } else if {
//     console.log("こちらのコードが実行されます");
    
// }

try {
    nonExitingFunction()
    console.log("nonExitingFunctionでの例外により、これは実行されません。")
} catch (error) {
    console.error("nonExitingFunctionは存在しないため、例外が発生しました。")
    console.error("エラータイプ：" + error.name)
    console.error("エラーメッセージ：" + error.message)
} finally {
    console.log("後処理の記述が必要な場合はここに記述します")
}
console.log("例外が発生しても後続のコードが実行されます");
const jsonString = '{ "name": "Alice", age: 25 }'; // ageの前後に "" がないのでエラー
try {
  let b = 10 + a
} catch (error) {
  console.error("エラーが発生しました", error.message)
} finally {
    console.log("後続の処理")
}

try {
    const num = "3"
    if (typeof num != "number") {
        throw "numは整数型でなくてはダメ"
    }
    console.log(`${num} * 5 = ${num * 5}`);    
} catch (error) {
    console.error(error)
}
