

$(function() {
    populateButtons(searchArray, 'searchButton', '#buttonsArea');
    console.log('page loaded');
});

var searchArray = ['Dog', 'Cat', 'Bird'];

function populateButtons(searchArray, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();
    for (var i = 0; i < searchArray; i++){
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}

$(document).on('click', 'searchButton', function(){
    var type = $(this).data('type');
    console.log('type');
})
