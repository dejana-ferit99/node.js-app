### LV 2 zadatak - JavaScript komandne aplikacije (JavaScript command line app)

## About the project

This project is made for 2nd laboratory exercises for Web programming course. 
Used for building this project: Visual Studio Code and Node.js

## Getting started

# Prerequires
To start up this programme locally, its necessary to install Visual Studio Code and Node.js.

Link to Visual Studio: https://code.visualstudio.com/download

![alt text](https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png)

Link for Node.js: https://nodejs.org/en/download

![alt text](https://www.svgrepo.com/show/354118/nodejs.svg)

To run this application, in terminal of Visual Studio command run this command, where path is location of this file:
```bash
cd path
```

# How to start application
After that, start noode.js file:
```bash
node main.js
```

## Short description of app functionalities

Firstly, user is informed with word "Store", and amount of money that the owner can use for shopping in store. That means the app is running. 
After that, user is asked if he wants to see items avaliable for sale. There are two possible answers: yes-it leads to list of avaliable items in store, no-user is asked if he needs help, if the answer is yes, cheatsheet of commands will me displayed, if no, app will be closed.
When items in the store are displayed, user can add them in cart with command buy <item>. Next, user is asked if he wants to keep hopping or go to checkout. Here youser can keep shopping and add more item to the cart, or he can remove some of the items from the cart with command remove <item>.  When users decides to go to checkout, items in cart will be displayed and total sum. If total sum is bigger than amount of money in wallet, user will have to remove some of items. In the end, user is asked if he is done with shopping. If he is, he will type yes and if no, he will bew redirected to list of items for sale.

Most important commands are: buy (item), remove (item), help, cart. 
  
 At any time can user type in command help and some of the most immportant commands will me displayed with their explanation. 
 
  ## Author
[@dejana-ferit99](https://github.com/dejana-ferit99)
