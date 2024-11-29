import { LoadStatus } from "../Components/loaders/ApiLoader";

export interface IApiResponse<t> {
    status: LoadStatus;
    data?: t;
    errorMessage? : string;
}

export class ApiClient {
    private urlPath: string;

    constructor(urlPath: string) {
        this.urlPath = urlPath;
    }

    public async get<t>(endpoint: string): Promise<IApiResponse<t>> {
        try {
            const response = await fetch(`${this.urlPath}${endpoint}`);
            switch (response.status) {
                case 200:
                    return { status: LoadStatus.Ready, data: await response.text() as t };
                case 404:
                    return { status: LoadStatus.NotFound, errorMessage: await response.text() };
                default:
                    return { status: LoadStatus.Error,  errorMessage: await response.text() };
            }
        }
        catch (error) {
            console.error(error);
            return { status: LoadStatus.Error, errorMessage: error as string };
        }
    }

    public async post() {
        try {
            const response = await fetch(this.urlPath);
            const status = await response.status;
            return status;
        }
        catch (error) {
            throw new Error();
        }
    }
}
