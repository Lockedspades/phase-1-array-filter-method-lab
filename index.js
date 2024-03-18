const { objectContaining } = require("expect");

// Code your solution here
function findMatching(Drivers, string){
    const lowercaseString = string.toLowerCase();
    let list = Drivers.filter(driver => {
        const lowerCaseDriver = driver.toLowerCase();
        return lowerCaseDriver.includes(lowercaseString);
    })
return list;
}
function fuzzyMatch(drivers, query){

    let list = drivers.filter(driver =>  driver.startsWith(query))
    return list;
}
function matchName(drivers, string) {
    return drivers.filter(function(driver) {
      return driver.name === string;
    });
  }
