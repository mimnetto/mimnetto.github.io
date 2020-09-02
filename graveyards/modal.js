$( () => {

//Grabbing Elements
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');

//Event Handlers
const modal = () => {
  $modal.css('display', 'block');
}

const closeModal = () => {
  $modal.css('display', 'none');
}

//Event Listeners
$openBtn.on('click', openModal);

$closeBtn.on('click', closeModal);

});


// if the profile is clicked the modal opens
//
