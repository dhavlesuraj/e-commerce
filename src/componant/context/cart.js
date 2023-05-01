import { createContext,useState, useContext} from "react";


const initialState={
    cart:[],
    cartItemCount:()=>0,
    addTocart:()=>null,
    removeToCart:()=>null,
    increaseQuntity:()=>null,
    decreseQuntity:()=>null
}

const CartContext=createContext(initialState);

const useCart=()=>useContext(CartContext);

const CartProvider=({children})=>{
    const[cart, setCart]=useState(initialState.cart);

    const cartItemCount=()=>{
        return cart.reduce((acc,item)=>acc+item.quantity,0);
    }

    const addToCart=(product)=>{
      //console.log(product);
        const productIdx=cart.findIndex((item)=>item.product.id===product.id)
        if(productIdx !==-1){
            increaseQuntity(product.id);
        }
        else{
            setCart([...cart,{product,quantity:1}])
        }
    }

    const removeToCart=(productId)=>{
      setCart(cart.filter((item)=>item.product.id!==productId))
    }

    const increaseQuntity=(productId)=>{
        const copy=cart.slice()
        const productIdx=copy.findIndex((item)=>
            item.product.id===productId)
         if(productIdx!== -1)
         {
            copy[productIdx].quantity +=1;
            setCart(copy);
            //console.log(copy);
         }   
    }

    const decreseQuntity=(productId)=>{
        const copy=cart.slice()
        const productIdx=copy.findIndex((item)=>item.product.id===productId)
        if(productIdx!== -1 && copy[productIdx].quantity>1)
        {
            copy[productIdx].quantity -=1;
            setCart(copy); 
        }
    }

    return (
      <CartContext.Provider
        value={{
          cart,
          cartItemCount,
          increaseQuntity,
          decreseQuntity,
          addToCart,
          removeToCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );
}
export {useCart,CartProvider}