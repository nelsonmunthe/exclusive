import { useState } from "react"
import {Pagination} from "../interfaces/common"

const usePagination = () => {
    const [paginate, setPaginate] = useState<Pagination>({page: 1, perPage: 8, total: 0})
    let isFirstPage:boolean = true;
    let isLastPage:boolean = false;

    isFirstPage = paginate.page === 1 ? true : false;
    isLastPage = paginate.page * paginate.perPage <= paginate.total ? false : true

    const onHandlePrevPage = () => {
        if(isFirstPage) return
        setPaginate(prev => {
            return{
                ...prev,
                page : prev.page - 1
            }
        })
    }

    const onHandleNextPage = () => {
        if(isLastPage) return
        setPaginate(prev => {
            return{
                ...prev,
                page : prev.page + 1
            }
        })
    }
 
    return{
        paginate,
        isFirstPage,
        isLastPage,
        setPaginate,
        onHandlePrevPage,
        onHandleNextPage,
    }
}

export default usePagination