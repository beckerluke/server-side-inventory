$(document).ready(onReady);

function onReady() {

    $.ajax({
        type: 'GET',
        url: '/inventory'
        }).then(function(response) {
        console.log(response);
    });
}