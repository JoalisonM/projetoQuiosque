import React from 'react';
import ImageGallery from 'react-image-gallery';
import  "react-image-gallery/styles/css/image-gallery.css";
import Teste1 from '../../assets/TESTE.png';
import Teste2 from '../../assets/TESTE2.png';
import Teste3 from '../../assets/TESTE3.png';

const images = [
    {
      original: Teste1,
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: Teste2,
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: Teste3,
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  
export default class Slide extends React.Component{
    render(){
        return(
             <ImageGallery items={images} showBullets={true} 
            showNav={false}
            showFullscreenButton={false}
            showPlayButton={false} 
            showThumbnails={false} 
            autoPlay={true} 
            swipingTransitionDuration={200}
            stopPropagation={true}/> 
        );
    }
}