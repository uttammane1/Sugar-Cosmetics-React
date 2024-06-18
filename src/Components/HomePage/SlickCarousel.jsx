import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SlickCarousel.module.css";
import { AspectRatio} from '@chakra-ui/react'
import React from "react";
import Slider from "react-slick";
import ProductBox from "../ProductBox/ProductBox";
import { v4 as uuidv4 } from 'uuid';
import { useSelector} from 'react-redux'


 export default function SimpleSlider() {

  const cart = useSelector((state)=>state.cart.cartItems);
  
  console.log(cart);
   function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block",right:"3%" ,zIndex:1 }}
          onClick={onClick}
        />
      );
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block",left:"3%" ,zIndex:1 }}
          onClick={onClick}
        />
      );
    }




    const settings1 = {
        dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 6000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const settings2 = {
      dots: false,
    infinite: true,
    slidesToShow: 4,
     slidesToScroll:4 ,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };
  const settings3 = {
    dots: false,
  infinite: true,
  slidesToShow: 3,
   slidesToScroll:3 ,
   nextArrow: <SampleNextArrow />,
   prevArrow: <SamplePrevArrow />,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      
      }
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  
  
};
    
const settings4 = {
  dots: false,
infinite: true,
slidesToShow: 4,
 slidesToScroll:1 ,
 nextArrow: <SampleNextArrow />,
 prevArrow: <SamplePrevArrow />,
 responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    
    }
  },
  {
    breakpoint: 786,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]


};

const bestsellerImages= [
  {
    url: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FLipstick-_-Kohl-Value-Set---WBG_1.jpg%3Fv%3D1692719185&w=256&q=75",
    description:"Lipstick and kohal set",
    price:"14",
  }
  ,
  {
    url:   "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F489511912-women-s-day-gifting-kit-wbg-images_1.jpg%3Fv%3D1688227825&w=256&q=75",
    description:"All you need Beauty kit ",
    price:"14",
  },
  {
    url: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F554408657-wedding-makeup-kit-revamp_1.jpg%3Fv%3D1700475948&w=256&q=75",
    description:"Weeding Makeup kit ",
    price:"13",
  },
  {
    url:  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F566527803-the-office-makeup-kit-wbg-1.jpg%3Fv%3D1704460836&w=256&q=75",
    description:"The Ofiice Makeup kit ",
    price:"14",
    
  },
  {
    url:  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FValue-Sets---WBG-Listing_de1b12a1-0bf9-4ea0-8f47-fafa1c76bafa.jpg%3Fv%3D1694187888&w=256&q=75",
    description:"Priming Mostrixzue and foundation duo",
    price:"13",
    
  },
  {
    url:   "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FValue-Sets---WBG-Listing_543b4a34-7c88-4bf5-b51a-26354f743fcb.jpg%3Fv%3D1694187910&w=256&q=75",
    description:"Lips so pretty duo",
    price:"8",
    
  },
  {
    url:  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FAirKissPowderPoweredByImagesArtboard1.jpg%3Fv%3D1644813116&w=256&q=75",
    description:"Air kiss powder Lipstick",
    price:"13",
    
  },
  {
    url:   "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F489511912-women-s-day-gifting-kit-wbg-images_1.jpg%3Fv%3D1688227825&w=256&q=75",
    description:"All you need Beauty kit ",
    price:"11",
    
  }
 
  
]

const hotdeals=[
 "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/72202ad7-4872-4d81-b61e-09dc2621d887.jpg&w=1920&q=75",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/9b92bb73-edd9-4b40-84be-c0a3f9c32d7c.gif",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/7b0cbcd1-1433-484d-8ae1-6f54f52e73fa.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/ee7aec73-2712-4b13-b979-8af7326e6219.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/6f66062a-1a39-4252-852b-646acb35d9af.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/6359ed8e-1f43-44aa-b602-5142a7bfbd9f.jpg"
]

const justinImages=[
  {
    url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FSibling-Love-Limited-Edition-Gift-Set---WBG.jpg%3Fv%3D1700063053&w=256&q=75",
    description:"Pujo Special Makeup Kit",
    price:"14",
    
  },
  {
    url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FLaunch-Arch-Arrival-Brow-Styler.jpg%3Fv%3D1694706131&w=256&q=75",
    description:"Arch Arrival brow Styler",
    price:"14",
    
  },
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg?v=1657123108",
    description:"Pujo Special Makeup Kit",
    price:"14",
    
  },
  {
    url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F549928439-main-img.jpg%3Fv%3D1698248481&w=256&q=75",
    description:"Pujo Special Makeup Kit",
    price:"14",
    
  },
  {
    url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F1_302fb1a0-4862-49b1-bd45-404e6ce8e578.jpg%3Fv%3D1696571396&w=256&q=75",
    description:"Pujo Special Makeup Kit",
    price:"14",
    
  },
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/2_d5e8f5f6-db6f-43d4-a1ac-1da7b22fdc1b.jpg?v=1652943021",
    description:"Pujo Special Makeup Kit",
    price:"14",
    
  },
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
    description:"Pujo Special Makeup Kit",
    price:"14",
    
  },
  {
    url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FTravelMakeupKit_1.jpg%3Fv%3D1695397658&w=256&q=75",
    description:"Travel Ready Makeup Kit",
    price:"14",
    
  }
]

const toppicks= [
  "https://d32baadbbpueqt.cloudfront.net/Homepage/fd062254-fcc7-432d-94dc-9d7da4a6fc62.gif",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/84f0d36c-381f-4c62-8702-b0059b13094a.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/0903f25c-ae3f-4de6-980b-1e3a4bbe2b6e.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/c5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/ae700fcf-b911-452c-a916-f9994a15d20c.gif",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/fd3114aa-06bb-4aff-bb21-7381559ee48f.jpg"
]

const giftingImages = [
  {
    url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FLipstick-_-Kohl-Value-Set---WBG_1.jpg%3Fv%3D1692719185&w=256&q=75",
    description:"Eye Liner ",
    price:"14",
    
  },
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/WBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg?v=1657814596",
    description:"Wedding Makeup Kit",
    price:"14",
    
  },
  {
    url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F554408657-wedding-makeup-kit-revamp_1.jpg%3Fv%3D1700475948&w=256&q=75",
    description:"Wedding Makeup Kit",
    price:"13",
    
  },
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_0cbf7ca7-3b1c-4838-8fda-176ebd7d38fa.jpg?v=1649423983",
    description:"Wedding Makeup Kit",
    price:"13",
    
  },
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/RakshaBandhanKit-WBGImages.jpg?v=1654694624",
    description:"Wedding Makeup Kit",
    price:"14",
    
  },
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_0ca61ef7-05ce-49be-9fa1-de7c41b99a1f.jpg?v=1650022932",
    description:"Wedding Makeup Kit",
    price:"13",
    
  },
  {
    url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_1_7aa4b700-2b5f-4212-8b56-86889ab8a390.jpg%3Fv%3D1689262362&w=256&q=75",
    description:"Wedding Makeup Kit",
    price:"14",
    
  },
  {
    url:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F489511912-women-s-day-gifting-kit-wbg-images_1.jpg%3Fv%3D1688227825&w=256&q=75",
    description:"Wedding Makeup Kit",
    price:"14",
    
  }
]

const supersaverImages=[
 
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-matte-as-hell-crayon-lipstick-value-set-14600053391443.jpg?v=1619119204",
    description:"Lipstick value set",
    price:"11",
    
  },
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-11---WBG-Images_1.jpg?v=1659456262",
    description:"Lipstick value set",
    price:"11",
    
  },
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/2_bb525208-246a-4f40-b57f-d88372708398.jpg?v=1655308814",
    description:"Lipstick value set",
    price:"11",
    
  },
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681",
    description:"Lipstick value set",
    price:"11",
    
  },
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681",
    description:"Lipstick value set",
    price:"11",
    
  },
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/WBG1_73e85cb4-80d8-4eeb-ba32-deaf11c4483f.jpg?v=1658851292",
    description:"Lipstick value set",
    price:"14",
    
  },
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-lip-balm-sheet-mask-15782913671251.jpg?v=1619152222",
    description:"Lipstick value set",
    price:"11",
    
  },
  {
    url:"https://cdn.shopify.com/s/files/1/0906/2558/products/WBG1_ce9e0d25-5cd4-44a0-80cd-3856d9c7850d.jpg?v=1658937586",
    description:"Lipstick value set",
    price:"11",
    
  },
]

const newlaunchesImages=[
  "https://d32baadbbpueqt.cloudfront.net/Homepage/a1ea3283-9593-4f1c-8e6b-70c3a5062c37.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg"
]

const newlaunchesImages2=[
  "https://d32baadbbpueqt.cloudfront.net/Homepage/9cfd6ab0-0b3d-463c-abb4-1b1e5884cd2d.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/1faaf049-29d7-4a66-95ea-931d57c565bd.gif",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/a2eba90c-a5e5-491c-9b47-a224e55cd2f7.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/b8f9b28b-0289-4148-b84b-78c9bec5f3ce.gif",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/b973f929-aa28-4879-991d-90f57bbcbbd8.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/4256e44a-cae4-455e-986d-af5f5183f451.jpg"
]

const videoLinks = [
  "https://cdn4.fireworktv.com/medias/2022/10/11/1665490644-wszacfjo/watermarked/540/WhatsAppVideo2022-10-11at5.28.04PM.mp4",
  "https://cdn4.fireworktv.com/medias/2022/10/11/1665491445-phqugwak/watermarked/540/WhatsAppVideo2022-10-11at5.29.57PM1.mp4",
  "https://cdn4.fireworktv.com/medias/2022/10/11/1665493086-gcxeskvq/watermarked/540/WhatsAppVideo2022-10-11at6.15.56PM.mp4",
  "https://cdn4.fireworktv.com/medias/2022/10/11/1665492500-vohfmcja/watermarked/540/WhatsAppVideo2022-10-11at6.16.01PM.mp4",
  "https://cdn4.fireworktv.com/medias/2022/10/11/1665491084-nrdtwcpe/watermarked/540/WhatsAppVideo2022-10-11at5.28.08PM1.mp4",

]

const exploreImages =[
  "https://d32baadbbpueqt.cloudfront.net/Homepage/4ab238ad-c6ba-484d-a43e-78fba6536341.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/97722164-55b4-4030-a9f6-0219a9575a24.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/df6288fe-dbd2-44ea-9e65-8fb10a592eed.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/a7b72adf-7e02-45c4-a208-552d46eefc4c.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/88ee8d58-7cc5-450a-953b-aa16ef190d52.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/60bdba27-5962-401b-b03e-2c55baa74bd1.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/259217a4-239d-4103-8bf7-cd2a7e1529c1.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/4ab238ad-c6ba-484d-a43e-78fba6536341.jpg"
]



    return <div>
 
      <div className={styles.bannermain}  >
        
        <Slider {...settings1}  className={styles.bannerSlider1}  >
          <div>
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F5821a81c-6d53-4001-83ea-8ef0be288d81.jpg&w=1920&q=75" alt= "img"/>
          </div>
          <div>
         <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F5184a46d-92d8-472d-9560-45620908b294.jpg&w=1920&q=75" alt="" />
          </div>
          <div>
           <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fabd3d589-694b-4f81-a74e-2d836d0edf3a.jpg&w=1920&q=75" alt="" />
          </div>
          <div>
            <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/2d934fad-8c2a-4f7d-85fc-ea1ed8f23673.jpg" alt="" />
          </div>
          <div>
           <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fbe3dd028-8d91-40c7-80aa-4e6ba127f80c.jpg&w=1920&q=75" alt="" />
          </div>
          <div>
           <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg" alt="" />
          </div>
        </Slider>
</div>
        <Slider {...settings1}  className={styles.bannerSlider2}  >
         
            <div>
              <img src='  https://d32baadbbpueqt.cloudfront.net/Homepage/e320d245-5aeb-4433-b0b1-9a67c2d78303.jpg
' alt="" />
            </div>
            <div>
              <img src='  https://d32baadbbpueqt.cloudfront.net/Homepage/0b94d1b3-8011-435b-b38d-8acdc8f53710.jpg
' alt="" />
            </div>
            <div>
              <img src='  https://d32baadbbpueqt.cloudfront.net/Homepage/8f3b13ce-686b-4bd1-b2e5-e2534e2de3ec.gif
' alt="" />
            </div>
            <div>
              <img src='  https://d32baadbbpueqt.cloudfront.net/Homepage/5edfd368-351e-47e7-8384-6bca3eb16df9.jpg
' alt="" />
            </div>
            <div>
              <img src='  https://d32baadbbpueqt.cloudfront.net/Homepage/0004c0e1-9c86-430f-8d94-293724658e3f.jpg
' alt="" />
            </div>
            <div>
              <img src='  https://d32baadbbpueqt.cloudfront.net/Homepage/0e92b87a-f7d0-4b9b-955f-69d072926812.jpg
' alt="" />
            </div>
            <div>
              <img src='  https://d32baadbbpueqt.cloudfront.net/Homepage/de7f55a1-a84b-4690-8f11-1dddc2518964.jpg
' alt="" />
            </div>
          
          </Slider>


{/* BEST SELLERS */}
        <div className={styles.bestsellers}>
        <h1 className={styles.headings}> BEST SELLERS</h1>
          <Slider {...settings2} className={styles.bestsellersSlider} >
           
             { bestsellerImages.map((image)=> 

<ProductBox rating={4.2} id={uuidv4()} url={image.url} description={image.description} price={image.price} key={image.id}/>
           
         )}
          </Slider>
          <div className={styles.headingspace}></div>
        </div>
{/* HOT DEALS */}
        <div className={styles.hotdeals}>
          <h1 className={styles.headings2}>HOT DEALS</h1>
          <Slider {...settings3} className={styles.hotdealsSlider}>
             { hotdeals.map((image)=> 
             <div ><img  src={image} alt="img"/></div>
         )}
          </Slider>
        </div>

{/* JUST IN */}

        <div className={styles.justin}>
        <h1 className={styles.headings2} style={{color:"white"}}>JUST IN</h1>
        <Slider {...settings2} className={styles.justinSlider}>
           
           { justinImages.map((image)=> 

       <ProductBox rating={4.4} url={image.url} description={image.description} price={image.price}/>

       )}
        </Slider>
        </div>

        {/* SUGAR HAI */}
        <div className={styles.sugarhain}>
        <h1 className={styles.headings2} style={{textShadow : "2px 2px 3px black"}} >SHUKAR HAI SUGAR HAI</h1>
        
<AspectRatio  ratio={2.68} w='93%'m='auto' borderRadius='20px' position='relative'  className={styles.video1 }>
     
  <iframe 
   
    title="SUGAR's New TV Commercial"
    src='https://www.youtube.com/embed/ZNPEgRIEkBY'
    allowFullScreen
  />
</AspectRatio>
<AspectRatio  ratio={1.5} w='93%'m='auto' borderRadius='20px' position='relative'  className={styles.video2}>
     
  <iframe
   
    title="SUGAR's New TV Commercial"
    src='https://www.youtube.com/embed/ZNPEgRIEkBY'
    allowFullScreen
  />
</AspectRatio>
{/*         <iframe width="100%" height="" src="https://www.youtube.com/embed/ZNPEgRIEkBY" title="SUGAR's New TV Commercial ft. Ranveer & Tamannaah | In Hindi | #ShukarHaiSUGARHai | SUGAR Cosmetics" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */}        </div>

{/* TOP PICKS OF THE WEEK */}
        <div className={styles.hotdeals}>
          <h1 className={styles.headings2}>TOP PICKS OF THE WEEK</h1>
          <Slider {...settings3} className={styles.hotdealsSlider}>
             { toppicks.map((image)=> 
             <div ><img  src={image} alt="img"/></div>
         )}
          </Slider>
        </div>


        {/* GIFTING */}

        <div className={styles.justin}>
        <h1 className={styles.headings2}  style={{color:"white"}}>GIFTING</h1>
        <Slider {...settings2} className={styles.justinSlider}>
           
           { giftingImages.map((image)=> 
          <ProductBox rating={4.7} url={image.url} description={image.description} price={image.price}/>
       )}
        </Slider>
        </div>


{/* REFER YOUR FRIENDS */}
<h1 className={styles.headings2}>REFER YOUR FRIENDS</h1>
<img className={styles.ref1} style={{ margin: "20px auto", borderRadius: "10px",width:"92%"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/8bfe8bb4-002d-4097-a773-6af33325a594.jpg" alt="" />
<img className={styles.ref2} style={{ margin: "20px auto", borderRadius: "10px",width:"92%"}} src="https://d32baadbbpueqt.cloudfront.net/Homepage/bb653d1c-a68d-4272-a5ca-832fc3009ff5.jpg" alt="" />
{/* SUPER SAVERS */}
<div className={styles.supersavers}>
        <h1 className={styles.headings}>SUPER SAVERS</h1>
          <Slider {...settings2} className={styles.bestsellersSlider} >
           
             { supersaverImages.map((image)=> 
             <ProductBox rating={4.2}url={image.url} description={image.description} price={image.price}/>
         )}
          </Slider>
          <div className={styles.headingspace}></div>
        </div>

        {/* NEW LAUNCHES */}
        <h1 className={styles.headings2}>NEW LAUNCHES</h1>
        <Slider {...settings1}  className={styles.newlaunches} >
       
        {newlaunchesImages.map((image)=>
          <img  src={image} alt=""  />
        )}
          </Slider>
          <Slider {...settings1}  className={styles.newlaunches2} >
       
        {newlaunchesImages2.map((image)=>
          <img  src={image} alt=""  />
        )}
          </Slider>

          {/* SUGAR STREAM */}

          <div className={styles.justin}>
        <h1 className={styles.headings2}  style={{color:"white"}} >SUGAR STREAM</h1>
        <Slider {...settings4} className={styles.justinSlider}>
           
           { videoLinks.map((image)=> 
       
              
<AspectRatio maxW='90%'   ratio={452/800} borderRadius='20px' position='relative' overflow='hidden'  >
  <iframe
   
   border-radius= '20px'
    title='sugar stream'
    src={image}
    allowFullScreen
  />
</AspectRatio>
       )}
        </Slider>
        </div>

{/* THIS OR THAT */}

<h1 className={styles.headings2}> THIS OR THAT</h1>
<div className={styles.tot}>
  <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/d1b038a4-418a-4309-92b1-9aff3b4393ea.jpg" alt="" />
  <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/984514b9-81c3-4e2a-922e-7b18f42ef77f.jpg" alt="" />
</div>


{/* explore
 */}

<div className={styles.hotdeals}>
          <h1 className={styles.headings2}>EXPLORE</h1>
          <Slider {...settings2} className={styles.hotdealsSlider}>
             { exploreImages.map((image)=> 
             <div ><img  src={image} alt="img"/></div>
         )}
          </Slider>
        </div>
      </div>
 
      



  }

