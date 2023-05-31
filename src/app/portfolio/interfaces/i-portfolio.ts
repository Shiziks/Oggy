export interface IPortfolio {
        id: number;
        imgtitle: string;
        imgalt: string;
        imgurl: string;
        slider: boolean;
        group: [
            {
                groupid: number;
                groupname: string;
                groupdesc: string;
            }
        ],
        category:[
            {
            categoryid: number;
            categoryname: string;
            categorydesc: string;
            subcategory:[
                {
                    subcategoryid: number;
                    subcategorytitle: string;
                    subcategorydesc: string;
                }
            ]
            }
        ]
    
}
