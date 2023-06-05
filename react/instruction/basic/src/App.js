import React from 'react';
import Apples,{Orange,Bananas1} from './components/01-my-house';
import Jsx1 from './components/02-jsx/01-jsx';
import Jsx2 from './components/02-jsx/02-jsx';
import Jsx3 from './components/02-jsx/03-jsx';
import SassScss from './components/03-styles/05-sass-scss';
import DijitalSaatUygulamasi1 from './components/04-digital-saat-uygulamasi1/dijital-saat-uygulamasi1';
import Greetings from './components/05-props/01-greetings';
import Products from './components/05-props/05-products';
import DijitalSaatUygulamasi2 from './components/06-digital-saat-uygulamasi2/dijital-saat-uygulamasi2';
import Image from './components/07-images/01-images';
import ImageGallery from './components/07-images/02-image-galery';
import ProfileCard from './components/08-profile-card/profile-card';
export default function App() {
    return (
        <>
            <Apples />
            <Orange />
            <Bananas1/>
            <Jsx1/>
            <Jsx2/>
            <Jsx3/>
            <br/>
         <SassScss/>  
         <br/>
         <DijitalSaatUygulamasi1 />  
         <br/>
         <Greetings/> 
         <br/>
        
         
         <Products/>
         <br/>
         <br/>
         <br/>
<DijitalSaatUygulamasi2 textColor="white" bgColor="red"/>
        <br/>
        <Image/>
        <br/>
        <ImageGallery/>
        <br/>
        <ProfileCard/>
        </>
    )
};