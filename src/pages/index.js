import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import * as styles from "../components/index.module.css"
import Card from "../components/card/card"

const IndexPage = () => (
  <Layout>
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
    <div className='contenedor-card'>
      <Card
      title='Amadeo'
      description='Amadeo es guay'
    ></Card>
      <Card 
      title='Amadeo'
      footphoto='se rasca un pie'
      image='https://placehold.co/600x400/000000/FFF'
      description='Amadeo es guay'
    ></Card>
      
      <Card
      title='Amadeo'
      footphoto='se rasca un pie'
      image='https://placehold.co/600x400'
      description='Amadeo es guay'
    ></Card>

    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Inicio" />

export default IndexPage
