// จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง

function doubleAndReturnArgs(arr, ...numbers) {
  const number = numbers.map((num) => num * 2);
  return [...arr, ...number];
}

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// expexted result: [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgs([2], 10, 4));
// expexted result: [2, 20, 8]
