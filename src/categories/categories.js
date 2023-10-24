class Categories {

    constructor() {
        this.categories = [

            { name: 'chinese tea', parentId: null, id: '01' },

            { name: 'puerh', parentId: '01', id: '0101' },

            { name: 'black', parentId: '0101', id: '010101' },
            { name: 'green', parentId: '0101', id: '010102' },

            { name: 'oolong', parentId: '01', id: '0102' },

            { name: 'tie guan yin', parentId: '0102', id: '010201' },
            { name: 'da hong pao', parentId: '0102', id: '010202' },


            ///


            { name: 'herbal tea', parentId: null, id: '02' },

            { name: 'chamomile', parentId: '02', id: '0201' },
            { name: 'peppermint', parentId: '02', id: '0202' },
            { name: 'ivanchai', parentId: '02', id: '0203' },


            ///


            { name: 'coffee', parentId: null, id: '03' },

            { name: 'brazil', parentId: '03', id: '0301' },
            { name: 'colombia', parentId: '03', id: '0302' },


            ///


            { name: 'teaware', parentId: null, id: '04' },

            { name: 'teapots', parentId: '04', id: '0401' },

            { name: 'clay', parentId: '0401', id: '040101' },
            { name: 'porcelain', parentId: '0401', id: '040102' },

            { name: 'teacups', parentId: '04', id: '0402' },

        ]
    }

    //чтоб отображать детей если они есть в сайдбаре при развороте категории
    getOldestChildren(categoryId = null) {
        return this.categories.filter((cat) => cat.parentId === categoryId);
    }

    includeChildrenInQuery(categoryId, query = []) {

        let queue = this.categories.filter((cat) => cat.parentId === categoryId);
        if (!queue.length) {
            query.push(categoryId);
        }
        else {
            while (queue.length) {
                let curr = queue.pop();
                this.includeChildrenInQuery(curr.id, query);
            }
        }

        return query.join('-');
    }


    getCategoryId(categoryName, parentCategoryName) {
        let parentCategoryId = parentCategoryName
            ? this.categories.find((cat) => cat.name === parentCategoryName.split('_').join(' ')).id
            : null;
        return this.categories.find((cat) => cat.name === categoryName.split('_').join(' ') && cat.parentId == parentCategoryId).id
    }

    getCategoryName(categoryId){
        return this.categories.find(cat => cat.id === categoryId).name;
    }

    getAncestryPath(categoryId, result = []){
        let current = this.categories.find(cat => cat.id === categoryId);
        result.push(current.name);

        if(!current.parentId) return
        this.getAncestryPath(current.parentId, result);

        return result.slice().reverse();
    }

    //формирует строку с айдишниками всех дочерних категорий
    generateQuery(categoryName, parentCategoryName){
        return categoryName ? this.includeChildrenInQuery(this.getCategoryId(categoryName, parentCategoryName)) : null
    }

}

let CategoriesApi = new Categories();

export default CategoriesApi;

