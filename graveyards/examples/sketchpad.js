  const changeColor = (event) => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red},${green},${blue})`;
}

$(()=>{
  $('form').on('submit', (event) => {
    event.preventDefault()
    const $inputValue = $('#input').val()
    parseInt($inputValue)
    console.log($inputValue)
    for (let i = 0; i < $inputValue; i++) { //loop through 1000
      let $div = $('<div>').addClass('boxes'); //create div
      $div.addClass('square'); //give new div class of square
      $('body').append($div); //append
    }
  })


  $('boxes').on('mouseover', changeColor)

});


// https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Moss/blob/master/unit_1/w03d04/instructor_notes/2.%20Sketchpad.md
