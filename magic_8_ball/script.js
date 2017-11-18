function main() {
    $('.get-answer-button').on('click', function() {
        var i = Math.floor(Math.random()*19);
        
        if (i == 0){
            $('.respuesta').text('It is certain');
        } else if (i == 1){
            $('.respuesta').text('It is decidedly so');
        } else if (i == 2){
            $('.respuesta').text('Without a doubt');
        } else if (i == 3){
            $('.respuesta').text('Yes, definitely');
        } else if (i == 4){
            $('.respuesta').text('You may rely on it');
        } else if (i == 5){
            $('.respuesta').text('As I see it, yes');
        } else if (i == 6){
            $('.respuesta').text('Most likely');
        } else if (i == 7){
            $('.respuesta').text('Outlook good');
        } else if (i == 8){
            $('.respuesta').text('Yes');
        } else if (i == 9){
            $('.respuesta').text('Signs point to yes');
        } else if (i == 10){
            $('.respuesta').text('Reply hazy try again');
        } else if (i == 11){
            $('.respuesta').text('Ask again later');
        } else if (i == 12){
            $('.respuesta').text('Better not to tell you now');
        } else if (i == 13){
            $('.respuesta').text('Cannot predict now');
        } else if (i == 14){
        $('.respuesta').text('Concentrate and ask again');
        } else if (i == 15){
            $('.respuesta').text('Don\'t count on it');
        } else if (i == 16){
            $('.respuesta').text('My reply is no');
        } else if (i == 17){
            $('.respuesta').text('My sources say no');
        } else if (i == 18){
            $('.respuesta').text('Outlook not so good');
        } else { 
            $('.respuesta').text('Very doubtful');  
        }
    });
}

$(document).ready(main);