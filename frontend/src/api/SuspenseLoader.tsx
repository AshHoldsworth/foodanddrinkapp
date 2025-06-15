import { FC, ReactNode, Suspense, use } from "react"

interface Props {
    children: React.ReactNode
    promise: Promise<any>
    emptyCheck?: boolean
    empty? : ReactNode
}

export const SuspenseLoader: FC<Props> = async ({
    children,
    promise,
    emptyCheck = false,
    empty = <div className="text-center text-gray-500">No content</div>
}: Props): Promise<ReactNode> => {
    let content: ReactNode
    const response = use(promise)
    switch (response.status) {
        case 200:
            content = !emptyCheck && children;
            break;
        case 204:
            console.warn("204 No Content | Response:", response);
            content = empty
            break;
        case 400:
            console.error("400 Bad Request | Response:", response);
            content = <div className="text-center text-red-500">Bad request</div>;
            break;
        case 401:
            console.error("401 Unauthorized | Response:", response);
            content = <div className="text-center text-red-500">Unauthorized</div>;
            break;
        case 403:
            console.error("403 Forbidden | Response:", response);
            content = <div className="text-center text-red-500">Forbidden</div>;
            break;
        case 404:
            console.error("404 Not Found | Response:", response);
            content = empty
            break;
        case 500:
            console.error("500 Internal Server Error | Response:", response);
            content = <div className="text-center text-red-500">Error</div>;
            break;
        default:
            content = <div className="text-center text-gray-500">Loading...</div>;
    }

    return (
        <Suspense
            fallback={
                <div className="text-center text-gray-500">Loading...</div>
            }>
            {content}
        </Suspense>
    )
}
