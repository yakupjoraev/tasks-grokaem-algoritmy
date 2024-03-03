const listOne = [1, 3, 5, 7, 9,]; // Объявление массива чисел
const listNames = [ // Объявление массива строк (имен)
  "Aaron", "Abigail", "Adam", "Alex", "Alexander", "Alice", "Amanda", "Amber", "Amy", "Andrew",
  "Angela", "Anna", "Anthony", "Ashley", "Austin", "Benjamin", "Brandon", "Brian", "Brittany", "Caleb",
  "Cameron", "Charles", "Chelsea", "Chloe", "Christopher", "Cody", "Daniel", "David", "Destiny", "Dylan",
  "Elizabeth", "Emily", "Emma", "Eric", "Ethan", "Gabriel", "Grace", "Hailey", "Haley", "Hannah",
  "Hunter", "Isaac", "Jacob", "James", "Jason", "Jennifer", "Jessica", "John", "Jonathan", "Jordan",
  "Joseph", "Joshua", "Justin", "Kaitlyn", "Katherine", "Kathryn", "Katie", "Kayla", "Kelly", "Kenneth",
  "Kevin", "Kyle", "Lauren", "Logan", "Madison", "Makayla", "Maria", "Mason", "Matthew", "Megan",
  "Michael", "Michelle", "Morgan", "Nathan", "Nicholas", "Nicole", "Olivia", "Paige", "Rachel", "Rebecca",
  "Richard", "Robert", "Ryan", "Samantha", "Samuel", "Sarah", "Savannah", "Seth", "Sophia", "Stephanie",
  "Stephen", "Steven", "Sydney", "Taylor", "Thomas", "Tiffany", "Timothy", "Travis", "Trevor", "Tyler",
  "Victoria", "William", "Zachary"
];

function binarySearch(list, item) { // Объявление функции для бинарного поиска
  let min = 0; // Начальный индекс минимального элемента в массиве
  let max = list.length - 1; // Начальный индекс максимального элемента в массиве

  while (min <= max) { // Пока минимальный индекс не превышает максимальный
    const middle = Math.floor((min + max) / 2); // Находим индекс среднего элемента
    const guess = list[middle]; // Получаем значение среднего элемента

    if (guess === item) { // Если угадали искомый элемент
      return middle; // Возвращаем его индекс
    } else if (guess > item) { // Если угадали слишком большое число
      max = middle - 1; // Сужаем диапазон до левой половины
    } else { // Если угадали слишком маленькое число
      min = middle + 1; // Сужаем диапазон до правой половины
    }
  }

  return null; // Если элемент не найден, возвращаем null
}

console.log(binarySearch(listNames, "Adam")); // Вызываем функцию для поиска "Adam" в массиве имен
