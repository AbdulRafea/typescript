const alien_color = 'green';

// @ts-ignore
if (alien_color === 'green') {
  console.log('The player earned 5 points for shooting the green alien.');
} else { // @ts-ignore
    if (alien_color === 'yellow') {
      console.log('The player earned 10 points for shooting the yellow alien.');
    } else if (alien_color === 'red') {
      console.log('The player earned 15 points for shooting the red alien.');
    }
}

Output:
      The player earned 5 points for shooting the green alien.
_____________________________________________________________________________________________________________________________________________________________
                                                            Version 2 (Yello Alien):
const alien_color = 'yellow';

// @ts-ignore
if (alien_color === 'green') {
  console.log('The player earned 5 points for shooting the green alien.');
} else { // @ts-ignore
    if (alien_color === 'yellow') {
      console.log('The player earned 10 points for shooting the yellow alien.');
    } else if (alien_color === 'red') {
      console.log('The player earned 15 points for shooting the red alien.');
    }
}

Output:
      The player earned 10 points for shooting the yellow alien.
  _____________________________________________________________________________________________________________________________________________________________
                                                            Version 3 (Red Alien):
const alien_color = 'red';

// @ts-ignore
if (alien_color === 'green') {
  console.log('The player earned 5 points for shooting the green alien.');
} else { // @ts-ignore
    if (alien_color === 'yellow') {
      console.log('The player earned 10 points for shooting the yellow alien.');
    } else if (alien_color === 'red') {
      console.log('The player earned 15 points for shooting the red alien.');
    }
}

Output:
      The player earned 15 points for shooting the red alien.
      
