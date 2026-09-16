

function addPaintAndSupplies(totalCost, callback) {
    let cost = prompt("Enter the cost for the paint and supplies:");
    cost = parseFloat(cost);
    let adjustment = 0;
    if (cost > 100)
        adjustment = cost * .10;
    let finalCost = cost + adjustment;
    let paintArea = document.querySelector(".paint");

    paintArea.innerHTML = `The cost of the Paint is $${cost.toFixed(2)} + $${adjustment.toFixed(2)} = $${finalCost.toFixed(2)}`;
    callback(totalCost + finalCost);


    return (totalCost + finalCost);
}

const addFloorCoverings = function(totalCost, callback) {
    let cost = prompt("Enter the cost for the floor coverings:");
    cost = parseFloat(cost);
    let adjustment = 0;
    if (cost < 500)
        adjustment = cost * .15;
    let finalCost = cost - adjustment;
    let floorArea = document.querySelector(".floor");
    floorArea.innerHTML = `The cost for the Floor Coverings is $${cost.toFixed(2)} - $${adjustment.toFixed(2)} which will make the total $${finalCost.toFixed(2)}`;
    callback(totalCost + finalCost);
    return (totalCost + finalCost);
}
const addFurniture = (totalCost, callback) => {
    let cost = prompt("Enter the cost for the furniture:");
    cost = parseFloat(cost);
    let adjustment = 0;
    if (cost < 500)
        adjustment = cost * .10;
    let finalCost = cost - adjustment;
    let furnitureArea = document.querySelector(".furniture");
    furnitureArea.innerHTML = `The cost of the furniture is $${cost.toFixed(2)} - $${adjustment.toFixed(2)} which will make the total $${finalCost.toFixed(2)}`;
    callback(totalCost + finalCost);
    return (totalCost + finalCost);
}


const updateTotals = (cost) => {

    let totalsArea = document.querySelector(".totalCost");

    totalsArea.innerHTML = `This brings your Total to $${cost.toFixed(2)} Cash or Card?`;     }

let totalCost = 0;
totalCost = addPaintAndSupplies(totalCost, updateTotals);



totalCost = addFloorCoverings(totalCost, updateTotals);

totalCost = addFurniture(totalCost, updateTotals);
