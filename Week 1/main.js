var cases = [10, 25, 50, 65, 100, 30, 15];
var sum = 0;
var i = 0;

function calculateAverage() {
    if (cases.length > 0) {
        for (i = 0; i < cases.length; i++) {
            sum += cases[i];
        }
        document.write("The existing numbers are: " + cases + "<br>" + "The sum is: " + sum + "<br>" + "The average case is: " + sum / cases.length);
    } else
        document.write("Empty Array");
}