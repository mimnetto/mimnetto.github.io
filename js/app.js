// console.log('Rock the dragon.');

$(()=>{
    $('form').on('submit', (event)=>{

        event.preventDefault();

        const userInput = $('input[type="text"]').val();

        $.ajax({
            url:'https://dragon-ball-api.herokuapp.com/api/planet/' + userInput
        }).then(
            (data)=>{
                $('#residents').html(data.residents);
            },
            ()=>{
                console.log('bad');
            }
        );
    })
})
