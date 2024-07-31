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
	errorMessage?: string | null
	fullscreen?: boolean
    emptyCheck: any
    empty?: JSX.Element
	children: React.ReactNode
}

export const ApiLoader: React.FC<IApiLoader> = ({ label, size, loadStatus, errorMessage, fullscreen, emptyCheck, empty, children }) => {

    const isEmpty: boolean = emptyCheck.length === 0 || emptyCheck === null || emptyCheck === undefined

    switch (loadStatus) {
        case LoadStatus.Ready:
            return isEmpty ? (empty ?? <ErrorBanner label={label} errorMessage={errorMessage ?? 'An error occurred'} />)  : <>{children}</> //TODO: implement Empty component
        case LoadStatus.NotFound:
            return empty ?? <p>No {label} to display!</p>
        case LoadStatus.Loading:
        case LoadStatus.Idle:
            return <Loading />
        case LoadStatus.Error:
        default:
            return <ErrorBanner label={label} errorMessage={errorMessage ?? 'An error occurred'} />
    }
}
