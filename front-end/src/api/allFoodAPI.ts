export const fetchFoodList = async () => {
    const backendUrl = 'localhost:5000/collection/allFood';
    const results = await fetch(backendUrl);
    return await results.json();
}
