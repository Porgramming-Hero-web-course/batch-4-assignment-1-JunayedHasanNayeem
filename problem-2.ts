{
    const  removeDuplicates = (numbers: number[]): number[] => {
    return numbers.filter((number, indexValue) => numbers.indexOf(number) === indexValue);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 

}
