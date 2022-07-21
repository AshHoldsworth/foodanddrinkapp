import { useEffect } from 'react'
import { fetchFoodList } from '../api/fetchFoodListAPI'

export const useFoodList = ({setFoodList}) => {
    useEffect(() => {
        fetchFoodList().then(meal => setFoodList(meal))
    }, [])

    return
}
