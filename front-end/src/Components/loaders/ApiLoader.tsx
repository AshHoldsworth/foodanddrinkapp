import { ErrorBanner } from "./ErrorBanner"
import { Loading } from "./Loading"

export enum LoadStatus {
    Ready = 'READY',
    Loading = 'LOADING',
    Error = 'ERROR',
    NotFound = 'NOT-FOUND',
    Idle = 'IDLE'
}

interface IApiLoader {
    label : string
	size?: 'sm' | 'md' | 'lg' | 'xl' | undefined
	loadStatus: LoadStatus
	empty?: JSX.Element | null
	errorMessage?: string | null
	fullscreen?: boolean
	children: React.ReactNode
}

export const ApiLoader: React.FC<IApiLoader> = ({ label, size, loadStatus, empty, errorMessage, fullscreen, children }) => {
    switch (loadStatus) {
        case LoadStatus.Ready:
            return <>{children}</>
        case LoadStatus.NotFound:
            return empty ? <>{empty}</> : <p>No {label} to display!</p>
        case LoadStatus.Loading:
            return Loading({})
        case LoadStatus.Error:
        default:
            return ErrorBanner({ label, errorMessage: errorMessage || 'An error occurred' })
    }
}
