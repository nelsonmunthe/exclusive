import { useNavigate, useParams } from "react-router-dom"
import { productDetail } from "../../apiCall/product"
import { useEffect, useState } from "react"
import { ProductWishList } from "../../interfaces/product";
import { useTypedSelector } from "../../store/store";
import { useDispatch } from "react-redux";
import { onChangeProductQuantity } from "../../store/wishListReducer";
import { ChangeWishListProps } from "../../interfaces/common";


const useProductDetail = () => {
    const { productId } = useParams();
    const [isWisthList, setIsWishList] = useState<boolean>(false)
    const [currentImage, setCurrentImage] = useState<string | null>(null)
    const wishList = useTypedSelector(state => state.wishList.products);
    const dispath  = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductWishList>({
        id: 0,
        name: '',
        description: '',
        category_id: 0,
        rating: 0,
        price: 0,
        discount: 0,
        total: 0,
        flash_sell: false,
        wishList: false,
        images: [],
        quantity: 1,
        totalPrice: 0,
    })

    const onNavigateToCartPage = () => {
        navigate('/cart')
    }

    const onChangeImage = (index: number) => {
        setCurrentImage(product.images[index])
    }

    useEffect(() => {
        setCurrentImage(product.images[0])
    }, [product])

    const getProductDetail = async () => {
        try {
            const response = await productDetail(Number(productId))
            if(response){
                response.data.data.images= JSON.parse(response.data.data.images)
                const product:ProductWishList = response.data.data;
                product.quantity = 1
                setProduct(product)
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        const productWish = wishList.find((item:ProductWishList) => item.id === Number(productId));
        if(productWish) {
            setProduct(productWish)
            setIsWishList(prev => !prev)
        } else {
            getProductDetail()
        }
        
    }, [productId])

    const onAddProductQuantity = (quantity: number) => {
        if(quantity === product.total) return
       
        const payload: ChangeWishListProps = {
            productId: product.id,
            quantity: quantity + 1
        }
        dispath(onChangeProductQuantity(payload))
        setProduct(prev => {
            return{
                ...prev,
                quantity: quantity + 1
            }
        })
    }

    const onRemoveProductQuantity = (quantity: number) => {
        if(product.quantity === 1) return
        const payload: ChangeWishListProps = {
            productId: product.id,
            quantity: quantity + 1
        }
        dispath(onChangeProductQuantity(payload))
        setProduct(prev => {
            return{
                ...prev,
                quantity: quantity - 1
            }
        })
    }

    return{
        product,
        onChangeImage,
        currentImage,
        onAddProductQuantity,
        onRemoveProductQuantity,
        isWisthList,
        onNavigateToCartPage
    }
}

export default useProductDetail