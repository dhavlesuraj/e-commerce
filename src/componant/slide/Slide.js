 import React from 'react'
 import SlideImg1 from "../images/D75949617_INWLD_Redmi_12C-Launch_tallhero_3000x1200._CB592296537_.jpg"
 import Slide2 from "../images/6reasons_3000x1200._CB629776043_.jpg"
 import slide3 from "../images/Lights_DHero_3000x1200._CB590402685_.jpg"
// import './Slides.css'

// const Slide = () => {
//   return (
//     <div style={{ marginTop: "60px" }}>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <div style={{ height: 200, width: 50 }}>
//           <i
//             class="fa-solid fa-angle-left"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           ></i>
//         </div>
//         <img src={SlideImg1} alt="" />
//         {/* <img src={Slide2} alt=''/> */}
//         <div style={{ height: 200, width: 50 }}>
//           <i
//             class="fa-solid fa-angle-right "
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//             onClick={()=>alert("clicked")}
//           ></i>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Slide


import Carousel from "react-bootstrap/Carousel";

function Slide() {
  return (
    <Carousel style={{marginTop:60}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;