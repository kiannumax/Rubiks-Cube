// require('jquery');

$(function () {
    $("#navButton").click(function () {
        var x = $("#faSearch");
        if(x.has("i").length) {
        $(".indexSearch").css("display","inherit");
        $("#navButton").html("<h5 class='fas fa-times'></h5>")
        }
        else {
            $(".indexSearch").css("display","none");
            $("#navButton").html("<i class='fas fa-search'></i>")
        }
    });
});
