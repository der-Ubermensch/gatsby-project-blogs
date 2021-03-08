import React from 'react';

import Layout from "../components/layout";
import Head from "../components/head";
import aboutStyles from "./about.module.scss";



const AboutPage = () => {

    const team = [
       { 
        name: "Jane Doe",
        src: "./images/jane.jpg",
        title: "CEO & Founder",
        email: "jane@example.com"
        },

       { 
        name: "Mike Ross",
        src: "./images/mike.jpg",
        title: "Art Director",
        email: "mike@example.com"
        },

       { 
        name: "John Doe",
        src: "./images/john.jpg",
        title: "Designer",
        email: "john@example.com"
        },
    ]

    const teamMembers = team.map((member) => {
        const { name, src, email, title } = member;
        return(
                <div className={aboutStyles.column} key={name}>
                    <div className={aboutStyles.card}>
                        <img src={require(`${src}`)} alt={name} style={{width:'100%'}}/>
                        <div className={aboutStyles.containerTeam}>
                            <h2>{name}</h2>
                            <p className={aboutStyles.title}>{title}</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p style={{textStyle: "italic"}}>{email}</p>
                            <p><button className={aboutStyles.button}>Contact</button></p>
                        </div>
                    </div>
                </div>
            
        )
    })
    return (
        <Layout>
        <Head title="About"/>
        <div className={aboutStyles.container} >

            <div className={aboutStyles.aboutSection}>
                <div className={aboutStyles.circle1}></div>
                <div className={aboutStyles.circle2}></div>
                <h1>About Us</h1>
                <p>Some text about who we are and what we do.</p>
            </div>

            <h2>Here's some more about us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque voluptatibus animi obcaecati accusantium eius eum similique vitae omnis eaque?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nobis cupiditate adipisci perspiciatis natus suscipit, debitis sunt impedit excepturi, quod aliquid sequi eligendi. Dolores tempora nesciunt, corrupti dicta veritatis explicabo ut rem soluta laboriosam aliquam hic, minus asperiores sed? Facere eligendi maiores voluptas dolore mollitia at aspernatur ex dicta. Ipsum?</p>

            <h2 style={{textAlign:'center'}}>Our Team</h2>
            <div className={aboutStyles.row}>
                { teamMembers }
            </div>


        </div>
            
        </Layout>
    )
}

export default AboutPage