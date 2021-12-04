import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showControls showIndicators dark fade className="Carusel_popup" style={{width: '90%', margin: 'auto'}}>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://th.bing.com/th/id/R.408af1fd8a02947842e13a61c60854c9?rik=EBZ6%2fd1CtPjYxQ&pid=ImgRaw&r=0' alt='...' style={{height: '200px'}} />
          <MDBCarouselCaption>
            <h5>Sala</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem >
          <MDBCarouselElement src='https://www.belarru.com.co/images/apartment_photos/28_67_sanmartinapartamento134m1603110000.jpg' alt='...' style={{height: '200px'}}/>
          <MDBCarouselCaption>
            <h5>Principal</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://www.camposdegolf.pro/fotos/hoteles/apartamentos-talaimendi5.jpg' alt='...' style={{height: '200px'}}/>
          <MDBCarouselCaption>
            <h5>Comedor</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://th.bing.com/th/id/OIP.PgzjLs3F3Hf9hKcRGBLgoQHaE7?pid=ImgDet&rs=1' alt='...' style={{height: '200px'}}/>
          <MDBCarouselCaption>
            <h5>Tereza</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://res.cloudinary.com/lastminute/image/upload/c_scale,w_630/q_auto/v1558553379/wu0c09mwpzgb8bpr6ynu.jpg' alt='...' style={{height: '200px'}}/>
          <MDBCarouselCaption>
            <h5>Patio</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://i.pinimg.com/originals/b8/79/d3/b879d362f9180cc6e6d3292631f81005.jpg' alt='...' style={{height: '200px'}}/>
          <MDBCarouselCaption>
            <h5>Corredor</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}