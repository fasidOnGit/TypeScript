const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
};

printVehicle(oldCivic);

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}


interface Reportable {
  summary(): string;
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// oldCivic and drink are two different things has different properties
// but they can still use
// printSummary function!. Coz they are qualified as a Reportable type.
// This is Interface. Reportable interface is the gatekeeper to use printSummary.
// So in order to functions to use printSummary, it just need to be qualified as a Reportale Type. and that's it.
printSummary(drink);
printSummary(oldCivic);
