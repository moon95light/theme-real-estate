import React from "react";

import { Row, Col, Card } from "react-bootstrap";
import {
   Sparklines,
   SparklinesLine,
   SparklinesBars,
   SparklinesSpots,
   SparklinesReferenceLine,
} from "react-sparklines";

import PageTitle from "../../../layouts/PageTitle";

const sampleData = [
   64,
   24,
   40,
   76,
   19,
   0,
   2,
   46,
   65,
   12,
   10,
   6,
   15,
   57,
   35,
   81,
   86,
   12,
   12,
   21,
   53,
   44,
   2,
   1,
   58,
   9,
   61,
   64,
   42,
   92,
   58,
   9,
   34,
   47,
   89,
   52,
   3,
   69,
   33,
   2,
   60,
   71,
   71,
   22,
   65,
   70,
   31,
   81,
   36,
   89,
];

function ChartSparkline() {
   return (
      <>
         <PageTitle motherMenu="Charts" activeMenu="Sparkline" />
         <Row>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Simple</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Sparklines data={sampleData}>
                        <SparklinesLine color="#3b4cb8" />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Simple Curve</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Sparklines data={sampleData}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="mean" />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Spots</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Sparklines data={sampleData}>
                        <SparklinesLine style={{ fill: "none" }} />
                        <SparklinesSpots />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Spots</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Sparklines data={sampleData}>
                        <SparklinesLine color="#3b4cb8" />
                        <SparklinesSpots style={{ fill: "#3b4cb8" }} />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Spots</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Sparklines data={sampleData} margin={6}>
                        <SparklinesLine
                           style={{
                              strokeWidth: 3,
                              stroke: "#3b4cb8",
                              fill: "none",
                           }}
                        />
                        <SparklinesSpots
                           size={4}
                           style={{
                              stroke: "#3b4cb8",
                              strokeWidth: 3,
                              fill: "white",
                           }}
                        />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bars</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Sparklines
                        data={[
                           20,
                           30,
                           30,
                           42,
                           43,
                           20,
                           21,
                           32,
                           30,
                           43,
                           23,
                           30,
                           65,
                           43,
                           30,
                           24,
                           54,
                        ]}
                     >
                        <SparklinesBars style={{ fill: "#3b4cb8" }} />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </>
   );
}

export default ChartSparkline;
