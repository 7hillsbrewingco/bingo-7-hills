import React from "react"
import Layout from "../components/layout"
import Brow from "../components/B/allBrow"
import Irow from "../components/I/allIrow"
import Grow from "../components/G/allGrow"
import Nrow from "../components/N/allNrow"
import Orow from "../components/O/allOrow"

class Button extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <section className="text-center pb-5">
            <div className="row py-5">
              <div className="col">
                <h1>7 Hills Brewing Beer Bingo</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Brow />
                <Irow />
                <Nrow />
                <Grow />
                <Orow />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Button
