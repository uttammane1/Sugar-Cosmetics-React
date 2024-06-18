import styles from './Header.module.css'
import { Link } from "react-router-dom";
function NavigationBottom
(){
    return <div>

<div className={styles.navbottom}>
      <div className={styles.div3}>
                <div className={styles.makeup}/*  style={{backgroundColor:'pink'}} */ >
                    {/* {<Link
                        to="/makeup"
                        style={{ fontSize: "14px"}}
                        id={styles.link}
                    >
                        Makeup
                    </Link> } */}
                    Makeup

                    <div className={styles.dropdown1} >
                        <Link to="/lips">LIPS</Link>
                        <Link to="/face">FACE</Link>
                        <Link to="/eyes">EYES</Link>
                    </div>
                </div>

                <div   className={styles.makeup}>
                    <Link
                        to="/brushes"
                        style={{ fontSize: "14px"}}
                        id={styles.link}
                    >
                        Brushes
                    </Link>
                    <div className={styles.dropdown1}>
                        <Link to="/facebrushes">FACE BRUSHES</Link>
                        <Link to="/eyebrushes">EYE BRUSHES</Link>
                    </div>
                </div>
                <div   className={styles.makeup}>
                    <Link
                        to="/skincare"
                        style={{ fontSize: "14px", /* fontFamily: "Quicksand" */ }}
                        id={styles.link}
                    >
                        Skincare
                    </Link>
                    <div className={styles.dropdown1}>
                        <Link to="/moisturisers">MOISTURISERS</Link>
                        <Link to="/masks">MASKS</Link>
                        <Link to="/settingmists">SETTING MISTS</Link>
                        <Link to="/coffeculturerange">COFFEE CULTURE RANGE</Link>
                        <Link to="/sheetmustcombo">SHEET MUSK COMBO</Link>
                        <Link to="/citrusgoatrealrange">CITRUS GOAT REAL RANGE</Link>
                        <Link to="/aquaholicrange">AQUAHOLIC RANGE</Link>
                    </div>
                </div>
                <div   className={styles.makeup}>
                    <Link
                        to="/trending"
                        style={{ fontSize: "14px", /* fontFamily: "Quicksand" */ }}
                        id={styles.link}
                    >
                        Trending
                    </Link>
                    <div className={styles.dropdown1}>
                        <Link to="/sugarmerchstation">SUGAR MERCH STATION</Link>
                        <Link to="/makeupkits">MAKE UP KITS</Link>
                        <Link to="/bestsellers">BESTSELLERS</Link>
                    </div>
                </div>

                

                <div >
                    {/* <Link
                        to="/blog"
                        style={{ fontSize: "14px",  }}
                        id={styles.link}
                    >
                        Blog
                    </Link> */}
                    <a href="https://in.sugarcosmetics.com/blog"  style={{ fontSize: "14px",  }}> Blog </a>
                </div>
                <div>
                    <Link
                        to="/offers"
                        style={{ fontSize: "14px", /* fontFamily: "Quicksand" */ }}
                        id={styles.link}
                    >
                        Offers
                    </Link>
                </div>
                <div>
                    <Link
                        to="/stores"
                        style={{ fontSize: "14px", /* fontFamily: "Quicksand" */ }}
                        id={styles.link}
                    >
                        Stores
                    </Link>
                </div>
                {/* <div>
                    <Link
                        to="/diwaligifting"
                        style={{ fontSize: "14px",  }}
                        id={styles.link}
                    >
                        Diwali Gifting
                    </Link>
                </div> */}
            </div>
    </div></div>
}
export default NavigationBottom

