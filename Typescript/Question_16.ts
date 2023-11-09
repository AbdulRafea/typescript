// Existing list of guests
const originalGuests = ["Sir Zai", "Mam Wania", "Sir Muzhar" ];

// Additional guests to invite
const additionalGuests = ["Sir Usman", "Other staff"]; 

// Combine the original guests and additional guests
const allGuests = originalGuests.concat(additionalGuests); 

// Inform people about the bigger table
document.write('Good news! We found a bigger dinner table.');

// Add a new guest to the beginning of the array
allGuests.unshift('NewGuest1'); document.write(" ");

// Add a new guest to the middle of the array
const middleIndex = Math.floor(allGuests.length / 2);
allGuests.splice(middleIndex, 0, 'NewGuest2'); 

// Use push() to add a new guest to the end of the array
allGuests.push('NewGuest3'); 

// Print a new set of invitation messages
document.write('Here is the updated guest list:'); 
for (let i = 0; i < allGuests.length; i++) { 
  document.write(`Dear ${allGuests[i]}, you are invited to the dinner.`);
}
output:// Existing list of guests
const originalGuests = ["Sir Zai", "Mam Wania", "Sir Muzhar" ];

// Additional guests to invite
const additionalGuests = ["Sir Usman", "Other staff"]; 

// Combine the original guests and additional guests
const allGuests = originalGuests.concat(additionalGuests); 

// Inform people about the bigger table
document.write('Good news! We found a bigger dinner table.');

// Add a new guest to the beginning of the array
allGuests.unshift('NewGuest1'); document.write(" ");

// Add a new guest to the middle of the array
const middleIndex = Math.floor(allGuests.length / 2);
allGuests.splice(middleIndex, 0, 'NewGuest2'); 

// Use push() to add a new guest to the end of the array
allGuests.push('NewGuest3'); 

// Print a new set of invitation messages
document.write('Here is the updated guest list:'); 
for (let i = 0; i < allGuests.length; i++) { 
  document.write(`Dear ${allGuests[i]}, you are invited to the dinner.`);
