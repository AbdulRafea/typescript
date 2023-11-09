const username = ["admin","personal","kids","intertainment","guest"];
for (let i = 0; i < username.length; i++ ){
    if (username[i] === "admin"){ 
    console.log("Hello admin, whould like to see a status report?");
    } else {
        console.log(`Hello ${username[i]}, thank you for logging in again.`)
    }
    }
output:
"Hello admin, whould like to see a status report?" 
"Hello personal, thank you for logging in again." 
"Hello kids, thank you for logging in again." 
"Hello intertainment, thank you for logging in again." 
"Hello guest, thank you for logging in again." 
