// Part 6 — Integration Challenge: Laboratory Equipment Monitoring System

const LOW_STOCK_MESSAGE = "LOW STOCK";
const UNAVAILABLE_MESSAGE = "UNAVAILABLE";


// EQUIPMENT ARRAY
// Each object represents one equipment type.

const equipmentRecords = [
    {
        id: "EQ001",
        name: "Microscope",
        category: "Optical",
        quantityAvailable: 5,
        quantityBorrowed: 3,
        condition: "Good",
        minimumAvailable: 3
    },
    {
        id: "EQ002",
        name: "Bunsen Burner",
        category: "Heating",
        quantityAvailable: 2,
        quantityBorrowed: 4,
        condition: "Good",
        minimumAvailable: 2
    },
    {
        id: "EQ003",
        name: "Digital Balance",
        category: "Measuring",
        quantityAvailable: 0,
        quantityBorrowed: 3,
        condition: "Good",
        minimumAvailable: 1
    },
    {
        id: "EQ004",
        name: "Test Tube Rack",
        category: "Laboratory Supplies",
        quantityAvailable: 8,
        quantityBorrowed: 2,
        condition: "Good",
        minimumAvailable: 3
    },
    {
        id: "EQ005",
        name: "Centrifuge",
        category: "Processing",
        quantityAvailable: 1,
        quantityBorrowed: 2,
        condition: "For Repair",
        minimumAvailable: 2
    },
    {
        id: "EQ006",
        name: "pH Meter",
        category: "Measuring",
        quantityAvailable: 3,
        quantityBorrowed: 2,
        condition: "Good",
        minimumAvailable: 2
    },
    {
        id: "EQ007",
        name: "Hot Plate",
        category: "Heating",
        quantityAvailable: 0,
        quantityBorrowed: 2,
        condition: "Damaged",
        minimumAvailable: 1
    },
    {
        id: "EQ008",
        name: "Graduated Cylinder",
        category: "Measuring",
        quantityAvailable: 6,
        quantityBorrowed: 1,
        condition: "Good",
        minimumAvailable: 2
    },
    {
        id: "EQ009",
        name: "Safety Goggles",
        category: "Safety",
        quantityAvailable: 10,
        quantityBorrowed: 5,
        condition: "Good",
        minimumAvailable: 5
    },
    {
        id: "EQ010",
        name: "Spectrophotometer",
        category: "Optical",
        quantityAvailable: 2,
        quantityBorrowed: 1,
        condition: "For Repair",
        minimumAvailable: 2
    },
    {
        id: "EQ011",
        name: "Thermometer",
        category: "Measuring",
        quantityAvailable: 4,
        quantityBorrowed: 1,
        condition: "Good",
        minimumAvailable: 2
    },
    {
        id: "EQ012",
        name: "Tripod Stand",
        category: "Laboratory Supplies",
        quantityAvailable: 7,
        quantityBorrowed: 3,
        condition: "Good",
        minimumAvailable: 3
    }
];

// FUNCTION 1: Display all equipment records

function displayAllEquipment(records) {
    console.log("\nALL EQUIPMENT RECORDS");

    for (const equipment of records) {
        console.log(
            `ID: ${equipment.id} | ` +
            `Name: ${equipment.name} | ` +
            `Category: ${equipment.category} | ` +
            `Available: ${equipment.quantityAvailable} | ` +
            `Borrowed: ${equipment.quantityBorrowed} | ` +
            `Condition: ${equipment.condition} | ` +
            `Minimum: ${equipment.minimumAvailable}`
        );
    }
}

// FUNCTION 2: Identify low-stock equipment

function identifyLowStock(records) {
    const lowStock = [];

    for (const equipment of records) {
        if (equipment.quantityAvailable <= equipment.minimumAvailable) {
            lowStock.push(equipment);
        }
    }

    return lowStock;
}

// FUNCTION 3: Identify unavailable equipment

function identifyUnavailable(records) {
    const unavailable = [];

    for (const equipment of records) {
        if (equipment.quantityAvailable === 0) {
            unavailable.push(equipment);
        }
    }

    return unavailable;
}

// FUNCTION 4: Search equipment by ID

function findEquipmentById(records, equipmentId) {
    for (const equipment of records) {
        if (equipment.id === equipmentId) {
            return equipment;
        }
    }

    return null;
}

// FUNCTION 5: Filter equipment by category

function filterByCategory(records, selectedCategory) {
    const filteredEquipment = [];

    for (const equipment of records) {
        if (
            equipment.category.toLowerCase() ===
            selectedCategory.toLowerCase()
        ) {
            filteredEquipment.push(equipment);
        }
    }

    return filteredEquipment;
}

// FUNCTION 6: Generate inventory summary

function generateInventorySummary(records) {
    let totalUnitsOwned = 0;
    let totalUnitsAvailable = 0;
    let totalUnitsBorrowed = 0;
    let equipmentTypesRequiringAttention = 0;

    for (const equipment of records) {
        // Owned units = available + borrowed.
        const unitsOwned =
            equipment.quantityAvailable + equipment.quantityBorrowed;

        totalUnitsOwned += unitsOwned;
        totalUnitsAvailable += equipment.quantityAvailable;
        totalUnitsBorrowed += equipment.quantityBorrowed;

        // Equipment requires attention if it is low-stock,
        // unavailable, or not in Good condition.
        if (
            equipment.quantityAvailable <= equipment.minimumAvailable ||
            equipment.quantityAvailable === 0 ||
            equipment.condition !== "Good"
        ) {
            equipmentTypesRequiringAttention++;
        }
    }

    return {
        numberOfEquipmentTypes: records.length,
        totalUnitsOwned: totalUnitsOwned,
        totalUnitsAvailable: totalUnitsAvailable,
        totalUnitsBorrowed: totalUnitsBorrowed,
        equipmentTypesRequiringAttention:
            equipmentTypesRequiringAttention
    };
}

// EXTENSION A: BORROW EQUIPMENT

function borrowEquipment(records, equipmentId, quantity) {
    const equipment = findEquipmentById(records, equipmentId);

    if (equipment === null) {
        return `Borrow failed: Equipment ID ${equipmentId} was not found.`;
    }

    if (quantity <= 0) {
        return "Borrow failed: Quantity must be greater than zero.";
    }

    if (quantity > equipment.quantityAvailable) {
        return (
            `Borrow failed: Only ${equipment.quantityAvailable} ` +
            `unit(s) of ${equipment.name} are available.`
        );
    }

    equipment.quantityAvailable -= quantity;
    equipment.quantityBorrowed += quantity;

    return (
        `Borrow successful: ${quantity} unit(s) of ` +
        `${equipment.name} borrowed. ` +
        `${equipment.quantityAvailable} unit(s) remain available.`
    );
}


// EXTENSION C: EQUIPMENT CONDITION


function countEquipmentConditions(records) {
    const conditionCounts = {
        Good: 0,
        "For Repair": 0,
        Damaged: 0
    };

    for (const equipment of records) {
        if (equipment.condition === "Good") {
            conditionCounts.Good++;
        } else if (equipment.condition === "For Repair") {
            conditionCounts["For Repair"]++;
        } else if (equipment.condition === "Damaged") {
            conditionCounts.Damaged++;
        }
    }

    return conditionCounts;
}


// FUNCTION 7: Display low-stock equipment

function displayLowStock(records) {
    const lowStock = identifyLowStock(records);

    console.log(`\n${LOW_STOCK_MESSAGE} EQUIPMENT`);

    if (lowStock.length === 0) {
        console.log("No equipment is currently low in stock.");
        return;
    }

    for (const equipment of lowStock) {
        console.log(
            `${equipment.id} - ${equipment.name}: ` +
            `${equipment.quantityAvailable} available ` +
            `(minimum: ${equipment.minimumAvailable})`
        );
    }
}


// FUNCTION 8: Display unavailable equipment

function displayUnavailable(records) {
    const unavailable = identifyUnavailable(records);

    console.log(`\n${UNAVAILABLE_MESSAGE} EQUIPMENT`);

    if (unavailable.length === 0) {
        console.log("All equipment has at least one unit available.");
        return;
    }

    for (const equipment of unavailable) {
        console.log(
            `${equipment.id} - ${equipment.name}: ` +
            "No units currently available."
        );
    }
}


// FUNCTION 9: Display inventory summary

function displayInventorySummary(records) {
    const summary = generateInventorySummary(records);

    console.log("\nINVENTORY SUMMARY");
    console.log(`Number of equipment types: ${summary.numberOfEquipmentTypes}`);
    console.log(`Total units owned: ${summary.totalUnitsOwned}`);
    console.log(`Total units currently available: ${summary.totalUnitsAvailable}`);
    console.log(`Total units currently borrowed: ${summary.totalUnitsBorrowed}`);
    console.log(
        `Equipment types requiring attention: ` +
        `${summary.equipmentTypesRequiringAttention}`
    );
}


// FUNCTION 10: Display equipment conditions

function displayConditionSummary(records) {
    const conditions = countEquipmentConditions(records);

    console.log("\nEQUIPMENT CONDITION SUMMARY");
    console.log(`Good: ${conditions.Good}`);
    console.log(`For Repair: ${conditions["For Repair"]}`);
    console.log(`Damaged: ${conditions.Damaged}`);
}


// PROGRAM DEMONSTRATION

displayAllEquipment(equipmentRecords);

displayLowStock(equipmentRecords);

displayUnavailable(equipmentRecords);


// Search by Equipment ID
console.log("\nSEARCH BY EQUIPMENT ID");

const searchedEquipment = findEquipmentById(equipmentRecords, "EQ006");

if (searchedEquipment !== null) {
    console.log(
        `Equipment found: ${searchedEquipment.name} ` +
        `(${searchedEquipment.category})`
    );
} else {
    console.log("Equipment not found.");
}


// Filter by category
console.log("\nFILTER BY CATEGORY: MEASURING");

const measuringEquipment = filterByCategory(
    equipmentRecords,
    "Measuring"
);

for (const equipment of measuringEquipment) {
    console.log(
        `${equipment.id} - ${equipment.name} - ` +
        `${equipment.quantityAvailable} available`
    );
}


// Inventory summary
displayInventorySummary(equipmentRecords);


// Extension A: Borrow equipment
console.log("\nBORROW EQUIPMENT");

console.log(
    borrowEquipment(equipmentRecords, "EQ001", 2)
);

console.log(
    borrowEquipment(equipmentRecords, "EQ003", 1)
);

console.log(
    borrowEquipment(equipmentRecords, "EQ004", 100)
);


// Extension C: Equipment condition
displayConditionSummary(equipmentRecords);


// Display updated records after borrowing
console.log("\nUPDATED EQUIPMENT RECORDS");

const updatedMicroscope = findEquipmentById(
    equipmentRecords,
    "EQ001"
);

console.log(
    `${updatedMicroscope.name}: ` +
    `${updatedMicroscope.quantityAvailable} available, ` +
    `${updatedMicroscope.quantityBorrowed} borrowed`
);
