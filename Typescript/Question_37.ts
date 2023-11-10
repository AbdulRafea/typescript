// Define the function make_shirt with default parameters for size and message
function make_shirt(size = 'large', message = 'I love TypeScript') {
    console.log(`The size of the shirt is ${size} and the message printed on it is: '${message}'.`);
}

// Call the function with no arguments to get a large shirt with the default message
make_shirt();

// Call the function with a size argument for a medium shirt with the default message
make_shirt('medium');

// Call the function with both arguments for a shirt of any size with a different message
make_shirt('small', 'JavaScript Rocks!');

Output:
The size of the shirt is large and the message printed on it is: 'I love TypeScript'.
The size of the shirt is medium and the message printed on it is: 'I love TypeScript'.
The size of the shirt is small and the message printed on it is: 'JavaScript Rocks!'.
