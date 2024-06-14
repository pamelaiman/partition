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