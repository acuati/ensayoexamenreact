import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const Contacto = () => (
  <Layout>
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
    <h1>Esta es la página de contacto</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
   
  </Layout>
  
)

export const Head = () => <Seo title="Contacto" />

export default Contacto
