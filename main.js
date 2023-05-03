"use strict";

const readline = require('readline');
const process = require('process');

const walletAmount = 5;

let items = [
    { name: 'apple', price: 1.99, },
    { name: 'banana', price: 10, },
    { name: 'orange', price: 2.49, },
    { name: 'bread', price: 3.99, },
    { name: 'milk', price: 2.29, }
];

let cartItems = [];

function buy(itemName) {
    const index = items.findIndex((item) => item.name === itemName);
    const item = items[index];

    if (item.price > walletAmount) {
        console.log('Not enough money!');
        return;
    }

    console.log(`Buying ${item.name} with price ${item.price}, adding it to cart`);
    cartItems.push(item);
    rl.question('Do you want to keep shopping (1) or go to checkout (2)? ', function (answer) {
        if (answer === '1') {
            console.log(avaliableItems());
        } else if (answer === '2') {
            showCart(cartItems);
        }
    });

}

function showCart() {
    console.log('Items in your cart:');
    if (cartItems.length === 0) {
        console.log('Your cart is empty.');
    } else {
        console.log(showCartItems());
        let cartSum = cartTotal(cartItems);
        if (cartSum > walletAmount) {
            console.log(totalAmountCheck());

        } else {
            console.log('Your total sum is: %d', cartSum);
            rl.question('Are you done with shopping (yes/no)? ', function (answer) {
                if (answer === 'yes') {
                    console.log(confirmation());
                } else if (answer === 'no') {
                    console.log(avaliableItems());
                }
            });
        }
    }
}

function totalAmountCheck() {
    let totalSum = cartTotal(cartItems);
    console.log('Your total sum is: %d', totalSum);
    console.log("You don't have enough money in your wallet, try removing some items from the cart.");
}

function cartTotal(cartItems) {
    let total = 0;
    for (let cartItem of cartItems) {
        total += cartItem.price;
    }
    return total;
}

function removeFromCart(itemName) {
    const index = cartItems.findIndex((item) => item.name === itemName);
    if (index === -1) {
        console.log(`Item '${itemName}' not found.`);
        return;
    }
    cartItems.splice(index, 1);
    console.log(`Item '${itemName}' deleted.`);
    rl.question('Do you want to keep shopping (1) or go to checkout(2)? ', function (answer) {
        if (answer === '1') {
            console.log(avaliableItems());
        } else if (answer === '2') {
            showCart(cartItems);
        }
    });
}

function avaliableItems() {
    console.log('List of items available:');
    items.forEach(item => { console.log(`${item.name} - ${item.price} `) });
}

function showCartItems() {
    cartItems.forEach(cartItem => { console.log(`${cartItem.name} - ${cartItem.price} `) });
}

function confirmation() {
    console.log('Thank you for shopping with us. See you again!');
}

function showHelp() {
    console.log('Commans:');
    console.log('buy (item) - for adding item in the chart');
    console.log('remove (item) - for removing item form the chart');
    console.log('cart - for opening cart');
    console.log('exit - for closing programme');
}

function displayWalletAmount() {
    console.log(`Your wallet amount is: ${walletAmount}`);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Store");
console.log(displayWalletAmount());
rl.prompt();

rl.question('Would you like to see items avaliable for sale (yes/no)? ', function (answer) {
    if (answer === 'yes') {
        console.log(avaliableItems());
    } else if (answer === 'no') {
        rl.question('Do you need help?', function (answer) {
            if (answer === 'yes') {
                showHelp();
            } else if (answer === 'no') {
                rl.close();
            }
        });

    }
    rl.on('line', (line) => {
        const [command, ...args] = line.split(' ');
        console.log(`Command: ${command}`);
        console.log(`Args: ${args}`);

        switch (command) {
            case 'buy':
                buy(args[0]);
                break;
            case 'remove':
                removeFromCart(args[0]);
                break;
            case 'help':
                showHelp();
                break;
            case 'cart':
                showCart();
                break;
            default:
                console.log(`Unknown command: ${command}`);
        }

        rl.prompt();
    }).on('close', () => {
        console.log('Exit');
        process.exit(0);
    });

});