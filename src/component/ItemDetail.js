
// import './ItemDetail';
import { useContext, useState } from 'react';
// import {CartContext} from "./CartContext";
 import {Link} from "react-router-dom";
// import { useContext } from 'react';

function ItemDetail(props){
    const{nombre,stock,id,description,precio,img}=props.producto
    // const{addToCart} =useContext(CartContext)
    
    const [purchaseCompleted, setPurchaseCompleted]= useState(false);

    const onAdd = (count) =>{
        setPurchaseCompleted(true)
        // addToCart(props.producto,count)
    }
    return (
        <div className='detail-container'>
            <div className='grid-container'>
                <div className='image-container'>
                    {" "}
                    <img src={img}/>{" "}
                </div>
                <div className='data-container'>
                    <h1>{nombre}</h1>
                </div>
                <div className='description-container'>

                    <p className='description'>{description}</p>
                    <p className='p '>{precio}</p>
                </div>
                <div>
                    {/* {purchaseCompleted ?(
                        <Link to ="./Item" className = "addCarrito">
                        Ir a mi carrito
                        </Link>
                         ) : (<ItemCount className= "ItemCount" onAdd={onAdd}/>
                        )
                    } */}
                </div>
            </div>


        </div>
        
        //<div className='item-detail'>
            //{props.productos.map((productos)=>(
                //<producto
                   // title={productos.title}
                   // img ={productos.img}
                    //description ={productos.description}

                ///>


            //))}
            
        //</div>

    );
};
export default ItemDetail;