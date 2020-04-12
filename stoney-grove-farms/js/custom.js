
//Popover that show list of ingredients

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

    $('.btnBeefStroganoff').popover({
        title: 'Ingredients',
        content:
            '1 1/2 pounds beef sirloin steak, 1/2 inch thick, 8 ounces fresh mushrooms, sliced(2 1/ 2 cups), 2 medium onions, thinly sliced ,1 garlic clove, finely chopped, 1/4 cup butter, 1 1 / 2 cups Progresso beef flavored broth(from 32- ounce carton), 1 / 2 teaspoon salt, 1 teaspoon Worcestershire sauce, 1 / 4 cup Gold Medal all - purpose flour, 1 1/2 cups sour cream, 3 cups hot cooked egg noodles ',
        selector: '.btn',
        trigger: 'focus'
    });

    $('.btnClementineHoney').popover({
        title: 'Ingredients',
        content:
            '100g pistachio or other nuts, 1/4 tsp ground cinnamon, plus more to serve, 8 clementines (seedless are best), 1 tsp butter, 2 tbsp runny honey plus more to serve, 1 tsp orange flower water (optional), 300g fresh or frozen raspberries, 500g pot reduced-fat Greek-style yogurt to serve',
        selector: '.btn',
        trigger: 'focus'
    });

    $('.btnHoneySwede').popover({
        title: 'Ingredients',
        content:
            '1 large swede peeled and cut into large chunks, 2 tbsp olive oil, 1 tbsp clear honey, 1 tsp cumin seed, 1 large red chilli deseeded and chopped, small bunch coriander chopped',
        selector: '.btn',
        trigger: 'focus'
    });

    $('.btnHoneyMadeleine').popover({
        title: 'Ingredients',
        content:
            '100g plain flour plus extra for dusting, 100g caster sugar, 100g butter melted, 1 whole egg separated plus 1 egg white, 1 tbsp clear honey, 1 tsp vanilla extract, icing sugar for dusting',
        selector: '.btn',
        trigger: 'focus'
    });

    $('.btnBeefBroccoli').popover({
        title: 'Ingredients',
        content:
            '3 Tablespoons cornstarch divided, 1 pound flank steak cut into thin 1-inch pieces, 1/2 cup low sodium soy sauce, 3 Tablespoons packed light brown sugar, 1 Tablespoon minced garlic, 2 teaspoons grated fresh ginger, 2 Tablespoons vegetable oil divided, 4 cups small broccoli florets, 1/2 cup sliced white onions',
        selector: '.btn',
        trigger: 'focus'
    });

    $('.btnBeefTenderloin').popover({
        title: 'Ingredients',
        content:
            '4 tablespoons butter divided, 1 teaspoon canola oil, 2 beef tenderloin steaks (1 inch thick and 4 ounces each), 1 cup sliced fresh mushrooms, 1 tablespoon chopped green onion, 1 tablespoon all-purpose flour, 1/8 teaspoon salt, Dash pepper, 2/3 cup chicken or beef broth, 1/8 teaspoon browning sauce optional',
        selector: '.btn',
        trigger: 'focus'
    });

    //Handles card flip
    $('.card').flip();

    <!--Contact Modal-->
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
});




