import { LoadStatus } from "../Components/loaders/ApiLoader";

export interface IApiResponse<t> {
    status: LoadStatus;
    data: t;
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
                    return { status: LoadStatus.NotFound, data: await response.text() as t };
                default:
                    return { status: LoadStatus.Error, data: await response.text() as t };
            }
        }
        catch (error) {
            console.error(error);
            return { status: LoadStatus.Error, data: error as t };
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
