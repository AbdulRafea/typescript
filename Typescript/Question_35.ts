const animals = ["Dog", "Cat", "Rabbit"];

// Loop to print the name and statement about each animal
for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];
  let statement;

  if (animal === "Dog") {
    statement = "A dog would make a great pet.";
  } else if (animal === "Cat") {
    statement = "A cat can be a wonderful companion.";
  } else if (animal === "Rabbit") {
    statement = "A rabbit is a cute and low-maintenance pet.";
  }

  document.write(`${animal}: ${statement}`);
}

// Additional line outside the for loop
document.write("Any of these animals would make a great pet.");

Output:
  Dog: A dog would make a great pet.
  Cat: A cat can be a wonderful companion.
  Rabbit: A rabbit is a cute and low-maintenance pet.
  Any of these animals would make a great pet.
