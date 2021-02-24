import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo.svg';
import PropTypes from 'prop-types';
import '../App.css';

// UI
import Drawer from '@material-ui/core/Drawer';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// COMPONENTS
import { Menu } from '../components/Menu';
import { NameCard } from '../components/NameCard'; 
import { InfoAccordian } from '../components/InfoAccordian'; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import creatorOne from '../images/Samhith_Kakarla_Profile_Pic.jpg'; 

// CONTEXT
import { WaterContext } from '../context/WaterContext';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#77B3D4',
      margin: 25,
      height: 670, 
    },
    paperTwo: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#114070',
        margin: 25,
        height: 670, 
    },
}));

export const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { getLocations } = useContext(WaterContext);

    useEffect(() => {
        getLocations(); 
    }, []);

    const classes = useStyles(); 

    return (
        <div className="home-page-container">
            <Drawer 
                anchor='left' 
                open={menuOpen} 
                onClose={() => setMenuOpen(false)}
                style={{ overflow: 'hidden' }}
            >
                <div>
                    <div className="row">
                        <MenuRoundedIcon
                            style={{ fontSize: 30, marginLeft: 15, marginTop: 10 }}
                            onClick={() => setMenuOpen(false)}
                        ></MenuRoundedIcon>
                    </div>
                    <div className="row">
                        <img src={logo} className="menu-logo" />
                        <h1 className="menu-header">PURIFY</h1>
                        <div className="menu-buttons-container">
                            <Link to="/" className="menu-buttons">HOME</Link>
                            <Link to="/map" className="menu-buttons">WATER MAP</Link>
                        </div>
                    </div>
                    <p 
                        className="menu-water-header"
                        style={{ textAlign: "center", marginTop: 40, fontSize: 14 }}
                    >
                        CA Water Data Challenge
                    </p>
                    <p 
                        className="menu-names"
                        style={{ textAlign: "center", margin: 15, fontSize: 14 }}
                    >
                        Ansh Motiani, Aditya Gupta, <br /> Samhith Kakarla
                    </p>
                </div>
            </Drawer>
            <MenuRoundedIcon 
                onClick={() => setMenuOpen(true)}
                style={{ fontSize: 50, marginLeft: 30, marginTop: 10 }}
            ></MenuRoundedIcon>
            <h1 className="home-header-tag">
                Native American communities in California have a 30% higher risk of poor water quality than non-native communities.
            </h1>
            <div style={{ marginLeft: 80 }}>
                <iframe 
                    id="igraph" 
                    scrolling="no" 
                    style={{ border: "none", marginRight: 100 }} 
                    seamless="seamless" 
                    src="https://plotly.com/~amotiani22/33.embed" 
                    height="300" width="750"
                    logo="false"
                    link="false"
                    modebar="false"
                >
                </iframe>
            </div>
            <Link to="/map" className="home-button">
                SEE INTERACTIVE MAP 
                <NavigateNextIcon
                    style={{ fontSize: 30, marginLeft: 15 }}
                />
            </Link>
            <section className="home-about-section">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paperTwo}>
                            <h1 
                                style={{ color: 'white', padding: 30, textAlign: 'left', fontSize: 15 }}
                                id="home-creators-header"
                            >
                                CLEAN WATER DISCRIMINATION: <br /> 
                                <h1 
                                    style={{ color: 'white', padding: 5, textAlign: 'left', fontSize: 25, marginBottom: -15 }}
                                    id="home-creators-header"
                                >
                                    The Native American Water Crisis
                                </h1>
                            </h1>
                            <InfoAccordian />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paperTwo}>
                            <h1 
                                style={{ color: 'white', padding: 30, textAlign: 'left', fontSize: 30 }}
                                id="home-creators-header"
                            >
                                CREATORS
                            </h1>
                            <div style={{ marginTop: -40 }}>
                                <NameCard 
                                    name="ANSH MOTIANI"
                                />
                                <NameCard
                                    name="ADITYA GUPTA"
                                />
                                <NameCard 
                                    picture={creatorOne} 
                                    name="SAMHITH KAKARLA"  
                                    school="Green Level High School"
                                    role="WEB DEVELOPER"
                                />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </section>
            <section className="home-about-team-section">

            </section>
            <footer className="home-page-footer">

            </footer>
        </div>
    )
}
