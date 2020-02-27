
<!--Popover that show list of ingredients-->

$(document).ready(function () {
    $('.btn1').popover({
        title: 'Ingredients',
        content:
            '1 stick unsalted butter. 1 teaspoon cinnamon sugar. 2 tablespoons granulated sugar. Pinch salt. 4 ripe peaches, halved and pitted. canola oil. Mint leaves, for garnish.',
        selector: '.btn',
        trigger: 'focus'
    });
    $('.btn2').popover({
        title: 'Ingredients',
        content: 'Eggs. Sugar. Bread flour. Honey',
        selector: '.btn',
        trigger: 'focus'
    });
    $('.btn3').popover({
        title: 'Ingredients',
        content:
            '1 (16 oz) bag pretzels. 1/4 cup butter melted. 1/4 cup honey. 3 Tbsp Dijon mustard. 1 tsp onion powder. 1/2 tsp garlic powder. 2 tsp dried mustard',
        selector: '.btn',
        trigger: 'focus'
    });

    <!--Handles card flip-->
    $('.card').flip();

    <!--Contact Modal-->
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
});




