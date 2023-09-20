
export const filterItemsByCategory = (state) => (cat, sub, subsub) => {
    return state.items[cat][sub][subsub];
}

function flattenItems(data) {

    const result = [];
    if (Array.isArray(data)){
      result.push(...data);
    }
  
    else{
      for (const key in data) {
        if (Array.isArray(data[key])) {
          result.push(...data[key]);
        } 
        else if (typeof data[key] === 'object') {
          const nestedItems = flattenItems(data[key]);
          result.push(...nestedItems);
        }
      }
    }
  
    return result;
  }

// const { cat, sub, subsub } = req.query;
  
//   let result;

//   if(cat && !sub && !subsub){
//     result = flattenItems(items[cat]);
//   }

//   else if(cat && sub && !subsub){
//     result = flattenItems(items[cat][sub]);
//   }

//   else if(cat && sub && subsub){
//     result = items[cat][sub][subsub];
//   }

//   else if(!cat && !sub && !subsub){
//     result = flattenItems(items);
//   }