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
