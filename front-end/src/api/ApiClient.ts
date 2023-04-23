export class ApiClient {

    private urlPath: string;
    constructor(urlPath: string) {
        this.urlPath = urlPath;
    }

    public async get<T>(endpoint: string): Promise<T> {

        try {
            const response = await fetch(`${this.urlPath}${endpoint}`);
            const data = await response.text() as T;
            return data;
        }
        catch (error) {
            throw new Error();
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
