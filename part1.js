// Part 1 — Order Processing System

function processOrder(order) {
    // Calculate subtotal
    const subtotal = order.unitPrice * order.quantity;

    // Check if there is enough stock
    const canProcess = order.quantity <= order.availableStock;

    let discountRate = 0;
    let discountAmount = 0;
    let finalAmount = subtotal;

    if (canProcess) {
        // Members get 10% off when subtotal is at least ₱2,000
        if (order.isMember && subtotal >= 2000) {
            discountRate = 0.10;
        }
        // Non-members get 5% off when subtotal is at least ₱5,000
        else if (!order.isMember && subtotal >= 5000) {
            discountRate = 0.05;
        }

        // Calculate discount and final amount
        discountAmount = subtotal * discountRate;
        finalAmount = subtotal - discountAmount;
    }

    // Display order information
    console.log(`Product: ${order.productName}`);
    console.log(`Unit Price: ₱${order.unitPrice.toFixed(2)}`);
    console.log(`Quantity: ${order.quantity}`);
    console.log(`Member: ${order.isMember}`);
    console.log(`Available Stock: ${order.availableStock}`);
    console.log(`Subtotal: ₱${subtotal.toFixed(2)}`);

    if (!canProcess) {
        console.log("Status: Order cannot be processed due to insufficient stock.");
    } else {
        console.log(`Discount: ${(discountRate * 100).toFixed(0)}%`);
        console.log(`Discount Amount: ₱${discountAmount.toFixed(2)}`);
        console.log(`Final Amount: ₱${finalAmount.toFixed(2)}`);
        console.log("Status: Order processed successfully.");
    }

    console.log("-----------------------------------");
}


// TEST SCENARIO 1: No discount
const order1 = {
    productName: "Notebook",
    unitPrice: 150,
    quantity: 5,
    isMember: false,
    availableStock: 20
};

processOrder(order1);


// TEST SCENARIO 2: Member qualifies for 10% discount
const order2 = {
    productName: "Headphones",
    unitPrice: 800,
    quantity: 3,
    isMember: true,
    availableStock: 10
};

processOrder(order2);


// TEST SCENARIO 3: Non-member qualifies for 5% discount
const order3 = {
    productName: "Office Chair",
    unitPrice: 1500,
    quantity: 4,
    isMember: false,
    availableStock: 10
};

processOrder(order3);


// TEST SCENARIO 4: Insufficient stock
const order4 = {
    productName: "Wireless Mouse",
    unitPrice: 750,
    quantity: 8,
    isMember: true,
    availableStock: 5
};

processOrder(order4);
