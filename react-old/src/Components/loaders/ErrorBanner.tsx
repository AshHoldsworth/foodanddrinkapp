import "../../css/errorBanner.css"

interface IErrorBanner {
    label?: string | null
    errorMessage: string
}

export const ErrorBanner: React.FC<IErrorBanner> = ({
    label,
    errorMessage,
}) => (
    <div>
        <h1>
            Oh no! Something went wrong{label ? ` loading ${label}` : null}!
        </h1>
        <h2>{errorMessage}</h2>
    </div>
)
