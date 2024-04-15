#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let answere = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "please select operation",
            choices: ["Add", "view", "Exit"],
        },
    ]);
    if (answere.select === "Add") {
        let addTodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "Add item in the list",
        });
        todos.push(addTodo.todo);
        console.log(todos);
    }
    if (answere.select === "view") {
        console.log("***** TO-DO-LIST******");
        console.log(todos);
    }
    if (answere.select === "Exit") {
        console.log("Exiting program....");
        condition = false;
    }
}
