#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 20000;
let mypin = 1111;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinanswer.pin === mypin) {
    console.log("Correct Your pin !!!");
    let operationans = await inquirer.prompt([
        {
            name: "operation",
            message: "select your option",
            type: "list",
            choices: ["withdrawl", "fast Cash", "checkbalance"],
        }
    ]);
    if (operationans.operation === "withdrawl") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your withdrawl amount",
                type: "number",
            }
        ]);
        if (amountans.amount > mybalance)
            (console.log("Insufficent Balance"));
        else {
            (mybalance -= amountans.amount);
            console.log(`Your Remaining Balance Is ${mybalance}`);
        }
    }
    ;
    if (operationans.operation === "fast Cash") {
        let fast = await inquirer.prompt([
            {
                name: "cash",
                message: "select the amount which you withdrawl",
                type: "list",
                choices: [1000, 2000, 3000, 5000]
            }
        ]);
        mybalance -= fast.cash;
        console.log(`you have successfully withdrawl ${fast.cash} \n Your Remaining is ${mybalance}`);
    }
    else if (operationans.operation === "checkbalance")
        console.log(`your Balance Is ${mybalance}`);
}
else {
    console.log("Incorrect Your Pin");
}
;
