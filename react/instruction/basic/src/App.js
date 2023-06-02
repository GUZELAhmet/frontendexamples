import React from 'react';
import Apples,{Orange,Bananas1} from './components/01-my-house';
import Jsx1 from './components/02-jsx/01-jsx';
import Jsx2 from './components/02-jsx/02-jsx';
import Jsx3 from './components/02-jsx/03-jsx';
import SassScss from './components/03-styles/05-sass-scss';
import DijitalSaatUygulamasi1 from './components/04-digital-saat-uygulamasi1/dijital-saat-uygulamasi1';
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
        </>
    )
};