const pizzas = [
    {name: 'Pepperoni', toppings: ['pepperoni']}
];

const mappedPizzas = pizzas.map(item => item.name.toUpperCase());

console.log(mappedPizzas);