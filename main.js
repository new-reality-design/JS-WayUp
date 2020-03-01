/*
    TASK 1

    Вывести в консоль с помощью цикла  WHILE, все нечетные числа от 30 до 40
*/

var i = 30;

while (i < 40) {
  i++;
  if (i % 2 == 0) {
    continue;
  }
  console.log('TASK 1 i: ', i);
}

/*
    TASK 2

    Вывести в консоль с помощью цикла FOR, все четные числа от 70 до 40. Первым четным числом должно быть 70.     
*/

//ВАРИАНТ 1
for (var k = 70; k >= 40; k--) {
  if (k % 2 != 0) {
    continue;
  }
  console.log('TASK 2 k: ', k);
}

//ВАРИАНТ 2
for (var k = 70; k >= 40; k = k - 2) {
  console.log('TASK 2 k: ', k);
}

/*
    TASK 3

    Переведите цикл FOR из задания 2, в цикл WHILE.      
*/

var m = 70;

while (m >= 40) {
  m--;
  if (m % 2 != 0) {
    continue;
  }
  console.log('TASK 3 m: ', m);
}

/*
    TASK 4

    С помощью любого известного Вам цикла из JavaScript, найдите сумму чисел от 1 до 100, и выведите результат в консоль.       
*/

var sum = 0;

for (var y = 1; y <= 100; y++) {
  sum = sum + y;
}
console.log('TASK 4 sum: ', sum);

/*
    TASK 5

    Вывести 10 строчек со смайликом : ':)' . На первой строчке один смайлик, на второй два,и так далее. На последней должно быть 10 смайликов.   
    
*/

var out5 = '';

for (var r = 0; r < 10; r++) {
  out5 = out5 + ':)';
  console.log('out5: ', out5);
}

/*
    TASK 6

    Напишите программу, которая выводит на экран числа от 1 до 150. 
    При этом вместо чисел, кратных трем, программа должна выводить слово «Java»,
    а вместо чисел, кратных пяти — слово «Script». 
    Если число кратно и 3, и 5, то программа должна выводить слово «JavaScript»       
*/

//ВАРИАНТ 1
for (var e = 1; e <= 150; e++) {
  if (e % 3 == 0 && e % 5 == 0) {
    console.log('JavaScript');
  } else if (e % 5 == 0) {
    console.log('Script');
  } else if (e % 3 == 0) {
    console.log('Java');
  } else {
    console.log('e: ', e);
  }
}

//ВАРИАНТ 2
for (var w = 1; w <= 150; w++) {
  w % 3 == 0 && w % 5 == 0 ? console.log('JavaScript') :
    w % 3 == 0 ? console.log('Java') :
    w % 5 == 0 ? console.log('Script') :
    console.log('w: ', w);
}
/* 
    TASK 7
    У нас есть число 1000
    Делите его на 2 столько раз, пока результат деления не станет меньше 50.
    Посчитайте количество итераций необходимых для выхода из цикла и выведите результат в консоль
*/

var num7 = 1000,
  num7divided = 0,
  count7 = 0;

while (num7 > 50) {
  num7divided = num7 / 2;
  num7 = num7divided;
  count7++;
  console.log('num7 : ', num7);
}
console.log('count7 : ', count7);


/*
    TASK 8
    Напишите программу, которая используя цикл while выведет все числа от 45 до 670, кратные 10.
*/

//ВАРИАНТ 1
var numTask8_1 = 45,
  outTask8_1 = '';

while (numTask8_1 <= 670) {
  numTask8_1++;

  if (numTask8_1 % 10 != 0) {
    continue;
  }
  outTask8_1 += numTask8_1 + ' ';
}
console.log('outTask8_1: ', outTask8_1);

//ВАРИАНТ 2
var numTask8_2 = 45,
  outTask8_2 = '';

while (numTask8_2 <= 670) {
  numTask8_2++;

  if (numTask8_2 % 10 == 0) {
    outTask8_2 += numTask8_2 + ' ';
  }
}
console.log('outTask8_2: ', outTask8_2);