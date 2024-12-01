const fs = require('fs')

let list1 = [];
let list2 = [];

function readListsFromFile() {
    try {
        const data = fs.readFileSync("./input.txt", "utf8")
        const numbers = data
            .trim()
            .split('\n')
            .map(line => line.trim().split(/\s+/).map(Number));
        for(i in numbers) {
            list1.push(numbers[i][0]);
            list2.push(numbers[i][1]);
        }
    }catch(err) {
        console.log(err);
    }
}

let calculateTotalDistance = () => {
    list1.sort();
    list2.sort();
    let totalDistance = 0;
    let similarityScore = 0;
    for(i in list1) {
        totalDistance += Math.abs(list1[i] - list2[i]);
        similarityScore += (count = list2.filter(x => x == list1[i]).length) * list1[i];
    }
    console.log("Similarity score for the provided list: " + similarityScore);
    return totalDistance;

}

readListsFromFile();
let result = calculateTotalDistance();
console.log("Total distance: " + result);
