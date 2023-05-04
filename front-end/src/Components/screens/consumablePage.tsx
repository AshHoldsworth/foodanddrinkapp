import { useParams } from "react-router-dom"
import { IConsumable } from "../../@Types/IConsumables";
import { useState } from "react";
import { ApiClient } from "../../api/ApiClient";
import { Global } from "../../global";

export const ConsumablePage = () => {
    const {consumableId} = useParams();
    const [consumable, setConsumable] = useState<IConsumable>();
    
    const apiClient = new ApiClient(Global.context.urlPath);
    apiClient.get(`consumable/food/item/${consumableId}`).then((response: any) => {
        setConsumable(response);
      });
    
    return <>
    {consumable}
    </>
}
