/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if(startIndex > someStr.length && endIndex < someStr.length) {
        return "incorrect input"
    }
    const sString = ""
    for (let i=startIndex.length; i<endIndex.length; i++) {
        sString += someStr[i]
    }
    return sString
}