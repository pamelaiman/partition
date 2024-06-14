/**
 * This function filters an array but returns two array
 * The first array should contain the elements that pass the test represented by the callback function.
 * And the second should contain those that fail that same test.  
 * @param {array} array 
 * @param {function} callbackFn 
 * @returns {array} passedCheck, failedCheck
 */

export default function partition(array, callbackFn) {
    const passedCheck = []
    const failedCheck = []

    for (let element of array) {
        if (callbackFn(element)) {
            passedCheck.push(element)
        } else {
            failedCheck.push(element)
        }
    }
    return [passedCheck, failedCheck]
}