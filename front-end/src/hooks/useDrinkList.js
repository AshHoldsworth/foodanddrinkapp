import { useEffect } from 'react'
import { fetchDrinkList } from '../api/fetchDrinkListAPI'

export const useDrinkist = ({setDrinkList}) => {
    useEffect(() => {
        fetchDrinkList().then(drink => setDrinkList(drink))
    }, [])

    return
}
