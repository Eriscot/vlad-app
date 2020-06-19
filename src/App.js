import React from 'react';
import './App.css';
import MainPage from "./containers/MainPage";
import {Container} from "react-bootstrap";

const App = () => {
    return (
        <Container fluid>
            <MainPage />
        </Container>

    );
}

export default App;
