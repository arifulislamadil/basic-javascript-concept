const names = ["Alvi", "Arham", "Talha", "Safi", "Sameer", "Nazmi", "labli", "Arham", "Talha", "Labiba", "Tabassum", "Adiba"];
function removeDuplication(names) {
    const unique = [];
    for (element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }
    return unique;
}
console.log(removeDuplication(names));
//Output:
/* [
    'Alvi',
    'Arham',  'Talha',
    'Safi',   'Sameer',
    'Nazmi',  'labli',
    'Labiba', 'Tabassum',
    'Adiba'
] */