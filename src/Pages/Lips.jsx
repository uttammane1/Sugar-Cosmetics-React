

import { Box, Flex, GridItem, Grid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { GoChevronDown } from 'react-icons/go';

import {
  Menu, 
  MenuButton,
  MenuList,
  MenuItemOption,
  Button,
}
from '@chakra-ui/react'
import ProductBox from '../Components/ProductBox/ProductBox';

function Lips() {
  const breakpoints = {
    
    lg: '1024',
    md: '786',
    sm: '480',
   
  }
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [order, setOrder] = useState("");
  const [prod, setProd] = useState('');
  async function getData(url) {
    try {
      //setLoading(true)
      var res = await fetch(url)
      var res2 = await res.json();
      console.log(res2);
      setData(res2);
    }
    finally {
      setLoading(false);
    }

  }
  function changeUrlOrder(order) {
    setOrder(order);
  }
  function changeUrlType(prod) {
    setProd(prod)
  }
  useEffect(() => {
    let url = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick"
    if (prod.length !== 0 && order.length !== 0)
      url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick?_sort=price&_order=${order}&q=${prod}`
    else if (prod.length !== 0)
      url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_category=${prod}&product_type=lipstick`
    else if (order.length !== 0)
      url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick?_sort=price&_order=${order}`

    getData(url);

  }, [order, prod])
  //getData();
  if (loading) {

  }

  return (
    <div >

      <Flex flexDirection={{lg:'row',md:'column',sm:'column'}}>
        <Box display='flex' flexDirection='column' w={{lg:'25%',md:'35%',sm:'50%'}} h='min-content' m='15px' gap='10px'  >
          <Box  >
            <Menu matchWidth='true'>
              <MenuButton as={Button} bg='white' w='80%' >
                <Flex >
                  <Flex justifyContent='flex-start' gap='10px' >
                    <Text>Sort By:</Text>
                    <Text>Relevance</Text>
                  </Flex>
                  <Box m='auto' ml='35px'  ><GoChevronDown /></Box>
                </Flex>

              </MenuButton>
              <MenuList>
                <MenuItemOption onClick={() => changeUrlOrder("")} >Relevance</MenuItemOption>
                <MenuItemOption onClick={() => changeUrlOrder("asc")}>Price:Low To High</MenuItemOption>
                <MenuItemOption onClick={() => changeUrlOrder("desc")}>Price:Hight To Low</MenuItemOption>
              </MenuList>
            </Menu>
          </Box>
          <Box >
            <Menu matchWidth='true'>
              <MenuButton as={Button} bg='white' w='80%' >
                <Flex >
                  <Flex justifyContent='flex-start' gap='10px' >
                    <Text>Filter By:</Text>
                    <Text>Product Type</Text>
                  </Flex>
                  <Box m='auto'  ><GoChevronDown /></Box>

                </Flex>

              </MenuButton>
              <MenuList >
               
                <MenuItemOption onClick={() => changeUrlType("lip_stain")}>Lip Crayon</MenuItemOption>
                <MenuItemOption onClick={() => changeUrlType("liquid")}>Liquid Lipstick </MenuItemOption>
                <MenuItemOption onClick={() => changeUrlType("lip_gloss")}>Lip Gloss</MenuItemOption>
                <MenuItemOption onClick={() => changeUrlType("")}>Reset Filters</MenuItemOption>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        <Grid display='grid' templateColumns={{ lg:'repeat(3,1fr)',md:'repeat(2,1fr)',sm:'repeat(1,1fr)'}} w='75%' m='10px'>

          {data.map((elem) => (elem.price !== undefined && <GridItem><ProductBox rating={elem.rating} catg={elem.category
} id={elem.id} url={elem.api_featured_image } description={elem.name} price={elem.price} /></GridItem>))}


        </Grid>
      </Flex>






    </div>
  )
}

export default Lips