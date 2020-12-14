// Check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// CLick on X to delete todo
$("ul").on("click", "span", function(eventObject) {
    // $(this) refers to span
    $(this).parent().fadeOut(500, function() {
        // $(this) refers to parent()
        $(this).remove(); 
    });
    eventObject.stopPropagation();
});

$("input[type='text']").on("keypress", function(eventObject) {
    if(eventObject.which === 13) {
        // grabbing new todo text
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add todoText
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});