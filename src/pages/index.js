import React from "react";
import { Link } from "gatsby";


import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {

  return (
      <Layout>
      <Head title="Home"/>
      
      <section className="wrapper">
        <div className="container">
            <div id="scene" className="scene" data-hover-only="false">
                <div className="circle" data-depth="1.2"></div>
                <div className="one" data-depth="0.9">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <div className="two" data-depth="0.60">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <div className="three" data-depth="0.40">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <p className="msg" data-depth="0.50">Welcome</p>
                <p className="msg" data-depth="0.10">Welcome</p>

              </div>

              <div className="text">
                  <article>
                      <p>This site was built using Gatsby. <br/>It includes blogposts created from markdown files and Contentful CMS.</p>
                      <button><Link to="/blog">Show Me!</Link></button>
                  </article>
              </div>

            </div>
        </section>

      </Layout>
  )
}
export default IndexPage
