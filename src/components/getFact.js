/**
 * Calculates the factorial of a number using recursion.
 * @class Factorial
 * @param {number} number - The number for which to calculate the factorial
 * @example
 * const fact = new Factorial(5);
 * console.log(fact.computeFactorial()); // Output: 120
 */
class Factorial {
    #fact(n) {
        if (n == 0 || n == 1) return 1;

        return n * this.#fact(n - 1)
    }

    constructor(number) {
        this.number = number;
    }

    /**
     * Computes the factorial of the number provided in the constructor.
     * @method computeFactorial
     * @returns {number} The factorial of the number
     */ 
    computeFactorial() {
        return this.#fact(this.number)
    }
}

export default Factorial