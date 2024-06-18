import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import styles from './Footer.module.css'

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.div1}>
          <img style={{ height: "120px",margin:'auto' }} src="https://in.sugarcosmetics.com/Footer_sugar_icon.png" alt="" />
        </div>
        <div className={styles.div2}>
          <a href='https://www.facebook.com/trySUGAR/' target="_blank"><img className={styles.imgdiv1} src="https://in.sugarcosmetics.com/desc-images/facebook.svg" alt="" /></a>
          <a  href='https://twitter.com/trySUGAR' target="_blank"><AiOutlineTwitter  color='#999999'  fontSize='25px' /></a>
          <a href='' target="_blank"><img className={styles.imgdiv1} src="https://in.sugarcosmetics.com/desc-images/Instagram.svg" alt="" /></a>
          <a href='https://www.pinterest.com/sugarcosmetics/' target="_blank"><img className={styles.imgdiv1} src="https://in.sugarcosmetics.com/desc-images/Pinterest.svg" alt="" /></a>
          <a href='https://sugarcosmetics-blog.tumblr.com/' target="_blank"><img className={styles.imgdiv1} src="https://in.sugarcosmetics.com/desc-images/Tumblr.svg" alt="" /></a>
          <a href='https://www.youtube.com/channel/UCKVqnev2idvmUNKc2b91B8g' target="_blank"><img className={styles.imgdiv1} src="https://in.sugarcosmetics.com/desc-images/Youtube.svg" alt="" /></a>
        </div>
        <hr style={{ marginLeft: "40px", marginRight: "40px", marginTop: "42px" }} />
        <div className={styles.div4} style={{ marginLeft: "90px", marginTop: "5px" }}>
          <div style={{ display: "flex", marginTop: "30px" }}>
            <a href='https://in.sugarcosmetics.com/stores' target="_blank">Stores</a>
            <a href='https://in.sugarcosmetics.com/pages/terms-conditions' target="_blank">Terms and Conditions</a>
            <a href='https://in.sugarcosmetics.com/pages/returns-refunds' target="_blank">Returns</a>
            <a href='https://in.sugarcosmetics.com/pages/faqs' >FAQs</a>
            <a href='https://in.sugarcosmetics.com/pages/about-us' target="_blank">About Us</a>
          </div>
        </div >
        <hr style={{ marginLeft: "40px", marginRight: "40px", marginTop: "42px" }} />
        <div style={{ marginLeft: "90px", marginTop: "25px" }}>
          <p style={{ color: "white", fontSize: "24px" , textAlign:'left'}}>GET IN TOUCH</p>
        </div>
        <div className={styles.ugly} style={{ marginLeft: "90px", marginTop: "5px", display: "flex",justifyContent:'space-evenly' ,fontFamily:"Roboto,sans-serif"}}>
          <div>
            <div style={{ display: "flex" }}><img style={{ marginTop: "6px", width: "20px", height: "15px" ,fontFamily:"Roboto,sans-serif"}} src="https://in.sugarcosmetics.com/desc-images/phone_android_white.svg" alt="" /><p style={{ color: "white", fontSize: "18px", fontWeight: "540" }}>Call us at</p></div>
            <p style={{ fontSize: "18px", color: "rgb(153,153,153)", marginTop: "5px",textAlign:"left" ,fontFamily:"Roboto,sans-serif"}}>1800-209-9933</p>
            <p style={{ fontSize: "small", color: "rgb(153,153,153)", marginTop: "5px" ,fontFamily:"Roboto,sans-serif"}}>Monday to Friday : 9 AM to 7 PM</p>
          </div>
          <div>
            <p style={{ color: "white", fontSize: "18px", fontWeight: "700" ,textAlign:"left",fontFamily:"Roboto,sans-serif"}}>Support</p>
            <p style={{ fontSize: "18px", color: "#969696", marginTop: "2px",fontFamily:"Roboto,sans-serif" }}>hello@sugarcosmetics.com</p>
          </div>
          <div>
            <p style={{ color: "white", fontSize: "18px", fontWeight: "700" ,textAlign:"left",fontFamily:"Roboto,sans-serif"}}>Careers</p>
            <a style={{textDecoration:"none" }} href="https://in.sugarcosmetics.com/careers"><p style={{ fontSize: "18px", color: "rgb(153,153,153)", marginTop: "3px",fontFamily:"Roboto,sans-serif" }}>We're hiring!</p></a>
          </div>
          <div>
            <p style={{ color: "white", fontSize: "18px", fontWeight: "700",textAlign:"left" ,fontFamily:"Roboto,sans-serif"}}>Press & Media</p>
            <p style={{ fontSize: "17px", color: "rgb(153,153,153)", marginTop: "3px" ,fontFamily:"Roboto,sans-serif" }}>pr@sugarcosmetics.com</p>
          </div>
          <div>
            <p style={{ color: "white", fontSize: "17px", fontWeight: "700" ,textAlign:"left" ,fontFamily:"Roboto,sans-serif"}}>Influencer Collab</p>
            <a href='https://blog.sugarcosmetics.com/collab' target="_blank" style={{  textDecoration: "none"}}><p style={{ fontSize: "18px", color: "rgb(153,153,153)", marginTop: "3px", textDecoration: "none", paddingTop: "-20px" ,textAlign:"left",fontFamily:"Roboto,sans-serif"}}>Join Us</p></a>
          </div>
        </div>
        <hr style={{ marginLeft: "40px", marginRight: "40px", marginTop: "42px" }} />
        <div style={{ marginLeft: "90px" }}>
          <div className={styles.div3}>
            <div className={styles.innerdiv3}>
              <div className={styles.gtc}>
                <p style={{ fontSize: "large" }}>GET THE NEW SUGAR APP TODAY!</p>
                <p style={{ width: "400px", fontSize: "14px", color: "rgb(131,131,131)" ,marginTop:"3px" }}>Tap into a better shopping experience.</p>
              </div>
              <div style={{ display: "flex", gap: "20px"}}>
                <a href='https://sugarcosmetics.app.link/WebFApp' target="_blank"><img style={{ height: "39px", width: "132px", marginTop: "15px" }} src="https://in.sugarcosmetics.com/playstore.png" alt="" /></a>
                <a href='https://sugarcosmetics.app.link/WebFApp' target="_blank"><img style={{ height: "39px", width: "132px", marginTop: "15px" }} src="https://in.sugarcosmetics.com/apple-store.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.cpr}><h3>Copyright © 2024 SUGAR Cosmetics. All rights reserved.</h3></div>
      </div>

    </>
  )
}

export default Footer

/* import { Box, Flex, GridItem, Grid, Text,Spacer,Skeleton } from '@chakra-ui/react';

export default function Footer(){
return <div>
  <Box w='100%' mt='30px'>

     <Box bg='white' p='10px'>
      <Text textAlign='left' ml='70px' >READ MORE ABOUT SUGAR COSMETICS</Text>
     </Box>
     <Box>
      <Text>LET'S STAY IN TOUCH</Text>
     </Box>

  </Box>
</div>

} */