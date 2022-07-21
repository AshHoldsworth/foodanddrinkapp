export const fetchFoodList = async () => {
    const results = await fetch ("http://localhost:8080/collection/food")
    const resultsJSON = await results.json()
    return resultsJSON
}
