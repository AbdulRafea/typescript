// Store the person's name with whitespace
// @ts-ignore
let name: string[] = "\t   John Doe\n";

// Print the name with whitespace
console.log("Name with whitespace:");
console.log(name);

// Print the name after stripping the whitespace
// @ts-ignore
let strippedName = name.trim();
console.log("Name after stripping whitespace:");
console.log(strippedName);

output: Name with whitespace 
 	             John Doe
 
Name after stripping whitespace 
 John Doe
