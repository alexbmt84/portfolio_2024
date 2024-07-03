import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <div className={"about-text"}>
                        <p style={{textAlign: "center"}} className={"about"}>
                            Hi Everyone, I am <span className="purple">Alexis Beaumont </span>
                            from <span className="purple"> Avignon, France.</span>
                            <br/>
                            I am currently employed as a software developer at Glanum.
                            <br/>
                            I have been pursuing studies in software development and am currently enrolled in a Master
                            of Science
                            (MSc) program in Cybersecurity.
                            <br/>
                        </p>
                        <p style={{color: "rgb(155 126 172)"}}  >
                            “The weakest link in the security chain is the human element.”{" "}
                        </p>
                    </div>
                    <footer className="blockquote-footer">Kevin Mitnick</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
