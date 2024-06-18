import {useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {  GridItem, Grid,Skeleton,Box  } from '@chakra-ui/react';
import ProductBox from "../Components/ProductBox/ProductBox";

export default function Search(){
    const [searchParams,setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [products,setProducts] = useState([])

    const searchQuery = useSelector((state) => state.cart.searchState)
    const q = searchParams.get('q');
    const getData = async ()=>{
        try {
            setLoading(true)
          let res = await fetch(`https://cosmeticsapi1.herokuapp.com/makeup?q=${searchQuery}`);
          let data = await res.json();
          console.log(searchQuery);
          setProducts(data);
          setSearchParams({q:searchQuery})
        } finally {
            setLoading(false)
        }
      }

     useEffect(() => {
      getData()
     },[searchQuery])

    return <div>
        <Grid display='grid' templateColumns='repeat(4, 1fr)'  m='10px'>
              {(loading)?<Box m='50px'>
              <Grid gap='10px' templateColumns='repeat(4, 1fr)'>
  <Skeleton height='414px' width='307px' borderRadius='10px' />
  <Skeleton height='414px' width='307px'/>
  <Skeleton height='414px' width='307px'/>
  <Skeleton height='414px' width='307px' />
  <Skeleton height='414px' width='307px'/>
  <Skeleton height='414px' width='307px'/>
</Grid>
   </Box>:products.map((elem) => (elem.price !== undefined && <GridItem><ProductBox rating={elem.rating} catg={elem.catg} id={elem.id} url={elem.image} description={elem.name} price={elem.price} /></GridItem>))}


        </Grid>
    </div>
}