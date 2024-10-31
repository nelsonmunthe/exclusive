import { useDispatch } from "react-redux"
import { AddWishList, removeWishList,  } from "../../store/wishListReducer";
import { Product, ProductDetail } from "../../interfaces/product";

const useWisthList = () => {
    const dispatch = useDispatch();

    const onHandleWishList = (product : ProductDetail) => {
        if(product.wishList) {
            dispatch(removeWishList(product))
        } else {
            dispatch(AddWishList(product))
        }
    }


    return{
        onHandleWishList
    }
}

export default useWisthList