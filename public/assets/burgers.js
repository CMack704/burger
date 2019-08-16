$(function () {
    $(".change-devour").on("click", function (event) {
        let id = $(this).data("id");
        let changeTrue = $(this).data("changeDevour");
        let devourState = {
            devour: changeTrue
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function () {
                console.log("changed devour to", changeTrue);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-burger").on("click", function (event) {
        console.log("made it")
        event.preventDefault();
        var newBurger = {
            name: $("#burger-name").val().trim(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});
