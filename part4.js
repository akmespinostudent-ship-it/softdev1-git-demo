// Part 4 — Inventory Records

const inventory = [
    {
        itemId: "S001",
        itemName: "Ultrasonic Sensor",
        category: "Sensors",
        quantity: 12,
        minimumStock: 10,
        unitPrice: 350
    },
    {
        itemId: "M001",
        itemName: "Arduino Uno",
        category: "Microcontrollers",
        quantity: 8,
        minimumStock: 10,
        unitPrice: 650
    },
    {
        itemId: "M002",
        itemName: "ESP32 Development Board",
        category: "Microcontrollers",
        quantity: 15,
        minimumStock: 8,
        unitPrice: 480
    },
    {
        itemId: "C001",
        itemName: "Bluetooth HC-05 Module",
        category: "Communication Modules",
        quantity: 5,
        minimumStock: 8,
        unitPrice: 420
    },
    {
        itemId: "P001",
        itemName: "220 Ohm Resistor Pack",
        category: "Passive Components",
        quantity: 100,
        minimumStock: 50,
        unitPrice: 120
    },
    {
        itemId: "P002",
        itemName: "10uF Capacitor Pack",
        category: "Passive Components",
        quantity: 45,
        minimumStock: 50,
        unitPrice: 150
    },
    {
        itemId: "S002",
        itemName: "Temperature Sensor",
        category: "Sensors",
        quantity: 20,
        minimumStock: 10,
        unitPrice: 275
    },
    {
        itemId: "C002",
        itemName: "LoRa Communication Module",
        category: "Communication Modules",
        quantity: 6,
        minimumStock: 5,
        unitPrice: 950
    }
];


// Function to determine whether an item needs restocking
function needsRestocking(item) {
    return item.quantity < item.minimumStock;
}


// Variables for inventory calculations
let totalQuantity = 0;
let totalValue = 0;
let itemsToRestock = [];

let mostExpensiveItem = inventory[0];
let highestQuantityItem = inventory[0];


// Process every inventory item using a loop
for (let i = 0; i < inventory.length; i++) {
    const item = inventory[i];

    // Calculate total quantity
    totalQuantity += item.quantity;

    // Calculate monetary value
    totalValue += item.quantity * item.unitPrice;

    // Check if item needs restocking
    if (needsRestocking(item)) {
        itemsToRestock.push(item);
    }

    // Find the most expensive item
    if (item.unitPrice > mostExpensiveItem.unitPrice) {
        mostExpensiveItem = item;
    }

    // Find the item with the highest available quantity
    if (item.quantity > highestQuantityItem.quantity) {
        highestQuantityItem = item;
    }
}


// Display inventory summary
console.log("CPE LABORATORY INVENTORY");
console.log("=========================");

console.log(`Total different inventory items: ${inventory.length}`);
console.log(`Total quantity of all units: ${totalQuantity}`);
console.log(`Total monetary value: ₱${totalValue.toFixed(2)}`);


// Display items that need restocking
console.log("\nITEMS THAT NEED RESTOCKING");
console.log("===========================");

if (itemsToRestock.length === 0) {
    console.log("No items need restocking.");
} else {
    for (let i = 0; i < itemsToRestock.length; i++) {
        const item = itemsToRestock[i];

        console.log(
            `${item.itemId} - ${item.itemName}: ` +
            `${item.quantity} units available ` +
            `(minimum: ${item.minimumStock})`
        );
    }
}


// Display most expensive item
console.log("\nMOST EXPENSIVE ITEM");
console.log("===================");

console.log(
    `${mostExpensiveItem.itemName} - ` +
    `₱${mostExpensiveItem.unitPrice.toFixed(2)} per unit`
);


// Display item with highest quantity
console.log("\nHIGHEST AVAILABLE QUANTITY");
console.log("===========================");

console.log(
    `${highestQuantityItem.itemName} - ` +
    `${highestQuantityItem.quantity} units`
);
