// Code your solution here
const drivers = ["Bobby","Taylor","Mike","Jesus"]

function findMatching(collection,name){
    return collection.filter(
     (possibleMatch) => possibleMatch.toLowerCase() === name.toLowerCase()
    )
}








  
  function fuzzyMatch(source, testString) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
  }