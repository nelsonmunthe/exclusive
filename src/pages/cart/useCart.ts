import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store/store";
import { onChangeProductQuantity } from "../../store/wishListReducer"
import { ChangeWishListProps } from "../../interfaces/common";
import { createPurchase } from "../../apiCall/purchase";


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

    const onSubmitPurcahse = async (event: React.FormEvent<HTMLFormElement>) => {

        try {
            event.preventDefault();
            const response =  await createPurchase(products, totalPrice);
            console.log(response)
        } catch (error) {
            
        }

    }
    
    return {
        products,
        totalPrice,
        onChangeNumberProduct,
        onSubmitPurcahse
    }
}

export default useCart;