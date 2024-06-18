import { useEffect, useState } from "react";
import { Box, Flex,  Text,UnorderedList,ListItem } from '@chakra-ui/react';
import { useParams} from "react-router-dom";
import { GiRoundStar } from 'react-icons/gi';
import {   IconButton} from '@chakra-ui/react'
import { FiHeart } from 'react-icons/fi'
import {  useDispatch } from 'react-redux'
import { addToCart } from "../../features/Cart/Cart";
export default function MakeupIndividual() {

    const dispatch = useDispatch();
   
    const [product, setproduct] = useState({});
    const {catg, id } = useParams();
    const getData = async () => {
       
        try {
            let res = await  fetch(`https://cosmeticsapi1.herokuapp.com/makeup/${id}`)
            let data = await res.json();
            console.log(id);
            console.log(catg);
            setproduct(data)

        } catch (error) {
            
        }
       
    }  
      useEffect(() => {
        getData();
      }, []);

      const payload = {
        url: product.image,
        description: product.name,
        price: product.price,
       id: product.id
    }
return <div>

<Box w='90%' bg='white' margin='10px auto' borderRadius='10px'>
   <Flex> 
     <Box p='20px' border='1px solid #e4e4e4' m='20px' borderRadius='10px'>
     <img width='247px' height='337px' src={product.image} alt="prof-pic" />
     </Box>
     <Flex m='20px' p='10px' flexDirection='column' gap='10px'>
        <Box>
            <Text fontSize='20px' w='fit-content'>{product.name}</Text>
        </Box>
        <Box border='1px solid #e4e4e4'  w='fit-content' p='3px 10px'  display='flex' borderRadius='5px' gap='5px' >
        <Text mt='2px'>   <GiRoundStar  /></Text>
        <Text>{product.rating}</Text>
        </Box>
        <Box border='3px solid aliceblue' w='fit-content'>
            <Text> ₹{product.price}</Text>
         </Box>
         <Box bg='#f2f2f2'  w='fit-content' display='flex' flexDirection='column' gap='10px' p='10px 20px' borderRadius='10px' >
         
             <Box  w='fit-content'><Text fontSize='15px' fontWeight='600' >AVAILABLE OFFERS!!!</Text></Box> 
            <Box >

            <UnorderedList display='flex' flexDirection='column' gap='10px'>
  <ListItem>
    <Box  w='fit-content'  >
        <Text>Get A Matte Attack Transferproof Lipstick - 06 Spring Crimson (Crimson Red)</Text>
        <Text w='fit-content'>And A Flat Glitter Gold Pouch Free On A Minimum Spend Of Rs. 799</Text> </Box>
    </ListItem>
  <ListItem>
    <Box  w='fit-content'>Grab A Complimentary Product Worth Rs.2497 On A Spend Of Rs.3399 </Box> </ListItem>
 
</UnorderedList>
            </Box>
                  
                             
         </Box>

         <Box w='fit-content' display='flex' gap='10px' m='10px 0px'>
         
             <button> <IconButton border='2px solid black' fontSize='18px' as={FiHeart} color='black' p='3px'/></button>
              <button onClick={()=>dispatch(addToCart(payload))}  style={{width:"150px",color:"white",backgroundColor:"black",borderRadius:"5px"}} >ADD TO CART</button>
              
         </Box>
     </Flex>
   </Flex>
</Box>
</div>

}
 