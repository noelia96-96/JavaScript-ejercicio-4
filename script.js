// En este ejercicio tenéis que sustituir TODAS las funciones tradicionales por funciones flecha y que siga funcionando igual.

//sustituir los function por funciones flecha que menos caracteres requiera

const changeBackgroundButton = document.getElementById(
  "changeBackgroundButton"
);

changeBackgroundButton.addEventListener("click", function() {
  this.style.backgroundColor = getRandomColor();
});

let getRandomColor = () => {
  const letters = getLetters();
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let getLetters = () => '0123456789ABCDEF';

