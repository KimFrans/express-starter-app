const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const PizzaService = require('./pizza-factory');

const app = express();
const pizzaOnline = PizzaService()
const PORT =  process.env.PORT || 3016;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

let counter = 0;

app.get('/', function(req, res) {
	res.render('index', {
		// counter
	});
});

app.post('/buy-medium', function(req, res) {
	var pizzaType = req.body.PizzaS;
	pizzaOnline.buyMediumPizza(pizzaType)
	res.render('index',{
		smallTotal: pizzaOnline.smallPizza(),
		mediumTotal: pizzaOnline.mediumPizza(),
		largeTotal: pizzaOnline.largePizza(),
		grandTotal : pizzaOnline.totalPizzas(),
		// quantity : pizzaOnline.showSmallQuantity()
	})
});

app.post('/buy-large', function(req, res) {
	var pizzaType = req.body.PizzaS;
	pizzaOnline.buyLargePizza(pizzaType)
	res.render('index',{
		smallTotal: pizzaOnline.smallPizza(),
		mediumTotal: pizzaOnline.mediumPizza(),
		largeTotal: pizzaOnline.largePizza(),
		grandTotal: pizzaOnline.totalPizzas()
	})
});

app.post('/buy-small', function(req, res) {
	var pizzaType = req.body.PizzaS;
	// console.log(pizzaType)
	pizzaOnline.buySmallPizza(pizzaType)
	res.render('index',{
		smallTotal: pizzaOnline.smallPizza(),
		mediumTotal: pizzaOnline.mediumPizza(),
		largeTotal: pizzaOnline.largePizza(),
		grandTotal: pizzaOnline.totalPizzas()
	})
	// console.log(pizzaOnline.smallPizza())
});

app.post('/delete-small', function(req, res){
	pizzaOnline.removeSmallPizza()
	res.render('index',{
		smallTotal: pizzaOnline.deleteSmallPizza(),
		mediumTotal: pizzaOnline.mediumPizza(),
		largeTotal: pizzaOnline.largePizza(),
		grandTotal: pizzaOnline.totalPizzas()
	})
})

app.post('/delete-medium', function(req, res){
	pizzaOnline.removeMediumPizza()
	res.render('index',{
		smallTotal: pizzaOnline.smallPizza(),
		mediumTotal: pizzaOnline.deleteMediumPizza(),
		largeTotal: pizzaOnline.largePizza(),
		grandTotal: pizzaOnline.totalPizzas()
	})
})

app.post('/delete-large', function(req, res){
	pizzaOnline.removeLargePizza()
	res.render('index',{
		smallTotal: pizzaOnline.smallPizza(),
		mediumTotal: pizzaOnline.mediumPizza(),
		largeTotal: pizzaOnline.deleteLargepizza(),
		grandTotal: pizzaOnline.totalPizzas()
	})
})


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});