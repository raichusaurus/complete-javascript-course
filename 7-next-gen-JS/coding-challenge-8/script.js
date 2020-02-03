class TownElement {
    constructor(name, buildYear) {
        this.name = name
        this.buildYear = buildYear
    }
}

class Street extends TownElement {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear)
        this.length = length
        this.size = size
    }

    classifyStreet() {
        const classification = new Map()
        classification.set(1, 'tiny')
        classification.set(2, 'small')
        classification.set(3, 'normal')
        classification.set(4, 'big')
        classification.set(5, 'huge')

        console.log(`${this.name}, which was built in ${this.buildYear}, is a ${classification.get(this.size)} street.`)
    }
}

class Park extends TownElement {
    constructor(name, buildYear, numTrees, area) {
        super(name, buildYear)
        this.numTrees = numTrees
        this.area = area
    }

    getTreeDensity() {
        const treeDensity = this.numTrees / this.area
        console.log(`${this.name} has a tree density of ${treeDensity} tree per square km.`)
    }
}

const allParks = [
    new Park('Green Park', 1987, 215, 0.2),
    new Park('National Park', 1894, 3541, 2.9),
    new Park('Oak Park', 1953, 949, 0.4)]

const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)
]

function calcAverage(arr) {
    const sum = arr.reduce((previous, current, index) => previous + current, 0)

    return [sum, sum / arr.length]
}

function reportParks(parks) {
    console.log ('----PARKS REPORT----')

    // Density
    parks.forEach((current) => current.getTreeDensity())

    // Average Age
    const ages = parks.map(current => new Date().getFullYear() - current.buildYear)
    const [ageTotal, ageAvg] = calcAverage(ages)
    console.log(`The average age of the parks is ${ageAvg / parks.length}.`)

    // Which park has more than 1000 trees

    const i = parks.map(current => current.numTrees).findIndex(current => current >= 1000)
    console.log(`${parks[i].name} has more than 1000 trees, with ${parks[i].numTrees}.`)
}

function reportStreets(streets) {

    console.log('----STREETS REPORT----')

    // Total and average length of the town's streets
    const lengths = streets.map(current => current.length)
    const [lengthTotal, lengthAvg] = calcAverage(lengths)
    console.log(`Our ${streets.length} have a total of ${lengthTotal} km, with an average of ${lengthAvg} km.`)

    // Classify sizes
    streets.forEach(current => current.classifyStreet())
}

reportParks(allParks)
reportStreets(allStreets)