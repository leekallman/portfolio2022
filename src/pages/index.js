import * as React from "react"
import App from "./app";
import Seo from "../components/seo"
import Layout from "../components/layout"
import MouseContextProvider from "../context/mouse-context";


const IndexPage = () => (
  <Layout>
    <MouseContextProvider>
      <Seo title="Home" />
      <App />
    </MouseContextProvider>
  </Layout>
)

export default IndexPage
