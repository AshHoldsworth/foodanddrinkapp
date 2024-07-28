import { useEffect, useState } from "react";
import { IApiResponse } from "../api/ApiClient";
import { Global } from "../global";
import { LoadStatus } from "../Components/loaders/ApiLoader";

export interface IApiLoader<t> {
    data: t | undefined;
    status: LoadStatus;
    error: string | null;
}

export const useApiLoader = <t>(endpoint: string): IApiLoader<t> => {
    const [data, setData] = useState<t>();
    const [status, setStatus] = useState<LoadStatus>(LoadStatus.Idle);
    const [error, setError] = useState<string | null>(null);
    
    const fetchData = async () => {
        await Global.apiClient.get<IApiResponse<t>>(endpoint).then(response => {
            setData(JSON.parse(response.data.toString()) as t);
            setStatus(response.status);
        })
        .catch(error => {
            setError(error as string | null);
            setStatus(LoadStatus.Error);
        });
    };

    useEffect(() => {
        fetchData();
    },[]);

    return { data, status, error };
}
