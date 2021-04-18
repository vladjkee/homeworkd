
// 2. Написать функцию, которая подсчитывает количество гласных в строке.
const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

  console.log(countVowels(`sghkai`));
  console.log(countVowels(`aaghjou`));
  console.log(countVowels(`aeiou`));
  console.log(countVowels(`ghljkl`));


  // 1. Написать функцию, которая проверяет, являются ли два слова анаграммами. (Анаграммы - слова, которые имеют одинаковую длину и состоят из одних и тех же букв, но в разном порядке. Пример: "воз", "зов")
  // Регистр букв не имеет значения. 
  // checkAnagram('рига', 'игра') // true
  // checkAnagram('aab', 'abb') // false


  const anagram = (s1, s2) => {
    let flag = true;

    if (s1.length !== s2.length) {
        flag = false;
    }
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    s1 = s1.split('').sort();
    s2 = s2.split('').sort(); 

    for (let i = 0; i < s1.length && flag; i++) {
        if (s1[i] !== s2[i]) {
            flag = false;
        }
    }

    return flag;
};


console.log(anagram('зов', 'воз'));
console.log(anagram('рига', 'игра'));
console.log(anagram('aab', 'abb'));

// 3. Написать функцию, которая принимает массив с числами и возвращает новый массив, который содержит отрицательные числа из первого массива.

let myArray = [4, -1, 0, 2, -67, 8, 10, -344];

function getNegativeNumbers(array) {
  return array.filter(value => value < 0);
}
console.log(getNegativeNumbers(myArray));

// 4.Написать функцию, которая принимает массив и возвращает новый массив, состоящий только из уникальных значений первого массива (значения не должны повторяться).


let strings = ['a',1,'a',2,'1',1,'a',2,4,'a',5,4,'b',6,3,4,'b',5,2,23,'b',1,4,4,4];
function unique(arr) {
  let result = [];

  for (let value of arr) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }

  return result;
}

console.log(unique(strings));
