    $(() => {

      let pageLimit = 10;
      let resultLimit = $('pageLimit').val() || 10
      console.log(resultLimit);
      // let villagerID = 2;
    // ACNH URL
    let link = `http://acnhapi.com/v1a/villagers/`

    $.ajax({
      url: link,
      type: "GET",
      dataType: "json",
      data: {
        // villagerID: {villagerID},
        $limit: resultLimit,
      },

    }).then(villagers => {
    for (let villager of villagers) {
      const $villagers = $('.villagers')

      const $div = $('<div>').appendTo($villagers)

      const $h3 = $('<h3>').text(villager.name['name-USen'])
      .appendTo($div)

      const $h5 = $('<h5>').text(villager.personality)
      .appendTo($div)

      const $image =
        $('<img>')
        .addClass('photo')
        .attr('src', (villager.image_uri))
        .appendTo($div)
      }
  })
})
