console.log('Rock the dragon.');

$(() => {
$.ajax({
  url: 'https://dragon-ball-api.herokuapp.com/api/',
  type: 'GET',
  data: {
    '$limit' : 15,
  }
}).then(data => {
  alert('There are ' + data.length + ' from the planet of ' + planet + ' !')
  console.log(data)
})

})
