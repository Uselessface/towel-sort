// пройтись по массиву for
// для каждого нечетного элемента определяем при помощи $
// из всего этого либо генерируем нвоый массив, либо в этот же массив
//пройтись по итоговому массиву и сделать джоин в строку и вернуть строку

//Math библиотека для array problems max min и avg элементы
module.exports = function towelSort (matrix=[]) {

let a=[];
for (let i = 0; i < matrix.length; i++) {
	if (i % 2===1) {
		a.push(matrix[i].reverse());
	}
	else {
		a.push(matrix[i]);
	}

}
let s=[];
for (let i = 0; i < a.length; i++) {
	s=s.concat(a[i]);
}
  return s;
}
