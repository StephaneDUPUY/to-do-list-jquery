
$(document).ready(function () { // wait end of load to apply script
    $("#add").on('click', function () { // handle click event linked to #add id target and apply function on
        let value = $("input").val(); // retrieve value filled on input
        if (value !== '') { // check if value string is not empty
            console.log('champ rempli');
            var el = $("<li></li>").text(value); // create li element with value filled and store it in el
            $(el).append(" <button class='delete'>X</button>"); // add button X element with class 'delete' to li element (el)
            $("#list").append(el); // on #list target, add el element created
            $("input").val(''); // empty the input field with target input
            $(".delete").on('click', function () { // target on .delete class and listen on click event
                $(this).parent().remove(); // remove parent of X button (remove li element), "this" is the current element targetted (button)
            });
        } else {
            alert('Merci d\'indiquer le nom de la tâche à ajouter à votre liste'); // popup message on filed empty when list added
            console.log('champ non rempli');
        }
    });
});