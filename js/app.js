$(() => {
  // ACNH URL
  let link = `https://acnhapi.com/v1a/villagers/`;

  $.ajax({
    url: link,
    type: "GET",
    dataType: "json",
  }).then((villagers) => {
    const sliceArr = villagers.slice(0, 20);
    console.log(sliceArr);
    for (let villager of sliceArr) {
      const $villagers = $(".villagers");

      const $div = $("<div>").addClass("profile").appendTo($villagers);

      const $h3 = $("<h3>").text(villager.name["name-USen"]).appendTo($div);

      // const $h5 = $('<h5>').text(villager.personality)
      // .appendTo($div)

      const $image = $("<img>")
        .addClass("photo")
        .attr("src", villager.image_uri)
        .appendTo($div);
    }
  });
});
