const toDoList = require("./toDolist")


    const value = process.argv[2]
    toDoList.push(value)
    console.log(toDoList);