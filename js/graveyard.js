// console.log('Rock the dragon.');

const utc = new Date();
console.log(utc.toDateString());

$(()=>{
    $('form').on('submit', (event)=>{

        event.preventDefault();

        const userInput = $('input[type="text"]').val() || 10

        $.ajax({
            url:'http://acnhapi.com/v1a/villagers/' + userInput,
              type: 'GET',
        }).then(
            (data)=>{

              console.log(data);
              apiData = data.results;
                $('#name').html(data.name['name-USen']);

            },
            ()=>{
                console.log('Womp womp');
            }
        );
    })
})


$(() => {
  $('form').on('submit',event => {
  event.preventDefault()
  //grab the text from the input box and store in variable

  let userInput = $('input[type="text"]').val()
  console.log(userInput);


  //grab the borough bases on the id of the clicked button store that as well
  let species = $(event.target).attr('id')
  // console.log(borough);
  //set ID bsed on borough clicked

  // let link = `http://acnhapi.com/v1a/villagers/`

  $.ajax({
    url:'http://acnhapi.com/v1a/villagers/',
    type: "GET",


  }).then(villagers => {
    for (let villager of villagers){
      const $villagers = $('.villagers')


      const $div = $('<div>').appendTo($villagers)

      const $h3 = $('<h3>').text(villager.name['name-USen'])
      .appendTo($div)

      const $image =
      $('<img>')
      .attr('src',(villager.image_uri))
      .appendTo($div)


    }

  })
 })
})
