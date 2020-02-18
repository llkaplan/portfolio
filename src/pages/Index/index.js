import React, { Component } from "react";

{/* <img className="img-responsive" src="../../public/assets/image/img/footer-logo.jpg" alt="logo"/> */}

class Index extends Component {
    render() {
        return (
            <div>
                <h1>About Me</h1>

                <div className="imgAndTxt">
                    <img className="left" alt="My face-Leyla Kaplan's" src={require("../../links/me.jpeg")} /> <p>
                        My name is Leyla and I've been working as a designer for about three years now. I've done
                        brochures,
                        flyer, user interfaces and motion graphics: all those experiences have helped develop me as a
                        visual
                        designers. My work bellow includes a combination of collaborations, commissions and side
                        projects.
                        For over two years I've been focusing more on visual design.
                    </p>
                </div>
            </div>

        )
    }
}

export default Index;

