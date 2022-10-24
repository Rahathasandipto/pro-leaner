import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import SideNav from '../../Pages/SideNav/SideNav';
import Header from './Header/Header';



const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Row>
                    <Col lg='2'>
                        <SideNav></SideNav>
                    </Col>


                    <Col lg='10'>

                        <Outlet></Outlet>

                    </Col>
                </Row>
            </Container>





            <Footer></Footer>





        </div>
    );
};

export default Main;