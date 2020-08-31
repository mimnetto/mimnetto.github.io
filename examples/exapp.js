//movies

$(()=>{
    $('form').on('submit', (event)=>{

        event.preventDefault();

        const userInput = $('input[type="text"]').val();

        $.ajax({
            url:'https://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
        }).then(
            (data)=>{
                $('#title').html(data.Title);
                $('#year').html(data.Year);
                $('#rated').html(data.Rated);
            },
            ()=>{
                console.log('bad');
            }
        );
    })
})

//pizza rat
console.log();

$(() => {
$.ajax({
  url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD',
  type: 'GET',
  data: {
    '$limit' : 5000,
  }
}).then(data => {
  alert('Retrieve ' + data.length + ' records from the datashet!')
  console.log(data)
})

})
