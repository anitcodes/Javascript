// Use continue to skip a specific number

for(let i = 0; i<=20; i++){
    if(i === 10){
        continue; // Skip the rest of the loop when i is 10
    }
    console.log(i); // This will print numbers from 0 to 20, except 10

    if(i === 15){
        break; // Exit the loop when i is 15
    }
}