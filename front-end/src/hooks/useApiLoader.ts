import { useEffect, useState } from "react";
import { IApiResponse } from "../api/ApiClient";
import { Global } from "../global";
import { LoadStatus } from "../Components/loaders/ApiLoader";

export interface IApiLoader<t> {
    data: t;
    status: LoadStatus;
    errorMessage: string | null;
}

export const useApiLoader = <t>(endpoint: string): IApiLoader<t> => {
    const [data, setData] = useState<t>([] as t);
    const [status, setStatus] = useState<LoadStatus>(LoadStatus.Idle);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    
    const fetchData = async () => {
        await Global.apiClient.get<IApiResponse<t>>(endpoint).then(response => {
            if (response.data) setData(JSON.parse(response.data.toString()) as t);
            if (response.errorMessage) setErrorMessage(response.errorMessage);
            setStatus(response.status);
        })
        .catch(error => {
            setErrorMessage(error as string | null);
            setStatus(LoadStatus.Error);
        });
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    },[]);

    return { data, status, errorMessage };
}
