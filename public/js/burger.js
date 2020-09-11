$(function() {
    $(".eatBurger").on("click", function(event) {
        const id = $(this).data("id");
        const newMeal = $(this).data("newMeal");

        const newEatenState = {
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

    $("#orderBtn").on("click", function (event){
        event.preventDefault();

        const newBurger = {
            burger_name: $("#burgerOrder").val().trim(),
            devoured: false
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
});