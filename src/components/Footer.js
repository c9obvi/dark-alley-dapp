import { Container, makeStyles, Typography } from '@material-ui/core';
import { findByLabelText } from '@testing-library/react';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles(() => ({
    banner:{
        backgroundImage: "url(./banner3.jpg)",
        backgroundPosition: "center"
    },
    bannerContent: {
        height: 300,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
        alignItems: "center"

    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
}));

const Footer = () => {

  const classes = useStyles()
    
  return <div className={classes.footer}>
      <Container className={classes.footerContent}>
            <div className={classes.tagline}>
                <Typography 
                    variant='h3'
                    style={{
                        fontWeight: "bold",
                        marginBottom: 15,
                        fontFamily: "Montserrat",
                    }}> 
                        DARK ALLEY
                </Typography>
                {/* <Typography 
                    variant='subtitle2'
                    style={{
                        color: "white",
                        fontWeight: "light",
                        marginBottom: 15,
                        fontFamily: "Montserrat",
                    }}> 
                        All of your degeneracies in one place
                </Typography> */}
            </div>
            <Typography 
                    variant='subtitle2'
                    style={{
                        textAlign: "center",
                        color: "white",
                        fontWeight: "light",
                        marginBottom: 15,
                        fontFamily: "Montserrat",
                    }}> 
                    <section id="exolix"/>
                    <HashRouter basename="/#exolix" />
                        NON-KYC Exchange Partner!
                </Typography>

            <p align="center">
            <iframe title="Exolix widget" src="https://exolix.com/widget/BTC-WBTC?a=1&locale=en&t=iItvGsehMVWV9RRFiuu7ZoN2rvpv1p8jhNQPeAKM1Q0NGKPs8c7ALHqwu3VC" width="560px" height="376px" frameBorder="0" scrolling="no" display="block"
             justifyContent= "center"></iframe>
            </p>
            <br/>
            <br/>
      </Container>
  </div>;
};

export default Footer;
