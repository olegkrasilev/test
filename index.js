function serialize(arr) {
    let str = arr.join(",");
    let encoded = Buffer.from(str).toString('base64');
    return encoded;
}

function deserialize(str) {
    let decoded = Buffer.from(str, 'base64').toString('ascii');
    let arr = decoded.split(",").map(Number);
    return arr;
}

let tests = [
    {name: "50 случайных чисел", data: Array.from({length: 50}, () => Math.floor(Math.random() * 300))},
    {name: "100 случайных чисел", data: Array.from({length: 100}, () => Math.floor(Math.random() * 300))},
    {name: "500 случайных чисел", data: Array.from({length: 500}, () => Math.floor(Math.random() * 300))},
    {name: "1000 случайных чисел", data: Array.from({length: 1000}, () => Math.floor(Math.random() * 300))},
    {name: "Все числа 1 знака", data: Array.from({length: 10}, (_, i) => i+1)},
    {name: "Все числа из 2х знаков", data: Array.from({length: 90}, (_, i) => i+10)},
    {name: "Все числа из 3х знаков", data: Array.from({length: 200}, (_, i) => i+100)},
    {name: "Каждого числа по 3", data: Array.from({length: 900}, (_, i) => Math.floor(i/3)+1)}
];

for (let test of tests) {
    let original = JSON.stringify(test.data);
    let compressed = serialize(test.data);
    let ratio = compressed.length / original.length;
    console.log(`Тест: ${test.name}`);
    console.log(`Исходная строка: ${original}`);
    console.log(`Сжатая строка: ${compressed}`);
    console.log(`Коэффициент сжатия: ${ratio}`);
    console.log("------");
}
