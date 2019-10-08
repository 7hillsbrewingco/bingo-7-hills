import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import B from "../components/B/b"
import I from "../components/I/i"
import N from "../components/N/n"
import G from "../components/G/g"
import O from "../components/O/o"
import B3 from "../components/b/b3"
import I17 from "../components/I/i17"
import N33 from "../components/N/n33"
import G46 from "../components/G/g46"
import O65 from "../components/O/o65"
import B6 from "../components/b/b6"
import I20 from "../components/I/i20"
import N35 from "../components/N/n35"
import G50 from "../components/G/g50"
import O66 from "../components/O/o66"
import B9 from "../components/b/b9"
import I24 from "../components/I/i24"
import G53 from "../components/G/g53"
import O71 from "../components/O/o71"
import B13 from "../components/b/b13"
import I27 from "../components/I/i27"
import N40 from "../components/N/n40"
import G56 from "../components/G/g56"
import O73 from "../components/O/o73"
import B15 from "../components/b/b15"
import I28 from "../components/I/i28"
import N45 from "../components/N/n45"
import G59 from "../components/G/g59"
import O74 from "../components/O/o74"

class Button extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <section className="text-center pb-5">
            <div className="row py-5">
              <div className="col">
                <h1>How to Win this Round</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <B />
                <I />
                <N />
                <G />
                <O />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <B3 />
                <I17 />
                <N33 />
                <G46 />
                <O65 />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <B6 />
                <I20 />
                <N35 />
                <G50 />
                <O66 />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <B9 />
                <I24 />
                <button className="letterDisplay">FREE</button>
                <G53 />
                <O71 />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <B13 />
                <I27 />
                <N40 />
                <G56 />
                <O73 />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <B15 />
                <I28 />
                <N45 />
                <G59 />
                <O74 />
              </div>
            </div>
            <div className="row">
              <div className="col">
               <Link to="/">To Bingo Play Marker</Link>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Button
