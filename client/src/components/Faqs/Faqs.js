import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Media } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Workflow from "../Workflow/Workflow.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const customstyle = {
  color: "black",
  fontFamily: "Joti one",
}
function Faqs()
{
    return(
    <div className="container">
      <div>
        <Workflow />
      </div>
    </div>
    //   <br />
    //   <hr />
    //   <h1 style={{ fontFamily: "Joti one", color: "black" }}>
    //     <center>Frequently asked Questions</center>
    //   </h1>
    //   <br />
    //   <br />
    //   <div>
    //     <Accordion >
    //       <Card>
    //         <Card.Header>
    //           <Accordion.Toggle as={Button} variant="link" eventKey="0">
    //             <center>
    //               What are the  items that we take for recycling?
    //             </center>
    //           </Accordion.Toggle>
    //         </Card.Header>
    //         <Accordion.Collapse eventKey="0">
    //           <Card.Body>
    //             <p>1. AC</p>
    //             <p>2. TV Appliances</p>
    //             <p>3. Computers</p>
    //             <p>4. Laptops and tablets</p>
    //             <p>5. Fridge</p>
    //             <p>6. Mobile Phones</p>
    //             <p>7. Washing Machine</p>
    //             <p>8. Stereo System and Home Entertainment</p>
    //             <p>9. E-Toys</p>
    //             <p>10. Kettles</p>
    //             <p>11. Toasters</p>
    //             <p>12. Heat Pumps</p>
    //             <p>13. Lamp</p>
    //             <p>14. Electric Stoves</p>
    //             <p>15. Printers</p>
    //             <p>16. MicroWave</p>
    //             <p>17. Video Camera</p>
    //             <p>18. Vaccum Cleaner</p>
    //             <p>19. Grillers</p>
    //             <p>20. Air fryers</p>
    //           </Card.Body>
    //         </Accordion.Collapse>
    //       </Card>
    //       <br />
    //       <Card>
    //         <Card.Header>
    //           <Accordion.Toggle as={Button} variant="link" eventKey="1">
    //             <center>How does recycling work?</center>
    //           </Accordion.Toggle>
    //         </Card.Header>
    //         <Accordion.Collapse eventKey="1">
    //           <Card.Body>
    //             <p>
    //               There are three parts to the recycling process: collection,
    //               manufacturing and buying
    //             </p>
    //             <p>Collection - Don't Send Recyclables To The Landfill</p>
    //             <p>
    //               In first phase, dry materials are separated from the wet waste
    //               and sorted to become raw materials.
    //             </p>
    //             <p>
    //               Manufacturing - Using recovered Materials for recycling
    //               instead of Virgin product as Raw Materials by sorting as
    //               stated above.
    //             </p>
    //             <p>
    //               Buying - "Close The Loop" By Buying Products With Recycled
    //               Content
    //             </p>
    //             <p>
    //               In order to make recycling economically viable, people should
    //               buy recycled products, companies will be encouraged to make
    //               them, and the whole system works.
    //             </p>
    //           </Card.Body>
    //         </Accordion.Collapse>
    //       </Card>

    //       <Card>
    //         <Card.Header>
    //           <Accordion.Toggle as={Button} variant="link" eventKey="2">
    //             <center>
    //               Is recycling truly beneficial for the environment?
    //             </center>
    //           </Accordion.Toggle>
    //         </Card.Header>
    //         <Accordion.Collapse eventKey="2">
    //           <Card.Body>
    //             <p>
    //               Recycling conserves energy and natural resources. It is a
    //               small step towards the greater good. By recycling, we aim to
    //               bring about sustainability. It is the answer to a lot of
    //               ongoing environmental concerns. For e.g., As recycling saves
    //               energy it also reduces greenhouse gas emissions, which helps
    //               to tackle climate change.
    //             </p>
    //           </Card.Body>
    //         </Accordion.Collapse>
    //       </Card>
    //       <br />

    //       <Card>
    //         <Card.Header>
    //           <Accordion.Toggle as={Button} variant="link" eventKey="3">
    //             <center>Why do we have to sort our recyclables?</center>
    //           </Accordion.Toggle>
    //         </Card.Header>
    //         <Accordion.Collapse eventKey="3">
    //           <Card.Body>
    //             <p>
    //               Mixing different dry recyclables or contaminating them with
    //               wet waste or garbage makes it more difficult to prepare them
    //               as raw material for production. People should sort material
    //               into cardboard, paper, plastics, and metals etc to make it
    //               more economical to use as raw material for industries.
    //             </p>
    //           </Card.Body>
    //         </Accordion.Collapse>
    //       </Card>
    //       <br />

         
    //       <br />
    //     </Accordion>
    //   </div>
    // </div>



  );
}
export default Faqs;