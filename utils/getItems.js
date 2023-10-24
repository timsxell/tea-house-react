import { google } from "googleapis";


export async function getItemsFromSheet(){

    const auth = await google.auth.getClient({scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']});
    const sheets = google.sheets({version: 'v4', auth});
    const range = `Sheet1!B6:P15`;
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.ALL_INFO_SHEET_ID,
        range,
    });

    const propertyNames = [
        'id', 'nameRu', 'price', 'isUnit', 'isPressed', 'totalWeight',
        'parentCategoryId', 'amountInStock', 'descriptionRu',
        'imgSrc1', 'imgSrc2', 'imgSrc3', 'isFeatured', 'nameSr', 'descriptionSr'
    ]

    let items = response.data.values.map(row => {
        const obj = {};
        propertyNames.forEach((propName, index) => {
          // Handle type conversion for specific properties
          if (propName === 'price') {
            obj[propName] = parseFloat(row[index].replace(',', '.'));
          } 
          else if(row[index] === 'null' || row[index] === ''){
            obj[propName] = null;
          }
          else if(propName === 'totalWeight' || propName === 'amountInStock'){
            obj[propName] = parseInt(row[index]);
          }
          else if (propName === 'isUnit' || propName === 'isPressed' || propName === 'isFeatured') {
            obj[propName] = row[index] === 'TRUE';
          } 
          else {
            obj[propName] = row[index];
          }
        });
        return obj;
    });


    return items;
}