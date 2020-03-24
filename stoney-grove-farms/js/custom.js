
<!--Popover that show list of ingredients-->

$(document).ready(function () {
    $('.btnPotRoast').popover({
        title: 'Ingredients',
        content:
           ' 5 lbs grass fed beef pot roast, 2 1 / 2 tsp kosher salt, divided 1/4 cup olive or grapeseed oil, 2 cups beef broth 2 tsp turmeric, 1 tsp cumin, Generous pinch cayenne, 3/4 tsp black pepper, 1 1 / 2 tbsp potato starch, 1 1 / 2 tbsp cold water, 3 bay leaves, 6 whole garlic cloves, 1 whole onion, sliced, 12 oz green beans, trimmed, 1 lb baby potatoes, 3 whole large carrots',
        selector: '.btn',
        trigger: 'focus'
    });
    $('.btnHamApple').popover({
        title: 'Ingredients',
        content: '4 lb(s) ham, bone in, 2 cup apple cider, wine, fruit juice, broth or water, 2 heaping spoonfuls Dijon mustard, horseradish, marmalade, jam, jelly or any condiment, 1 Tbsp dried rosemary or any other herb or spice, 1 Tbsp cornstarch, 2 Tbsp water',
        selector: '.btn',
        trigger: 'focus'
    });
    $('.btnButterTarts').popover({
        title: 'Ingredients',
        content:
            '2 1/2 cups (625 mL) unbleached all-purpose flour, 2 Tbsp(30 mL) granulated sugar, 1 tsp(5 mL) salt, 1 cup(250 mL) cold unsalted butter, cut in 1/2- inch(1 cm) cubes, 1/2 cup(125 mL) ice water(approx.), 1/2 cup(125 mL) packed brown sugar, 1/4 cup(60 mL) butter, melted, 3/4 cup(175 mL) pure maple syrup, 2 eggs, 2 tsp(10 mL) cider vinegar, 1 tsp(5 mL) vanilla, 1/2 cup(125 mL) raisins(approx.) or 3/4 cup(175 mL) toasted chopped pecans(approx.)(optional)',
        selector: '.btn',
        trigger: 'focus'
    });

    $('.btnBakedBeans').popover({
        title: 'Ingredients',
        content:
            '2 cup dried navy or white beans, soaked overnight, 1 cup maple syrup, 4 slices bacon, diced, 1 large onion, peeled and diced, 1 Tbsp dried ginger, 1 Tbsp dried mustard ',
        selector: '.btn',
        trigger: 'focus'
    });

    $('.btnScrambledEggs').popover({
        title: 'Ingredients',
        content:
            '4 Eggs, Milk, Fat, Seasonings',
        selector: '.btn',
        trigger: 'focus'
    });

    <!--Handles card flip-->
    $('.card').flip();

    <!--Contact Modal-->
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
});




