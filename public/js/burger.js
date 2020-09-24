$(function() {
        $("#orderBtn").on("click", function (event){
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burgerOrder").val().trim(),
            // devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("New burger ordered!");
                location.reload();
            }
        );
    });
    $(".eatBurger").on("click", function(event) {
        let id = $(this).data("id");
        let newMeal = $(this).data("newMeal");

       let newEatenState = {
            devoured: newMeal
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {
                console.log("changed eaten status to", newMeal);
                location.reload();
            }
        );
    });

});