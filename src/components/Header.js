import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "magenta",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    }
}))

const Header = () => {

    const classes = useStyles();

    const history = useHistory();

    const { currency, setCurrency } = CryptoState();

    console.log(currency);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });

    return( 
        <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container >
                <Toolbar>
                    <Typography 
                    onClick={() => history.push('/')}
                    className={classes.title}
                    variant='h4'
                    style={{
                        marginTop: 25,
                        marginBottom: 15,
                        fontFamily: "Montserrat",
                    }}>
                    Dark Alley
                    </Typography>
                </Toolbar>

                <Select variant='outlined'
                        style={{
                            width: 100,
                            height: 40,
                            marginLeft: "80%",
                            marginTop: -15,
                }}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)} >
                    <MenuItem value={'USD'}>USD</MenuItem>
                    <MenuItem value={"CAD"}>CAD</MenuItem>
                </Select> 

            </Container>
        </AppBar>
        </ThemeProvider>
    )
};

export default Header;
