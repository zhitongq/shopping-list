$(function() {
    $('#js-shopping-list-form').on('submit', function(event) {
        
        event.preventDefault(); 

        const newItem = $(this).find('input[name="shopping-list-entry"]').val();
        if (newItem != '') {
            $('.shopping-list').append("<li><span class='shopping-item'>" + newItem + "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>");
        }
        
    });
});

$('.shopping-list').on('click', '.button-label', function(event) {

    const buttonName = $(this).text();
    console.log(buttonName);
    if (buttonName === "check") {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    }
    else if (buttonName === "delete") {
        $(this).closest('li').remove();
    }
});
