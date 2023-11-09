let guestList = ["Sir Zai", "Mam Wania", "Sir Muzhar", "Sir Usman" ]; document.write("<br>")
const cancelledGuest = guestList[2]; document.write("<br>")

document.write(`Unfortunately, ${cancelledGuest} cannot make it to dinner.`); document.write("<br>")

guestList[2] = 'Ali'; document.write("<br>")

document.write('Good news! We found a bigger dinner table.'); document.write("<br>")

guestList.unshift('Other Staff'); document.write("<br>")
guestList.splice(3, 0, 'Ayan'); document.write("<br>")
guestList.push('Rehan'); document.write("<br>")

document.write('Oops, it turns out that the new dinner table won\'t arrive in time.'); document.write("<br>")

document.write('Sorry, we can only invite two people to dinner.'); document.write("<br>")

while (guestList.length > 2) { document.write("<br>")
  const removedGuest = guestList.pop(); document.write("<br>")
  document.write(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`); document.write("<br>")
}

guestList.forEach((guest) => { document.write("<br>")
  document.write(`Dear ${guest}, please come to dinner this evening.`); document.write("<br>")
});

guestList = [];document.write("<br>")

document.write("After removing all the guests, the guest list is now ${guestList}.");

Output:
      Unfortunately, Sir Muzhar cannot make it to dinner.
      Good news! We found a bigger dinner table.
      Oops, it turns out that the new dinner table won't arrive in time.
      Sorry, we can only invite two people to dinner.
      Sorry, Rehan, we won't be able to invite you to dinner.
      Sorry, Sir Usman, we won't be able to invite you to dinner.
      Sorry, Ali, we won't be able to invite you to dinner.
      Sorry, Ayan, we won't be able to invite you to dinner.
      Sorry, Mam Wania, we won't be able to invite you to dinner.
      Dear Other Staff, please come to dinner this evening.
      Dear Sir Zai, please come to dinner this evening.
      After removing all the guests, the guest list is now .
