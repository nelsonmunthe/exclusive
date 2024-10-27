import { useTypedSelector } from "../../store/store";

const useCart = () => {
    const wishList =  useTypedSelector(state => state.wishList.Products)

    return {
        wishList
    }
}

export default useCart;