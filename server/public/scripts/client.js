$(document).ready(onReady);

function onReady() {
    $('#js-btn-add-inventory').on('submit', submitInventory);
    
    getInventory();
}

function submitInventory() {
    event.preventDefault(); 

    const formArray = $(this).serializeArray(); 
    const dataForServer = {
        name: $('#js-form-foodName').val(),
        description: $('#js-form-description').val(),
    }; 

    $.ajax({
        type: 'POST',
        url: '/inventory',
        data: dataForServer,
    }).then(function(response) {
        getInventory();
    });
}

function getInventory() { 
    console.log('in getInventory');
    
    $.ajax({
        type: 'GET',
        url: '/inventory',
        }).then(function(response) {
        render(response);
    }); 
}

function render(response){
    const listOfInventory = response;
    $('.js-container').empty();
    for (let food of listOfInventory) {
        // console.log(food.name);
        $('.js-container').append(`
         <div>
             <p>${food.name} - ${food.description}</p>
         </div>
        `)
    }
}