import styles from "./ProductBox.module.css";
import {   IconButton,Text,Box,} from '@chakra-ui/react'
import { FiHeart } from 'react-icons/fi'
import {  useDispatch } from 'react-redux'
import { addToCart } from "../../features/Cart/Cart";
import { GiRoundStar } from 'react-icons/gi';
import { Link } from "react-router-dom";
function ProductBox(props){

    
    const dispatch = useDispatch();
    const payload = {
        url: props.url,
        description: props.description,
        price: props.price,
       id: props.id,
    }
 
    
return <div>
 
 <div className={styles.imageCss2} >
 <Link to={`/${props.catg}/${props.id}`}>
            <img  src={props.url} alt="img"  /></Link>
            <div className={styles.productDescription} >
                   {props.description}
              </div>
              <Box   w='fit-content' display='flex' m='auto' gap='6px'>
        <Text mt='3px' color='green'>   <GiRoundStar  /></Text>
        <Text color='green'>{props.rating?  props.rating : '4.5'}</Text>
        </Box>
              <div className={styles.productPrice}>
              {props.price === '0.0' ?  "₹ 259" : `₹${props.price*70..toFixed(0)}`}
              </div>
              <div className={styles.buttongrp}>
             <button  > <IconButton border='2px solid black' fontSize='18px' as={FiHeart} color='black' p='3px'/></button>
              <button onClick={()=>dispatch(addToCart(payload))}  style={{width:"150px",color:"white",backgroundColor:"black",borderRadius:"5px"}} >ADD TO CART</button>
              </div>
              </div>
              
</div>
}
export default ProductBox;