const image1 = document.getElementById('imageAmand');
const image2 = document.getElementById('imageAlisa');
const image3 = document.getElementById('imageAnthony');
const image4 = document.getElementById('imageKhalid');
const changeImageBtn = document.getElementById('changeImage');
let isOriginalImage = true;

// Обработчик события клика на кнопку
changeImageBtn.addEventListener('click', function () {
  if (isOriginalImage) {
    image1.src = 'img/online/trustme.png'; // Устанавливаем новый src
    image2.src = 'img/online/trustme.png';
    image3.src = 'img/online/trustme.png';
    image4.src = 'img/online/trustme.png';
  } else {
    image1.src = 'img/online/amanda.jpg'; // Возвращаем оригинальный src
    image2.src = 'img/online/alisa.jpg'; // Возвращаем оригинальный src
    image3.src = 'img/online/anthony.jpg'; // Возвращаем оригинальный src
    image4.src = 'img/online/khalid.jpg'; // Возвращаем оригинальный src
  }
  isOriginalImage = !isOriginalImage; // Инвертируем флаг
});
