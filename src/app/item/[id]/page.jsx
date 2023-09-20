'use client'

import { useGetOneItemQuery } from "@/store/services/oneItemApi";

export default function ItemPage({params}){

    const itemId = params.id;
    const {data: item, isLoading, error} = useGetOneItemQuery(itemId);

    if(isLoading){
        return(
            <h1>
                LOADING...
            </h1>
        )
    }

    else if(error){
        return(
            <h3>
                {error.message}
            </h3>
        )
    }

    else{
        return(
            <h2>
                {JSON.stringify(item)}
            </h2>
        )
    }

}