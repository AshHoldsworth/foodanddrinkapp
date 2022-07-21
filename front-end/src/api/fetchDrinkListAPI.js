export const fetchDrinkList = async () => {
    const results = await fetch ("http://localhost:8080/collection/drink")
    const resultsJSON = await results.json()
    return resultsJSON
}
