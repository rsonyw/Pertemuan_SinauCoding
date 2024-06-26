var totalBus = 10;
var totalActive = 6;
var initVal = 1;

for (initVal; initVal <= totalBus; initVal++) {
    if (initVal <= totalActive) {
        console.log("Bus Transjakarta " + initVal + " beroperasi dengan baik.");
    } else if (initVal == 8) {
        console.log("Bus Transjakarta " + initVal + " sedang lembur.");
    } else {
        console.log("Bus Transjakarta " + initVal + " sedang tidak beroperasi.");
    }
}
