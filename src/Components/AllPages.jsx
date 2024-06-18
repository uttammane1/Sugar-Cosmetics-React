import { Route, Routes } from "react-router-dom";
import Brushes from "../Pages/Brushes";
import Cart from "../Pages/Cart";
import Eyes from "../Pages/Eyes";
import Face from "../Pages/Face";
import Home from "../Pages/Home";
import Lips from "../Pages/Lips";
import Makeup from "../Pages/Makeup";
import Skincare from "../Pages/Skincare";
import Trending from "../Pages/Trending";
import MakeupIndividual from "./IndividualPages/MakeupIndividual";
import Search from "../Pages/Search";
import LipsIndividual from "./IndividualPages/LipsIndividual";
import Login from "../Pages/Login";
function AllPages
(){
    return <div>
        
       <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="/login"  element={<Login/>}></Route>
        <Route path="/cart"  element={<Cart/>}></Route>
        <Route path="/makeup"  element={<Makeup/>}></Route>
        
        <Route path="/brushes"  element={<Brushes/>}></Route>
        <Route path="/skincare"  element={<Skincare/>}></Route>
        <Route path="/trending"  element={<Trending/>}></Route>

        <Route path="/lips"  element={<Lips/>}></Route>
        <Route path="/eyes"  element={<Eyes/>}></Route>
        <Route path="/Face"  element={<Face/>}></Route>

        <Route path="/makeup/:id"  element={<MakeupIndividual/>}></Route>
        <Route path="/lipstick/:id"  element={<LipsIndividual/>}></Route>
        <Route path="/lip_gloss/:id"  element={<LipsIndividual/>}></Route> 
        <Route path="/Liquid /:id"  element={<LipsIndividual/>}></Route> 
        <Route path="/Lip stain/:id"  element={<LipsIndividual/>}></Route> 
        <Route path="/search/"  element={<Search/>}></Route>
       </Routes>

    </div>
}
export default AllPages;