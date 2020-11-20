
$(document).ready(function () { // wait end of load to apply script
    $("#add").on('click', function () { // handle click event linked to #add id target and apply function on
        let value = $("input").val(); // retrieve value filled on input
        if (value !== '') { // check if value string is not empty
            console.log('champ rempli');
            var el = $("<li></li>").text(value); // create li element with value filled and store it in el
            $(el).append("<button class='delete'>X</button>"); // add button X element to li element (el)
            $("#list").append(el); // on #list target, add el element created
            $("input").val(''); // empty the input field
        } else {
            alert('Merci d\'indiquer le nom de la tâche à ajouter'); // popup message on filed empty when list added
            console.log('champ non rempli')
        }
    });
});