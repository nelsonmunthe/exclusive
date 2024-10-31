import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store/store";
import { onChangeProductQuantity } from "../../store/wishListReducer"
import { ChangeWishListProps } from "../../interfaces/common";
const useCart = () => {
    const dispath = useDispatch()
    const  { products, totalPrice} =  useTypedSelector(state => state.wishList)
  
    const onChangeNumberProduct = (productId: number, event: React.ChangeEvent<HTMLInputElement>) : void => {
        const payload:ChangeWishListProps = {
            productId: productId,
            quantity: Number(event.target.value)
        }
        dispath(onChangeProductQuantity(payload))
    }
    
    return {
        products,
        totalPrice,
        onChangeNumberProduct
    }
}

export default useCart;