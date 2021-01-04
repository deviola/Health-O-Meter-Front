import React from "react";
import Grid from '@material-ui/core/Grid';

import Navbar from "../../../Navbar/Navbar";
import LoginForm from "./LoginForm";
import Footer from "../../../Footer/Footer";
import LoginSvg from "./LoginSvg.svg";

import "./LoginPage.scss";
/*Page going to be modified, adapted for real signing up process */

const LoginPage = () => {
    return (
        <React.Fragment>
            <Navbar navMenuBtn1="Strona Główna" linkTo1="/" navMenuBtn2="Utwórz konto" linkTo2="/signup"></Navbar>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center">
                <img className="Login-svg" src={LoginSvg} alt="Login"></img>
                <LoginForm />
            </Grid>
            <Footer />
        </React.Fragment>
    )
}

export default LoginPage;