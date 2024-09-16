// Add event listeners for real-time input
document.getElementById("attendance").addEventListener("input", calculateAttendance);
document.getElementById("calculationType").addEventListener("change", calculateAttendance);

function calculateAttendance() {
    const totalClasses = 490;
    const completedClasses = 287;
    const classesPerWeek = 29;
    const remainingMidWeeks = 3;

    // Get user inputs
    const userAttendance = parseFloat(document.getElementById("attendance").value);
    const calcType = document.getElementById("calculationType").value;

    // Ensure inputs are valid
    if (!userAttendance || isNaN(userAttendance) || userAttendance < 0 || userAttendance > 100) {
        document.getElementById("result").innerText = ""; // Clear result if invalid
        document.getElementById("expectedOutput").innerText = ""; // Clear additional output
        return;
    }

    if (!calcType) {
        document.getElementById("result").innerText = ""; // Clear result if invalid
        document.getElementById("expectedOutput").innerText = ""; // Clear additional output
        return;
    }

    // Calculate attended classes based on current attendance
    const attendedClasses = Math.ceil((userAttendance / 100) * completedClasses);

    let finalClasses;
    if (calcType === "M") {
        finalClasses = completedClasses + (remainingMidWeeks * classesPerWeek);
    } else if (calcType === "S") {
        finalClasses = totalClasses;
    }

    // Calculate final expected attendance if no classes are missed
    const finalAttendance = ((attendedClasses + (finalClasses - completedClasses)) / finalClasses) * 100;

    // Display the result
    document.getElementById("result").innerText = Your expected final attendance is ${finalAttendance.toFixed(2)}%.;

    // Detailed final output
    document.getElementById("expectedOutput").innerText = Based on the current progress, you can aim for ${finalAttendance.toFixed(2)}% by the end of the ${calcType === 'M' ? 'Midterm' : 'Semester'}.;
}