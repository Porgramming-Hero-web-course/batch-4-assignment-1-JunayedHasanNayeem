{
    const countWordOccurrences = (sentence: string, word: string): number =>  {
    const wordsArray = sentence.toLowerCase().split(' ');
    const providedWord = word.toLowerCase();
    
    return wordsArray.filter(word => word === providedWord).length;
}

console.log(countWordOccurrences("I love typescript", "typescript")); 

}