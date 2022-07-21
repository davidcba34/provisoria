import React,{useEffect, useState} from "react";
import ItemDetail from './ItemDetail'
import velas from './Data/data'


const ItemDetailContainer = ({greetings}) =>{
    
    
    
    const [producto, setProducto] = useState ({})
    
    const getProducto = () =>{
      return new Promise ((resolve, reject) =>{
        setTimeout(() => {
          resolve(velas)
          
        }, 2000);
      }
      )
    
    }
    useEffect(()=> {
      getProducto()
      .then(res =>setProducto(res[0]))
      .catch(err =>console.log(err))
    },[] )
    
    console.log('productoDetail',producto)
    return (
        <div className="ItemDetailContainer">
            <button onClick={fetch}>ver productos</button>
            <ItemDetail  producto={producto}/>
        </div>
      
    )



}
export default ItemDetailContainer;