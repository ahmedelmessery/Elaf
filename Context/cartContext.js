import axios from 'axios'
import React, { createContext, useState } from 'react'
import { useUserContext } from './userContext'
import toast from 'react-hot-toast'

export let cartContext = createContext()



export default function CartContextProvider(props) {
  let [cartId , setCartId] = useState(null)
  let [cartOwner , setcartOwner] = useState(null)
  const [cart , setCart] = useState([])
  let {userId} = useUserContext()
  let [numOFItems , setnumOFItems] = useState(0)
  const [isLoading , setIsLoading] = useState(false)




  
  const [totalPrice, setTotalPrice] = useState(0);
  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach(product => {
      total += parseInt(product.product.price * product?.productCount);
    });
    setTotalPrice(total);
  };



  
  const [discountPrice, setDiscountPrice] = useState(0);
  const calculateDiscountPrice = () => {
    let total = 0;
    cart.forEach(product => {
      if (product.product.discountPrice !== null && !isNaN(product.product.discountPrice)) {
        total += parseInt(product.product.discountPrice);
      }
    });
    setDiscountPrice(total);
  };
  




    let headers = {
        token : localStorage.getItem('userToken')
    } 

    function AddToCart(productId,productCount)
    {
      return  axios.post('api/v1/basket',
      {
        productId:productId,
        productCount: productCount
      },
      ).then((res)=>res)
      .catch((err)=>err)
    }


    function AddToWishlist (productId)
    {
      return axios.post('api/v1/user/favorite',
      {
        productId: productId
      }
      )
      .then((res)=>res)
      .catch((err)=>err)
    }

    
    const [wishlist , setWishlist] = useState([])

    function GetWishlist()
    {
      return  axios.get('api/v1/user/favorite')
      .then((res)=>{
        setWishlist(res.data.result)
      })
      .catch((err)=>err)
    }




    function RemoveFromWishlist(productId)
    {
      return   axios.put(`api/v1/user/favorite/${productId}`)
      .then((res)=>{
        GetWishlist()
      })
      .catch((err)=>err)
    }




    function getQuantity()
    {
      return  axios.get('products/count')
      .then((res)=>res)
      .catch((err)=>err)
    }



    function GetCart() {
      setIsLoading(true);
      return axios
        .get('api/v1/basket')
        .then((res) => {
          setIsLoading(false);
          const basketProducts = res.data.result[0].basketProducts;
          const sortedBasketProducts = basketProducts.sort((a, b) => a.productId.localeCompare(b.productId));
          setCart(sortedBasketProducts);
          setnumOFItems(sortedBasketProducts.length);
        })
        .catch((err) => err);
    }
    

    async function getLoggedCart()
    {
      let response = await GetCart();
      if(response?.data?.result)
      {
        setnumOFItems(res.data.result[0].basketProducts.length)
      }
       else
       {
        return null;
       }
    }
  





    function RemoveItem(productId)
    {
      return   axios.delete(`api/v1/basket/${productId}`)
      .then((res)=>{
        GetCart()
      })
      .catch((err)=>err)
    }







    function UpdateQuantity(productId,count)
    {
      return  axios.put('api/v1/basket',
      {
        productId: productId,
        productCount: count
      }).then((res)=>{
        GetCart()
      })
      .catch((err)=>err)
    }





    // function Clear()
    // {
    //   return  axios.delete(`cart`,
    //   {
    //     headers:headers
    //   }).then((res)=>res)
    //   .catch((err)=>err)
    // }


    function GetOrders(cartOwner)
    {
      return axios.get(`orders/user/${cartOwner}`,
      {
        headers:headers
      }
      )
    }


    const PostOrder = () => {
      if (orderCode.length < 1 && orderAddress.length < 1) {
        toast.error('من فضلك قم بإدخال اسم المستلم والعنوان بشكل صحيح' , {style:{color:'white' , textAlign:'center'}});
      } else if (orderCode.length > 1 && orderAddress.length > 1) {
        axios.post('/api/v1/order', {
          orderCode: orderCode,
          orderAddress: orderAddress
        })
        .then(res => {
          toast.success('تم تأكيد الطلب بنجاح' , {style:{textAlign:'center'}});
          router.push('/')
        })
        .catch(err => {
          console.error(err);
          toast.error('حدث خطأ أثناء إرسال الطلب' , {style:{color:'white' , textAlign:'center'}});
        });
      }
    };
  


      //OrderParameters
      const [orderCode , setOrderCode] = useState('')
      const [orderAddress , setOrderAddress] = useState('')

      const handleOrderCodeChange = (e) => {
        setOrderCode(e.target.value);
      };
    
      const handleOrderAddressChange = (e) => {
        setOrderAddress(e.target.value);
      };

  return <cartContext.Provider value={{ isLoading , UpdateQuantity,getLoggedCart , setIsLoading , PostOrder , orderCode , setOrderCode, handleOrderCodeChange, handleOrderAddressChange ,  orderAddress , setOrderAddress , AddToCart  ,AddToWishlist , wishlist , GetWishlist,calculateTotalPrice ,calculateDiscountPrice ,discountPrice ,totalPrice , getQuantity, GetCart ,RemoveItem , RemoveFromWishlist , GetOrders , numOFItems ,setnumOFItems  , cart }}>
    {props.children}
  </cartContext.Provider>
}
