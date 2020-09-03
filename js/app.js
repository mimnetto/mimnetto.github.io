$(() => {
  // ACNH URL
  let link = `https://acnhapi.com/v1a/villagers/`;

  $.ajax({
    url: link,
    type: "GET",
    dataType: "json",
  }).then((villagers) => {
    // const sliceArr = villagers.slice(0, 50); //displays only first 50
    // console.log(sliceArr);
    // for (let villager of sliceArr) {
    for (let villager of villagers) {
      const $villagers = $(".villagers");

      // modal

      const $div = $("<div>")
      .addClass("profile")
      .attr("ID", "openModal")
      .appendTo($villagers)
      .on('click', event => {
        $(event.currentTarget)
        $($modal).show()
      })

      const $modal = $("<div>")
      .attr("ID", villager.id) //make sure the modal shows correct villager
      .addClass("modal")
      .css('display', 'none')
      .appendTo('body');


      const $textbox = $("<div>")
      .attr("ID", "modal-textbox")
      .appendTo($modal);



      const $close = $("<p>")
      .addClass("modalClose")
      // .attr("href", "#")
      .text("X")
      .appendTo($textbox)
      .on('click', event => {
      $($modal).css('display', 'none')
      })

      const $info = $("<div>")
      .addClass('infos')
      .appendTo($textbox)

      const $icon = $("<img>")
      .addClass("icon")
      .attr("src", villager.icon_uri)
      .appendTo($info)

      const $name = $("<div>")
      .addClass("name")
      .html("<h3>&#x1F1FA;&#x1F1F8; " + villager.name["name-USen"] + "</h3>")
      // .text(villager.name["name-USen"])
      .appendTo($info)

      const $jname = $("<div>")
      .addClass("jpn")
      .html("<h5>&#x1F1EF;&#x1F1F5; " + villager.name["name-JPja"] + "</h5>")

      .appendTo($info)

      const $type = $('<mark>')
      .text(villager.personality)
      .addClass('type')
      .appendTo($info)

      const $stats = $('<div>')
      .addClass('stats')
      .appendTo($textbox)

      const $birthday = $('<div>')
      .html("<h4>Birthday:</h4> <p>\"" + villager["birthday-string"] + "\"<p>")
      .addClass('birthday')
      .appendTo($stats)


      const $species = $('<div>')
      .html("<h4>Species:</h4> <p>\"" + villager.species + "\"<p>")
      .addClass('species')
      .appendTo($stats)

      const $gender = $('<div>')
      .html("<h4>Gender:</h4> <p>\"" + villager.gender + "\"<p>")
      .addClass('gender')
      .appendTo($stats)

      const $phrase = $('<div>')
      .html("<h4>Catch Phrase:</h4> <p>\"" + villager["catch-phrase"] + "\"<p>")
      .addClass('phrase')
      .appendTo($stats)

      //villagers profiles
      const $h3 = $("<h3>")
      .text(villager.name["name-USen"]) //only display US English name
      .appendTo($div);

      const $h5 = $('<h5>')
      .text(villager.personality)
      .addClass('personality')
      .appendTo($div)

      const $image = $("<img>")
        .addClass("photo")
        .attr("src", villager.image_uri)
        .appendTo($div);
    }
  });
});
