/*eslint-env browser*/

function display_menu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - To view all products");
    window.console.log("update - To update an existing product’s inventory quantity");
    window.console.log("exit - Exit the program");
    window.console.log("");
}
function display(inventory) {
    "use strict";
    var i;
    for (i=0; i < inventory.length; i++){
        window.console.log(inventory[i][0] + " " + inventory[i][1] + " " + "(" + inventory[i][2] + ")" + " " + "$" + inventory[i][3]);
    }
    
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var i;
    var sku = Number(window.prompt("Enter the sku number"));
    var quantity = Number(window.prompt("Enter quantity you want to update"));
    for (i=0; i < inventory.length; i++) {
        if (inventory[i][0] === sku) {
            inventory[i][2] = quantity;
               window.console.log("The given quantity " + quantity + " for the sku number "+ sku + " was updated.");
        }
        else {
             window.console.log("The given sku number is not matched.");
        }
    }
 
    window.console.log("");
    
}

function main() {
    "use strict";
    var inventory, command;
    
    display_menu();
    
    inventory = [[4824, "Shirt", 10, 15.99], [6343, "Jeans", 22, 39.99], [3223, "Socks", 36, 9.99], [2233, "Hat", 12, 14.99], [9382, "Jackets", 5, 49.99]];
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();