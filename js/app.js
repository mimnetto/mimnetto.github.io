$(() => {
  // ACNH URL
  let link = `https://acnhapi.com/v1a/villagers/`;

  $.ajax({
    url: link,
    type: "GET",
    dataType: "json",
  }).then((villagers) => {
    const sliceArr = villagers.slice(0, 50); //displays only first 50
    // console.log(sliceArr);
    for (let villager of sliceArr) {
      const $villagers = $(".villagers");

      // modal
      const $div = $("<div>")
      .addClass("profile")
      .attr("ID", "openModal")
      .appendTo($villagers);

      const $modal = $("<div>")
      .attr("ID", "modal")
      .appendTo($div);

      const $textbox = $("<div>")
      .attr("ID", "modal-textbox")
      .appendTo($modal);

      const $close = $("<a>")
      .addClass("modalClose")
      .attr("href", "#")
      .appendTo($textbox)

      const $name = $("h3")
      .addClass("name")
      .text(villager.name["name-USen"])
      .appendTo($textbox)

      const $jname = $("<h4>")
      .text(villager.name["name-JPja"])
      .appendTo($textbox)

      const $icon = $("<img>")
      .addClass("icon")
      .attr("src", villager.icon_uri)
      .appendTo($textbox)

      const $type = $('<h5>')
      .text(villager.personality)
      .addClass('type')
      .appendTo($textbox)

      const $birthday = $('<p>')
      .text(villager.birthday)
      .addClass('birthday')
      .appendTo($textbox)


      const $species = $('<p>')
      .text(villager.species)
      .addClass('species')
      .appendTo($textbox)

      const $gender = $('<p>')
      .text(villager.gender)
      .addClass('gender')
      .appendTo($textbox)

      // const $phrase = $('<p>')
      // .text(villager.catch-phrase)
      // .addClass('phrase')
      // .appendTo($textbox)




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
