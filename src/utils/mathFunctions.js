export function add(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0); // Somma 
}

export function subtract(numbers) {
    return numbers.reduce((acc, num) => acc - num); // Sottrae i numeri
}

export function multiply(numbers) {
    return numbers.reduce((acc, num) => acc * num, 1); // Sottrae i numeri
}

export function divide(numbers) {
    return numbers.reduce((acc, num) => acc / num); // Divide i numeri
}