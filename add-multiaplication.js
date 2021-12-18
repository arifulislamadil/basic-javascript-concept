// chairWood = 3cft/chair;
// tableWood = 10cft/table;
// bedWood = 50cft/bed;
function woodCalculation(chair, table, bed) {
    const chairWood = chair * 3;
    const tableWood = table * 10;
    const bedWood = bed * 50;
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
const chair = 10;
const table = 5;
const bed = 3;
console.log(woodCalculation(chair, table, bed));
//Output: 230