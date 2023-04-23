export class ApiClient {

    private urlPath: string;
    constructor(urlPath: string) {
        this.urlPath = urlPath;
    }

    public async get<t>(endpoint: string): Promise<t> {

        try {
            const response = await fetch(`${this.urlPath}${endpoint}`);
            const data = await response.text() as t;
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
