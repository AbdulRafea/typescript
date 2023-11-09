const usernames = ["admin", "Eric", "Alice", "Bob", "John"];

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
  }
}

Output:
      Hello admin, would you like to see a status report?
      Hello Eric, thank you for logging in again.
      Hello Alice, thank you for logging in again.
      Hello Bob, thank you for logging in again.
      Hello John, thank you for logging in again.
