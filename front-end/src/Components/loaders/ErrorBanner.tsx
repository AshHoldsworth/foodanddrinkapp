import "../../css/errorBanner.css"

interface IErrorBanner {
    label? : string | null
    errorMessage: string
}

export const ErrorBanner: React.FC<IErrorBanner> = ({ label, errorMessage }) => {
    return (
        <div className="error-banner">
            <h1>Oh no! Something went wrong{label ? ` loading ${label}` : null}!</h1>
            <p>{errorMessage}</p>
        </div>
    )
}
