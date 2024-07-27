import { ErrorBanner } from "./ErrorBanner"
import { Loading } from "./Loading"

export enum LoadStatus {
    Ready = 'READY',
    Loading = 'LOADING',
    Error = 'ERROR',
    NotFound = 'NOT-FOUND'
}

interface IApiLoader {
    label? : string | null
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
            empty && <>{empty}</>
			return <>{empty}</>
        case LoadStatus.Error:
            return ErrorBanner({ label, errorMessage: errorMessage || 'An error occurred' })
        case LoadStatus.Loading:
            return Loading({})
    }
}
