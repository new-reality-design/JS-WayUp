/*
    Task 1:

    Необходимо создать информацию о себе , с полями где будет:
    -ваше имя,
    -ваш возраст,  
    -поле с вашим статусом о семейном положении, замужем/женаты (Либо истина , либо ложь)
    -по аналогии с предыдущим, поле с детьми

    Также необходимо определить тип данных всех ваших полей и вывести результат в консоль
*/

var firstName = 'Olga';
var secondName = 'Bereznaja';
var marriageStatus = true;
var hasChildren = false;

console.log('firstName: ', firstName);
console.log('typeof firstName: ', typeof firstName);

console.log('secondName: ', secondName);
console.log('typeof secondName: ', typeof secondName);

console.log('marriageStatus: ', marriageStatus);
console.log('typeof marriageStatus: ', typeof marriageStatus);

console.log('hasChildren: ', hasChildren);
console.log('typeof hasChildren: ', typeof hasChildren);

/* 
    Task 2:

    Напишите скрипт, который находит площадь прямоугольника

    -высота 23см,
    -шириной 10см

    Каждая сущность должна находиться в своей переменной
*/

var heigthCentimeters = 23;
var widthCentimeters = 10;
var rectangleArea = heigthCentimeters * widthCentimeters;

console.log('Высота прямоуголника в см: ', heigthCentimeters);
console.log('Ширина прямоуголника в см: ', widthCentimeters);
console.log('Общая площадь прямоуголника в см: ', rectangleArea);

/*
    Task 3:

    Напиши скрипт, который находит объем цилиндра
    
    -высота 10м  
    -площадь основания 4м

    Каждая сущность должна находиться в своей переменной
*/

var cylinderHeight = 10;
var cylinderBaseArea = 4;
var cylinderVolume = cylinderHeight * cylinderBaseArea;

console.log('Высота цилиндра в м: ', cylinderHeight);
console.log('Площадь основания цилиндра в м: ', cylinderBaseArea);
console.log('Объём цилиндра в м: ', cylinderVolume);

/*
    Task 4:

    Напиши рядом с каждым выражением , тот ответ который по вашему мнению выведет console.
    И потом сравните ваш результат с тем что на самом деле вывела консоль.
    
    Infinity - "1" //Infinity +++ Ok
    "42" + 42  //4242 +++ Ok
    2 + "1 1"  //13 ---  not ok. правильный ответ: '21' '1'
    99 + 101  //200 +++ Ok
    "1" - "1"  //NaN ---  not ok. правильный ответ: 0
    "Result: " + 10/2  //NaN ---  not ok. правильный ответ: '5'
    3 + " bananas " + 2 + " apples "  // 3 bananas 2 apples +++ Ok

*/

console.log(Infinity - "1");
console.log("42" + 42);
console.log(2 + "1 1");
console.log(99 + 101);
console.log("1" - "1");
console.log("Result: " + 10 / 2);
console.log(3 + " bananas " + 2 + " apples ");