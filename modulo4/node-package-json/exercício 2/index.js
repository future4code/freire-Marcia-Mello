const operation = process.argv[2];


switch(operation) {
    case 'add':
        console.log("The result is", Number(process.argv[3]) + Number(process.argv[4]))
        break;
    case "sub":    
        console.log("The result is", Number(process.argv[3]) - Number(process.argv[4]))
        break;
    case "mult":    
        console.log("The result is", Number(process.argv[3]) * Number(process.argv[4]))
        break;
    case "div":    
        console.log("The result is", Number(process.argv[3]) / Number(process.argv[4]))
        break;
        
}   