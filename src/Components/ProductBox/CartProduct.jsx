import { Flex, Heading, Text,Image,} from '@chakra-ui/react'
import { RiDeleteBinLine } from 'react-icons/ri';
import {  useDispatch, } from 'react-redux'
import { incrementQuantity, decrementQuantity, removeItem } from "../../features/Cart/Cart";
export default function CartProduct({id, image, title, price, quantity=0}) { 

   
const dispatch = useDispatch();
 
    return <div>
<Flex  p='6px'>
<Image  borderRadius='5px' width='36px' height='48px' src={image} alt="" />
<Flex justifyContent='space-between' ml='10px' flexDirection='column' w='100%' ><Text alignSelf='flex-start'  h='50%' line-height='14px'  fontSize='12px'>{title} </Text>
    <Heading alignSelf='flex-start'  h='50%' size='xs'>₹{price===0.0 ? 999 : price*70}</Heading></Flex>
{/* <button style={{ width: "180px", color: "white", backgroundColor: "black", borderRadius: "5px", margin: '6px'  }}>ADD TO CART</button>
 */}
 <button onClick={()=>dispatch(removeItem(id))}> <RiDeleteBinLine/></button>
 <div style={{border:'1px solid #e4e4e4',display:'flex',width:'100px',justifyContent:'space-evenly',height:'50%',alignSelf:'center',borderRadius:'5px',margin:'0px 10px'}}>
    
 <button onClick={()=>dispatch(decrementQuantity(id))}>-</button>
 <span>{quantity}</span>
 <button onClick={()=>dispatch(incrementQuantity(id))}>+</button>
 </div>
</Flex>      
<div style={{borderTop:'1px solid #e4e4e4',width:'90%',margin:'auto'}}  ></div>     
    </div>
}