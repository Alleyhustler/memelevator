// Number of floors
const totalFloors = 4;
let currentFloor = totalFloors - 1; // Start on the last floor (Floor 4)

// Function to move the elevator
function moveToFloor(floor) {
    if (floor < 0 || floor >= totalFloors) return; // Out of bounds
    currentFloor = floor;
    const elevator = document.getElementById('elevator');
    elevator.style.transform = `translateY(-${floor * 100}vh)`;
}

// Initialize elevator position on page load
window.addEventListener('load', () => {
    moveToFloor(currentFloor);
});

// Event listeners for control buttons
document.getElementById('up').addEventListener('click', () => {
    if (currentFloor > 0) {
        moveToFloor(currentFloor - 1); // Move up
    }
});

document.getElementById('down').addEventListener('click', () => {
    if (currentFloor < totalFloors - 1) {
        moveToFloor(currentFloor + 1); // Move down
    }
});

