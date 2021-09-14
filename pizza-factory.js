module.exports = function pizzaOrderingOnline(){

    const largePizzaPrice = 87.99;
    const mediumPizzaPrice = 58.99;
    const smallPizzaPrice = 31.99;
    var totalPizzaPrice = 0;

    var smallTotal = 0;
    var mediumTotal = 0;
    var largeTotal = 0;

    var smallQuantity = 0;
    var mediumQuantity = 0;
    var largeQuantity = 0;

    var smallPizzaRemove = 0;
    var mediumPizzaRemove = 0;
    var largePizzaRemove = 0;
    var deleteTotal = 0;



    function buySmallPizza(PizzaS){
        // console.log(ClickedPizza)
        smallQuantity++;
        smallTotal = smallQuantity * smallPizzaPrice;
        // totalPizzaPrice = smallTotal;
        // console.log(smallPrice)
        
        return smallTotal 
        
        // return smallTotal 
        // return smallQuantity

        
    }
    // console.log(smallQuantity)

    function removeSmallPizza(){
        smallQuantity--;
        smallPizzaRemove =  smallTotal - smallPizzaPrice
        // smallPizzaRemove = smallQuantity / smallPizzaPrice
        // console.log(smallPizzaRemove)
        return smallPizzaRemove;
    }

    function removeMediumPizza(){
        mediumQuantity--;
        mediumPizzaRemove = mediumTotal - mediumPizzaPrice
        // mediumPizzaRemove = mediumQuantity / mediumPizzaPrice
        return mediumPizzaRemove; 
    }

    function removeLargePizza(){
        largeQuantity--;
        largePizzaRemove = largeTotal - largePizzaPrice
        // largePizzaRemove = largeQuantity / largePizzaPrice
        return largePizzaRemove
    }

    function buyMediumPizza(PizzaS){
        mediumQuantity++;
        mediumTotal = mediumQuantity * mediumPizzaPrice;
        return mediumTotal
    }

    function buyLargePizza(PizzaS){
        largeQuantity++;
        largeTotal = largeQuantity * largePizzaPrice;
        return largeTotal
    }

    function smallPizza(){
        return smallTotal;
    }

    function mediumPizza(){
        return mediumTotal;
    }

    function largePizza(){
        return largeTotal;
    }

    function deleteSmallPizza(){
        return smallPizzaRemove.toFixed(2);
    }

    function deleteMediumPizza(){
        return mediumPizzaRemove.toFixed(2);
    }

    function deleteLargepizza(){
        return largePizzaRemove.toFixed(2);
    }

    function totalPizzas(){
        totalPizzaPrice = (smallTotal + mediumTotal + largeTotal) - (smallPizzaRemove + mediumPizzaRemove + largePizzaRemove)
        return totalPizzaPrice.toFixed(2);
    }

    function removeTotal(){
        deleteTotal = smallPizzaRemove + mediumPizzaRemove + largePizzaRemove
        return deleteTotal.toFixed(2)
    }
    
    

    return{
        
        buySmallPizza,
        removeSmallPizza,
        buyMediumPizza,
        removeMediumPizza,
        buyLargePizza,
        removeLargePizza,
        smallPizza,
        mediumPizza,
        deleteSmallPizza,
        deleteMediumPizza,
        deleteLargepizza,
        largePizza,
        totalPizzas,
        removeTotal,
    
    }

}