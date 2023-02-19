let count = 0;

function cc(card) {
    // Only change code below this line
    const increament = [2, 3, 4, 5, 6];
    const zero = [7, 8, 9];
    const decreament = [10, "J", "Q", "K", "A"]
    if (increament.includes(card)) count += 1;
    if (zero.includes(card)) count += 0;
    if (decreament.includes(card)) count -= 1;

    if (count > 0) {
        return `${count} Bet`;
    } else {
        return `${count} Hold`;
    }
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');