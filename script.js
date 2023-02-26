document.querySelector('.start').addEventListener('click', function() {

    document.querySelector('.start').classList.add('hide');
    document.querySelector('#birthday').classList.add('hide');
    document.querySelector('.again').classList.remove('hide');
    document.querySelector('table').classList.add('expand');


    let birthday = document.querySelector('#birthday').value;
    document.querySelector('.date').textContent = birthday;
    // получаем массив чисел из строки даты,убираем нули.
    let birthdayMas = birthday.match(/[1-9]/g).map(x=>parseInt(x));
    // первое число - сумма всех элеиентов массива
    let birthdayFirstNumber = birthdayMas.reduce((x,y)=>x+y,0);
    //второе число - складываем между собой цифры первого
    let birthdaySecondNumber = birthdayFirstNumber.toString().split('').map(x=>parseInt(x)).reduce((x,y)=>x+y,0);
    // третье число - от первого числа, отнимаем первую цифру даты, умноженную на 2
    let birthdayThirdNumber = birthdayFirstNumber - new Date(birthday).getDate().toString()[0]*2;
    //четвертое число получем путем сложение цифр третьего, если их больше двух
    let birthdayFourthNumber = 0;
    if (birthdayThirdNumber>=10) {
        birthdayFourthNumber = birthdayThirdNumber.toString().split('').map(x=>parseInt(x)).reduce((x,y)=>x+y,0);
    }
    
    document.querySelector('.count').textContent = `${birthdayFirstNumber} ${birthdaySecondNumber} ${birthdayThirdNumber} ${birthdayFourthNumber}`;


    let birthdayMas2 =document.querySelector('.count').textContent.match(/\S/g).map(x=>parseInt(x));
    let birthdayMasTotal = birthdayMas.concat(birthdayMas2);


    
    let table =  document.querySelectorAll('td');
    let info = document.querySelectorAll('#p');
    for (let i=0; i<table.length; i++) {
           table[i].textContent = birthdayMasTotal.filter(x=>x==table[i].getAttribute('value')).toString().replace(/,/g, '');
           if (table[i].textContent=='') table[i].textContent = 'нет';

           for (let j=0;j<info.length;j++) {
               if(info[j].getAttribute('data-num')==table[i].textContent) {
                   info[j].classList.remove('hide'); 
               }
               if (table[i].textContent=='нет') {
                   if (table[i].getAttribute('value')*10==info[j].getAttribute('data-num')) info[j].classList.remove('hide'); ;
                   
               }
               
               document.querySelector('.again').addEventListener('click', function() {
                    info[j].classList.add('hide');
                    document.querySelector('.start').classList.remove('hide');
                    document.querySelector('#birthday').classList.remove('hide');
                    document.querySelector('.again').classList.add('hide');
               });
               
               
           }
            
        } 
    

   

       
    });
     