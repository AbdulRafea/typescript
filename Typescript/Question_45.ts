interface Car {
    manufacturer: string;
    modelName: string;
    [propName: string]: any; // This will allow any number of additional properties
}

// Define the function createCar
function createCar(manufacturer: string, modelName: string, ...additionalProps: [string, any][]): Car {
    let car: Car = { manufacturer, modelName };

    // Add additional properties to the car object
    additionalProps.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Call the function with required arguments and additional information
const myCar = createCar('Tesla', 'Model S', ['color', 'red'], ['feature', 'Autopilot']);

// Print the car object
console.log(myCar);
Output:
      {
  "manufacturer": "Tesla",
  "modelName": "Model S",
  "color": "red",
  "feature": "Autopilot"
