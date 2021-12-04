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
    <MDBCarousel showControls showIndicators dark fade style={{width: '90%', margin: 'auto'}}>
      <MDBCarouselInner>
        <MDBCarouselItem className='active' >
          <MDBCarouselElement src='/galeria_1.jpg' alt='...' />
          <MDBCarouselCaption>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem >
          <MDBCarouselElement src='/galeria_2.jpg' alt='...' />
          <MDBCarouselCaption>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='/galeria_3.jpg' alt='...' />
          <MDBCarouselCaption>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}