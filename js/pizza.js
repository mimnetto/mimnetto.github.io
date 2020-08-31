$(() => {
  $('.button').on('click',event => {
  event.preventDefault()
  //grab the number from the input box and store in variable

  let userInput = $('input[type="number"]').val() || 10
  // console.log(userInput);


  //grab the borough bases on the id of the clicked button store that as well
  let borough = $(event.target).attr('id')
  // console.log(borough);
  //set ID bsed on borough clicked

  let link = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${borough}&agency=NYPD`

  $.ajax({
    url: link,
    type: "GET",
    data: {
      $limit: userInput
    }
  }).then(reports => {
    for (let report of reports){
      const $reports = $('.reports')

      const $div = $('<div>').appendTo($reports)

      const $h3 = $('<h3>').text(report.descriptor)
      .appendTo($div)

      const $text =
      $('<p>')
      .text(report.resolution_description)
      .appendTo($div)
      .hide()

      const $policeButton = $('<button>')
      .text('What did the police do!?')
      .appendTo($div)
      .on('click', event => {
        $(event.currentTarget)
        .parent() //div is the parent
        .children() //returns h3/p/button
        .eq(1) //senlects the p tag
        .toggle()
      }
    )
    }

  })
 })
})


// $(() => {
// $.ajax({
//   url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD',
//   type: 'GET',
//   data: {
//     '$limit' : 5000,
//   }
// }).then(data => {
//   alert('Retrieve ' + data.length + ' records from the datashet!')
//   console.log(data)
// })
//
// })
