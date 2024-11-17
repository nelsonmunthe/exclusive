import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store/store";
import { onChangeProductQuantity } from "../../store/wishListReducer"
import { ChangeWishListProps } from "../../interfaces/common";
import { createPurchase } from "../../apiCall/purchase";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack'
import { purchase } from "../../interfaces/Purchase";
import { ProductWishList } from "../../interfaces/product";


const useCart = () => {
    const dispath = useDispatch()
    const  { products, total_price} =  useTypedSelector(state => state.wishList)
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()
  
    const onChangeNumberProduct = (productId: number, event: React.ChangeEvent<HTMLInputElement>) : void => {
        const payload:ChangeWishListProps = {
            productId: productId,
            quantity: Number(event.target.value)
        }
        dispath(onChangeProductQuantity(payload))
    }

    const createPurchaseItem = (
        product_id : number,
        discount: number,
        quantity: number,
        total_price: number,
        shipping: number,
    ) : purchase => {
        return {
            product_id,
            discount,
            quantity,
            total_price,
            shipping,
        }
    }

    const onSubmitPurcahse = async (event: React.FormEvent<HTMLFormElement>) => {

        try {
            event.preventDefault();
            const accessToken = localStorage.getItem('accessToken');
            if(!accessToken) {
                navigate('/login');
                enqueueSnackbar("You are not login yet", {variant: "error"})
                return
            }

            const purchaseOrder : purchase[] = products.map((item: ProductWishList) => {
                return createPurchaseItem(item.id, item.discount, item.quantity, item.totalPrice, 0)
            })
          
            const response =  await createPurchase(purchaseOrder, total_price);
            console.log(response)
        } catch (error) {
            
        }

    }
    
    return {
        products,
        total_price,
        onChangeNumberProduct,
        onSubmitPurcahse
    }
}

export default useCart;