import styles from "./NavigationTop.module.css";
import { Flex, Box,Image,Input,Button,InputGroup,Grid,GridItem} from '@chakra-ui/react'
import { Link, useSearchParams } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import ProductBox from "../ProductBox/ProductBox";
import { useDispatch, useSelector } from 'react-redux';
import {BiHeart,BiShoppingBag} from 'react-icons/bi'
import { TbDiscount2 } from 'react-icons/tb'
import { useState } from "react";
import NavigationBottom from './NavigationBottom'
import {toggleSearch} from '../../features/Cart/Cart'
import { useEffect } from "react";

function NavigationTop(){

   const username = useSelector((state)=>state.cart.userName)
   console.log("username"+username)
  const [searchQuery,setSearchQuery] = useState('');
  const dispatch = useDispatch();
 
const  handleSearch = ()=>{
  dispatch(toggleSearch(searchQuery))
 setSearchQuery("")
}

useEffect(()=>{
  console.log(username)
},[username])

    // src/pages/Home.js
const cart = useSelector((state) => state.cart.cartItems)

const getTotalQuantity = () => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}

    return <div>
    <div className={styles.navmain}>
 <Flex className={styles.sugarnavtop}>
  <Box className={styles.menu}   >
  <Box   w='fit-content' m='auto' mt='10px' >
     <GiHamburgerMenu color="white" fontSize='20px'/>
  </Box></Box>
   <Box className={styles.sugarlogo}>
  <Link to='/'><Image className={styles.sugarlogoimg}
   src="data:image/png;base64,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" alt =""/></Link>

   </Box>
   <Box className={styles.searchtop}>
   <InputGroup >
   <Input  border='1px solid white' borderRightRadius='0px' onChange={(e)=>setSearchQuery(e.target.value)}
   p='0px 15px' color='white' value={searchQuery}
   placeholder='Try liquid lipstick' size='md' variant='unstyled' />
   {/* <IconButton as={FiSearch} size='xs'  w={6} h={6} mr='6px' color='black' bg='white' variant='unstyled'/> */}
   <Link to='/search'><Button leftIcon={<FiSearch />} bg='white'borderLeftRadius='0px'pr=' 25px' pl='10px' variant='unstyled'
   onClick={handleSearch} 
   >Search</Button></Link>
   </InputGroup>

   </Box>
   <Box  className={styles.searchtop2}></Box>
   <Box className={styles.loginregister}>
   <Link to='/makeup' ><FaUserCircle fontSize='20px'  color='white'/></Link>
   {/* <Link as={}  w={6} h={6} mr='6px' color='white' /> */}
   {(username==='Login/Register')?<Link to='/login' style={{color:'white'}}>Login/Register</Link>:<Link to='/' style={{color:'white'}}>{username}</Link>}
   
   </Box>
  
   <Box className={styles.icongroup}>
       {/* <Link  as={} size='xs'  w={6} h={6} mr='6px' color='white' variant='unstyled' /> */}
   {/*    <Link   as={} size='xs' w={6} h={6} mr='6px' color='white' variant='unstyled'/> */}
   <Link to='/' ><BiHeart style={{marginRight:'6px'}} fontSize="20px" color='white'/></Link>
    <div>
        <div className={styles.quantityNum}><p>{getTotalQuantity() || 0}</p></div>
    
     <Link to='/cart' ><BiShoppingBag fontSize="20px" style={{marginRight:'6px'}}  color='white'/>
     </Link>
     </div>
      <Link to='/' ><TbDiscount2 fontSize='20px' style={{marginRight:'6px'}} color='white'/></Link>
       {/* <Link as={} size='xs' w={6} h={6} mr='10px' color='white' variant='unstyled'/> */}
   </Box>
   </Flex>
   <NavigationBottom/>
  
   </div>

  


</div>





}
export default NavigationTop
;