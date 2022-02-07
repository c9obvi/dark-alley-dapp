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
    evenColumns: {
        display: "flex",
        
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
            <iframe title="Exolix widget" src="https://exolix.com/widget/ETH-BTC?&locale=en&t=iItvGsehMVWV9RRFiuu7ZoN2rvpv1p8jhNQPeAKM1Q0NGKPs8c7ALHqwu3VC" width="315px" height="268px" frameBorder="0" scrolling="no" display="block"
             justifyContent= "center"></iframe>
            </p>
            <br/>
            <br/>
            <br/>
             {/* adding 3 box section */}
            <div class ="cexBox">
                <div class="even-columnsT">
                    <h1 class="exTitle">NO LIMIT</h1>
                    <h1 class="exTitle">NO KYC</h1>
                </div>
                    <div class="even-columns">
                        <div class="coll"> We do not have maximum limits, <br/>which allows everyone to exchange any amount of cryptocurrencies</div>
                        
                        <div class="coll"> We do not require to go through KYC process! <br/>Thus anyone can make an exchange without providing any personal data</div>
                    </div>
            <br/>
            <br/>
            </div>
            
      </Container>

      <br/>
  </div>;
};

export default Footer;
