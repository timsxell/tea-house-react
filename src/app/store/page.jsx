import ItemsContainer from "../components/ItemsContainer/ItemsContainer";
import { getItemsFromSheet } from "../../../utils/getItems";

export default async function StorePage({

}){

    let items = await getItemsFromSheet();

    return(
        <main style={{display: 'flex', gap: '3rem'}}>
            <ItemsContainer items={items}/>
        </main>
    )


}