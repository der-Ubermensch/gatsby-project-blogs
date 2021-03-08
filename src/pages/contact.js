import React from "react";
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Layout from "../components/layout";
import Head from "../components/head";
import ControlledAccordions from "../components/accordion.jsx";


const ContactPage = () => {
    const useStyles = {
        margin: "0 auto",
        maxWidth: "750px",
        padding: "1rem",
        color: "#fff"
}
    return (
        <Layout >
        <Head title="Contact"/>
        <div style={useStyles}>
            <h1>Contact Us</h1>
            <ul style={{margin: '2.5rem 0'}}>
                <CallIcon/><li> Phone: +00 12 34 9876</li>
                <EmailIcon /><li>Email: sample@master.com</li>
                <LocationOnIcon /><li>Address: That St. Porters Lake, NS B3E 1H4, Canadium
                </li>
            </ul>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
            <h2>FAQ</h2>
            <ControlledAccordions />
        </div>
        </div>

        </Layout>
    )
}

export default ContactPage