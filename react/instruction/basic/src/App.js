import React, { useState } from 'react';
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
import BootsrapKlasikYontem from './components/09-bootstrap/01-bootstrapt-klasik-yontem';
import BootstrapModernYontem from './components/09-bootstrap/02-bootstrap-modern-yontem';
import "./assets/scss/style.scss"
import ReactIcons from './components/10-icons/01-react-icons';
import MaterialIcons from './components/10-icons/02-material-icons';
import Events from './components/11-events/Events';
import ProductShop from './components/12-product-shop/Product-shop';
import State from './components/13-usestate/01-state';
import Counter1 from './components/14-counter1/counter1';
import BirthDay from './components/15-birthday/birthday';
import UseEffect from './components/16-useefffect/useEffect';
import { Button } from 'react-bootstrap';
import DijitalSaatUygulamasi3 from './components/17-digital-saat-uygulamasi3/dijital-saat-uygulamasi3';
import FilterList from './components/18-filter-list/filter-list';
import UseRef from './components/19-useRef/useRef';
import ClassTurundeCompenentler from './components/20-compenent-turleri/01-class-turunde-conpenentler';
import FonksiyonTurundeCompenentler from './components/20-compenent-turleri/02-fonksiyon-turunde-compenentler';
import Fetch from './components/21-fetch/01-fetch';


const profileCardData = {
    name: "Emir",
    location: "New York",
    image: "person4.jpg",
    statistics: [
        { title: "Likes", stat: 145 },
        { title: "Photos", stat: 7 },
        { title: "Following", stat: 329 },
    ]
};
export default function App() {
    const [show, setShow] = useState(true);

    return (
        <>
         {/*    <Apples />
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
        <ProfileCard
                name="Walker"
                location="Nashville, Tennesse"
                image="profile-card.jpg"
                statistics={[
                    { title: "Shot", stat: 2 },
                    { title: "Follower", stat: 234 },
                    { title: "Following", stat: 327 },
                ]}
            />
            <ProfileCard
                name="Kyle"
                location="London"
                image="profile.jpg"
                statistics={[
                    { title: "Likes", stat: 50 },
                    { title: "Photos", stat: 12 },
                    { title: "Following", stat: 10 },
                ]}
            />
           <br/>
            <ProfileCard {...profileCardData}/>
            <br/>
            <BootsrapKlasikYontem/>
            <br/>
            <BootstrapModernYontem/>
            <br/>
            <ReactIcons/>
            <br/>
            <MaterialIcons/>
            <br/>
            <Events/>
            <br/>
            <ProductShop/>
            <br/>
            <State/>
            <br/>
            <Counter1/>
            <br/>
            <BirthDay/>
            <br />
            <Button onClick={() => setShow(prev => !prev)}>
                use Effect Hook'unu Gizle
            </Button>
            {show && <UseEffect />}

            <br/>
            <DijitalSaatUygulamasi3/>
            <br/>
          <FilterList/>
          <br/>
          <UseRef/>
          <br/>
          {show && <ClassTurundeCompenentler />}
          <br/>
         {/* <FonksiyonTurundeCompenentler/>*/}
         <br/> 
         <Fetch/>

        </>
    )
};