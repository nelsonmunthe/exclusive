import { useState } from "react"
import {Pagination} from "../interfaces/common"

const usePagination = () => {
    const [paginate, setPaginate] = useState<Pagination>({page: 1, perPage: 8, total: 0})
    let isFirstPage:boolean = true;
    let isLastPage:boolean = false;

    isFirstPage = paginate.page === 1 ? true : false;
    isLastPage = paginate.page * paginate.perPage <= paginate.total ? false : true

    return{
        paginate,
        isFirstPage,
        isLastPage,
        setPaginate
    }
}

export default usePagination