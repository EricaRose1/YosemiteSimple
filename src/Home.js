import React from 'react';
import front from './images/frontHalfdome.png'
import background from './images/skyHalfdome.png';
import middle from './images/middlehalfdome.png';
import img1 from './images/waterslide.jpg';

import './Home.css';


function Home() {
    return (
        <div className='wrapper'>
            <header>
                <h1 className='title'>Yosemite National Park</h1>
                <img src={background} className='bkground'/>
                <img src={middle} className='middle'/>
                <img src={front} className='front'/> 
            </header>
            <section>
            <div className='factsPar1'>
                <p>An interesting fact about the Native American presence in the Yosemite region is that it has a long 
                history of habitation and cultural significance. The Yosemite Valley was originally inhabited by the
                indigenous people of the Ahwahneechee tribe, who called the area "Ahwahnee" or "Yohhe'meti," which 
                is believed to be the origin of the name "Yosemite." </p>
                <img src='https://nedagoeg321.files.wordpress.com/2014/05/salish-men-tipis-1903.jpg'/>
            </div>
            <div className='factsPar2'>
                <img src='https://www.nps.gov/yose/learn/historyculture/images/callipeneandlenabrown1901web2.jpg?maxwidth=1300&maxheight=1300&autorotate=false'/>
                <p>The Ahwahneechee and other native tribes, such as the Miwok and Paiute, had a deep connection with the 
                land and its resources for thousands of years before the arrival of European settlers. They had a rich
                cultural heritage and a profound understanding of the natural environment in the Yosemite area. Their 
                way of life was intimately tied to the land, and they had a wealth of knowledge about the plants, animals, 
                and ecosystems of the region.</p>
                
            </div>
            <div className='factsPar3'>
                <p>Yosemite National Park now acknowledges and respects the historical and cultural significance of the native 
                tribes in the area and collaborates with them on various preservation and educational initiatives. Learning 
                about the indigenous history and culture of the Yosemite region is an important aspect of appreciating the 
                park's heritage and natural beauty.</p>
                <img src='https://www.nps.gov/yose/learn/historyculture/images/1394073_708337480371_1709923948192587864_n-web_1.jpg' className='waterslide' />
            </div>
            
            </section>
        </div>
        
    )
}

export default Home;