import { getItemsFromSheet } from "../../../utils/getItems";

export default async function TestSheetPage({

}){

    const items = await getItemsFromSheet();
    console.log(items);

    return(
        <div>
            <h2>the items from sheets are:</h2>
            <div>{JSON.stringify(items)}</div>
        </div>
    )
}