function make_sandwich(...items: string[]): void {
  console.log("Sandwich order:");
  for (let i = 0; i < items.length; i++) {
    console.log(`- ${items[i]}`);
  }
  console.log("Enjoy your sandwich!");
}

make_sandwich('lettuce', 'tomato', 'cheese');
make_sandwich('ham', 'mayo');
make_sandwich('turkey');


Output:
"Sandwich order:" 
"lettuce" 
"tomato" 
"cheese" 
"Enjoy your sandwich!"  
"Sandwich order:" 
"ham" 
