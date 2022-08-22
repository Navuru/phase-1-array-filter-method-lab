// Code your solution here

function findMatching (drivers,name) {
    return drivers.filter(function (driver) {
        return driver.toUpperCase().includes(name.toUpperCase());
    })
}

function fuzzyMatch (drivers,name) {
    return drivers.filter(function (driver){
        return driver.toUpperCase().startsWith(name.toUpperCase());
    })

}
function matchName (drivers,name) {
    return drivers.filter(function (driver){
        return driver.name === name;
    })
}