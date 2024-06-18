import { useDispatch, useSelector } from 'react-redux'
import { Box, Flex, Spacer, Heading, Text, Image,  Button, useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,FormControl,Input,FormLabel,
  ModalCloseButton,useDisclosure } from '@chakra-ui/react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import CartProduct from '../Components/ProductBox/CartProduct';
import { v4 as uuidv4 } from 'uuid';
import { addToCart, toggleUsername } from '../features/Cart/Cart';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Cart() {


  const [status,setStatus]= useState(true)
  const breakpoints = {
    
    lg: '1024',
    md: '786',
    sm: '480',
   
  }

  const cart = useSelector( (state) => state.cart.cartItems);
 
  const dispatch = useDispatch();
  const useraddress = JSON.parse(localStorage.getItem('Address'));
  const [coupon, setCoupon] = useState("");
  const [discount, setdiscount] = useState(0);
  const [isdiscount, setisdiscount] =  useState(false);
  const getTotal = () => {

    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += (item.price*70) *item.quantity
    })

    return { totalPrice }
  }
  const getTax = () => {
    let tax = Math.round((6.5 * getTotal().totalPrice) / 100);
    return { tax }
  }

  const getShipping = () => {
    let shipping = 0;
    if (getTotal().totalPrice< 500) {
      shipping = 99;
    }

    return { shipping }
  }

  const handleChange=(e)=>{
    e.preventDefault();
    setCoupon(e.target.value);
   
   }

  const getDiscount = ()=>{
    console.log(coupon==='MASAI')
    if(coupon==='MASAI'){
      setisdiscount(true)
      let dis=getFinal().finalPrice/5
      setdiscount(dis)
      console.log(dis)
    }
   
  }
  console.log(discount);
  const getFinal = () => {
    let finalPrice = Math.round(getTotal().totalPrice + getTax().tax + getShipping().shipping - discount );
    
    return { finalPrice }
  }


  if (getTotal().totalPrice === 0) {
    return <div>
      <Box m='15px' bg='white' borderRadius='10px' display='flex' flexDirection='column' gap='10px' p='20px'>
        <Box m='auto' w='fit-content'> <img src="https://in.sugarcosmetics.com/Cart_nofound.svg" alt="" /></Box>
        <Box >
          <Text>Hey! It's lonely here.<br />
            Your bag seems to have no company.<br />
            Why not add some products?</Text>
        </Box>
        <Box w='fit-content' m='auto'>
          <Link to='/'>     <button style={{ backgroundColor: 'black', color: 'white', width: '150px', padding: '10px', borderRadius: '10px' }}>SHOP NOW</button></Link>
        </Box></Box>
    </div>
  }


  const cartImages = [
    {
      url: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-mini-lipstick-12-baby-houseman-28220228632659_584be809-56c3-4baf-b90b-8db9e95b2afe.jpg?v=1659698252',
      description: 'Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman',
      price: 299,
      id: uuidv4()

    },
    {
      url: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-wonder-woman-creamy-matte-lipstick-03-crime-fighter-berry-pink-28132892737619_a13f2b4c-ce5f-4754-a790-ef61d79ba3ed.jpg?v=1660122776',
      description: 'Wonder Woman Creamy Matte Lipstick - 03 Crime Fighter ',
      price: 399,
      id: uuidv4()
    }
  ]

  const ship = getShipping().shipping > 0 ? `₹${getShipping().shipping}` : 'Free'
  


  function ToastExample() {
    const toast = useToast()
    return (
    <Link to='/'> <button
        style={{ backgroundColor: 'black', color: 'white', width: '300px', borderRadius: '10px', fontSize: '20px', padding: '10px', float: 'right', marginRight: '30px', marginTop: '30px', marginBottom: '30px' }}
        /* backgroundColor='black' color='white' width='300px' size='lg' */
          onClick={() =>{
          toast({
            title: 'Order Placed',
            description: "Thanks for Shopping.",
            status: 'success',
            duration: 1000,
            isClosable: true,

          })
         
        }
        }
      >
        ₹{getFinal().finalPrice}  PLACE ORDER
      </button></Link>
    )
  }


  function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initState={
      firstName:'',
      lastName:'',
      email:'',
      company:'',
      mobile:null,
      flat:'',
      apartment:'',
      pincode:null,
      state:'',
      city:'',
      country:''
  }
  const [address,setAddress]=useState(initState);
  const {firstName,lastName,email,mobile,flat,apartment,pincode,state,city,country}=address;
  

    function handleChange(e){
      const {name,value}=e.target;
     
      setAddress({...address,[name]:value})
 
     }
     function handleClick(){
     /*  if(firstName.length===0 || lastName.length===0 ||
          email.length===0 || city.length===0 || state.length===0 || country.length===0 || 
          apartment.length===0 || 
          mobile.length!==10 || pincode.length!==6 ){
          alert("Enter Valid data")
       }
       else */
      localStorage.setItem("Address",JSON.stringify(address));
  setStatus(false)
      
  }

    return (
      <>
        <Button onClick={onOpen} mr={3} mt='30px' bg='black' color='white'> ₹{getFinal().finalPrice}  PLACE ORDER</Button>
       
        <Modal  isOpen={isOpen} onClose={onClose}>
       
          <ModalOverlay />
          
          <ModalContent>
            <ModalHeader>Please fill this form below</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl isRequired>
              <Flex flexDirection='column' gap='10px'>
              <Flex gap='10px'>
 
  <Input placeholder='First name' name='firstName'  value={firstName}  onChange={handleChange}  />
   
  <Input placeholder='Last name' name='lastName' value={lastName}  onChange={handleChange}/>
  </Flex>
<Flex gap='10px'>
  
  <Input placeholder='Phone Number' name='mobile'  value={mobile}  onChange={handleChange}  />
  
  <Input placeholder='House No.' name='flat' value={flat}  onChange={handleChange}/></Flex>
  
<Flex >
 
  <Input placeholder='Apartment' name='apartment' value={apartment}  onChange={handleChange}/>
  </Flex>
  
  <Flex gap='10px'>
  
  <Input placeholder='Pincode' w='30%' name='pincode'  value={pincode}  onChange={handleChange}/>
  <Button  mr={3} bg='black' color='white' onClick={onClose}>
                Get Details
              </Button>
              </Flex>

              <Flex gap='10px'>
            
  <Input placeholder='State' name='state'  value={state}  onChange={handleChange}  />
   
  <Input placeholder='City' name='city' value={city}  onChange={handleChange}/></Flex></Flex>
  </FormControl>
            </ModalBody>

            <ModalFooter>
              
         

          
            <Button mr={3} bg='black' color='white' onClick={
                
                  handleClick 
            
           
              }>Use this address</Button>
              <Button  mr={3} bg='white' color='black' onClick={onClose}>
                Close
              </Button>
              
            </ModalFooter>
          </ModalContent>
          </Modal>
          
         
      </>
    )
  }




  

  return <div>
    <Flex bg='white' h='50px' alignItems='center'>
      <Box ml='30px' mr='15px'>
        <Link to='/'>Home</Link>
      </Box>
      <MdKeyboardArrowRight />
      <Box ml='15px' fontWeight='600'>Cart</Box>
      <Spacer />
    </Flex>
    <Box m='15px' bg='white' borderRadius='10px' display='flex' flexDirection={{lg:'row',sm:'column',md:'row',base:'column'}}>

      <Flex flexDirection='column' w={{lg:'50%',md:'50%',sm:'100%',base:'100%'}}>
        <Box bg='whitesmoke' borderRadius='10px' m='15px 30px'>
          <Heading as='h5' m='10px 0px' size='sm' >BONUS OFFERS</Heading >

          <Flex flexDirection='column' w='100%'>
            <Flex m='15px 30px'>

              <Image border='1px solid black' borderRadius='5px' width='36px' height='48px' src={cartImages[0].url} alt="" />
              <Flex flexDirection='column' w='100%' ml='10px' ><Text alignSelf='flex-start' h='50%' line-height='14px' fontSize='12px'>{cartImages[0].description}</Text>
                <Heading alignSelf='flex-start' h='50%' as='h6' size='xs'>{cartImages[0].price}</Heading></Flex>
              <button onClick={() => dispatch(addToCart(cartImages[0]))} style={{ width: "180px", color: "white", backgroundColor: "black", borderRadius: "5px", margin: '6px' }}>ADD TO CART</button>
            </Flex>

            <div style={{ borderTop: '1px dashed grey', width: '90%', margin: 'auto' }}  ></div>

            <Flex m='15px 30px'>

              <Image border='1px solid black' borderRadius='5px' width='36px' height='48px' src={cartImages[1].url} alt="" />
              <Flex justifyContent='space-between' ml='10px' flexDirection='column' w='100%' ><Text alignSelf='flex-start' h='50%' line-height='14px' fontSize='12px'>{cartImages[1].description}</Text>
                <Heading alignSelf='flex-start' h='50%' size='xs'>{cartImages[1].price}</Heading></Flex>
              <button style={{ width: "180px", color: "white", backgroundColor: "black", borderRadius: "5px", margin: '6px' }}>ADD TO CART</button>
            </Flex>

          </Flex>
        </Box>
        <Heading as='h5' m='10px 0px' size='sm' >CART SUMMARY</Heading >
        <Box bg='white' borderRadius='10px' m='12px 30px' border='1px solid #e4e4e4'>

      {cart.map((image) =>
    <CartProduct key={image.id} id={image.id} image={image.url} title={image.description} price={image.price} quantity={image.quantity} />
      )}


        </Box>

      </Flex>
      <Flex flexDirection='column' w={{lg:'50%',md:'50%',sm:'100%',base:'100%'}} >
        <Box>
          <Heading as='h5' m='10px 0px' size='sm' >APPLY COUPON</Heading >
          <Box bg='white' borderRadius='10px' m='12px 30px' border='1px solid #e4e4e4' p='10px' display='flex' justifyContent='space-around'>
            <Input placeholder='Enter gift code or coupon code' type='text' size='md' w='80%' value={coupon} onChange={handleChange} />
            <Button colorScheme='pink' size='md' alignSelf='center' w='90px' type='submit' onClick={getDiscount}  >APPLY</Button>
          </Box>
        </Box>
        <Box>
          <Heading as='h5' m='10px 0px' size='sm' >PRICE DETAILS</Heading >
          <Box bg='white' borderRadius='10px' m='12px 30px' border='1px solid #e4e4e4' p='10px' >

            <Flex flexDirection='column' w='100%'>
              <Flex justifyContent='space-between'><Text>Sub Total</Text> <Text>₹{getTotal().totalPrice}</Text></Flex>
              <Flex justifyContent='space-between'><Text>Tax</Text> <Text></Text>₹{getTax().tax}</Flex>
              {(isdiscount)? <Flex justifyContent='space-between'><Text>Discount</Text> <Text color='green'>-₹{discount}</Text></Flex>:<div></div>}
              <Flex justifyContent='space-between'><Text>Shipping</Text>
                

                <Text color='green'>{ship}</Text></Flex>
            </Flex>
            <div style={{ borderTop: '1px dashed grey', width: '100%', alignSelf: 'flex-end', margin: '10px auto' }}  ></div>
            <Flex justifyContent='space-between'>
              <Text fontWeight='600' fontSize='20px' >Total</Text >
              <Text fontWeight='600' fontSize='20px' >₹{getFinal().finalPrice}</Text >
            </Flex>
          </Box>

        </Box>
        {!status && 
        <Box bg='white' borderRadius='10px' m='12px 30px' border='1px solid #e4e4e4' p='15px'>

          <Text textAlign='left' color='#757575'>{useraddress.firstName} {useraddress.lastName}</Text>
          <Text textAlign='left' color='#757575'>{useraddress.apartment}</Text>
          <Text textAlign='left' color='#757575'>{useraddress.city},{useraddress.state}, {useraddress.pincode} </Text>
          <Text textAlign='left' color='#757575'>Phone number : {useraddress.mobile}</Text>
          
          </Box>}
        <Box>
          {status?<BasicUsage/>:<ToastExample/>}
           </Box>

      </Flex>

    </Box>


  </div>
}