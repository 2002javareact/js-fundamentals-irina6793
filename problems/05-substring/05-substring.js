/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if(startIndex > someStr && endIndex < someStr) {
        return "incorrect input"
    }
    const sString = ""
    for (let i=startIndex; i<endIndex; i++) {
        sString += someStr[i]
    }
    return sString
}

console.log(substring('world', 0, 3))