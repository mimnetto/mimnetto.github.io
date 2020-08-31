//
// const utc = new Date();
// console.log(utc.toDateString());
//
// $(() => {
//   let acnhData;
//
// $.ajax({
//   url:'http://acnhapi.com/v1a/villagers/',
//     type: 'GET',
//     dataType: "json",
// }).then(
//   (data)=>{
//
//     console.log(data);
//     acData = data.results;
//
//     const $villagers = $('.villagers')
//
//
//     const $div = $('<div>').appendTo($villagers)
//
//     const $h3 = $('<h3>').text(data.name['name-USen'])
//     .appendTo($div)
//
//     const $image =
//     $('<img>')
//     .attr('src',(data.image_uri))
//     .appendTo($div)
//
//
//   },
//     ()=>{
//         console.log('Womp womp');
//     }
// );
// })
//


$(()=>{
    $('.button').on('submit', (event)=>{

        event.preventDefault();

        const userInput = $('input[type="text"]').val();

        $.ajax({
            url:'http://acnhapi.com/v1a/villagers/'
            type: 'GET',
            dataType: "json",
        }).then(
          (data)=>{

            console.log(data);
            ancData = data.results;

            const $villagers = $('.villagers')


            const $div = $('<div>').appendTo($villagers)

            const $h3 = $('<h3>').text(data.name['name-USen'])
            .appendTo($div)

            const $image =
            $('<img>')
            .attr('src',(data.image_uri))
            .appendTo($div)


          },
            ()=>{
                console.log('Womp womp');
            }
        );
    })
})

$(() => {

  let pageLimit = 10;
  let resultLimit = $('pageLimit').val() || 10
  console.log(resultLimit);
  let villagerID = 1;

// ACNH URL
let link = `http://acnhapi.com/v1/villagers/`

$.ajax({
  url: link,
  type: "GET",
  dataType: "json",
  data: {
    villagerID: {villagerID},
    // personality: personality,
  },

}).then(villagers => {
for (let villager of villagers) {
  const $villagers = $('.villagers')

  const $div = $('<div>')
  .addClass('profile')
  .appendTo($villagers)

  const $h3 = $('<h3>').text(villager.name['name-USen'])
  .appendTo($div)

  // const $h5 = $('<h5>').text(villager.personality)
  // .appendTo($div)

  const $image =
    $('<img>')
    .addClass('photo')
    .attr('src', (villager.image_uri))
    .appendTo($div)
  }
})
})
