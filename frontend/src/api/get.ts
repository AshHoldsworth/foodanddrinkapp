import { config } from "@/config"

export const get = async <T>(endpoint: string): Promise<T> => {
    const response = await fetch(config.baseUrl + endpoint)

    if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`)
        return Promise.reject()
    }

    const result = await response.json()

    if (
        result == null ||
        result.length == 0
    ) {
        console.warn("No data found in response", result)
        return Promise.reject()
    }

    return result as Promise<T>
}
