'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
    $(".alcohol-display .displayImage,.alcohol-display .alcohol-name").click(ingredientClick);

    $('#newProjectSubmitButton').click(function(e) {
        console.log('clicked');
        var email = $('#start-a-spark-email-input').val();
        var description = $('#start-a-spark-description-input').val();
        var file = $('#start-a-spark-file-input').val();
        // var summary = $('#new-project-form #summary').val();
        var json = {
            'user_email': email,
            'project_description': description,
            'file':  file
            // 'summary': summary
        };
        $.post('/post/new', json, function() {
            window.location.href = 'display'; // reload the page
        });
    });
}

function ingredientClick(e) {
    e.preventDefault();
    // $(this).find(".x-button").css("display", "inline");
    var button = $(this).parent().find(".x-button");
    console.log(button.css("display"));
    if (button.css("display") === 'inline') {
        button.css("display", "none");
    } else {
        button.css("display", "inline");
    }
}

// $$('.list-group').each(function(clickable) {
//     var list = clickable.getElements('li');

//     list.addEvent('click', function() {
//         var link = this.getElement('a');
//         if(this.getFirst('a')) {
//             window.location = link
//         }
//     });
// });
