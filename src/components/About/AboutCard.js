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
                            from <span className="purple"> Aix-en-Provence, France.</span>
                            <br/>
                            Currently working as a Cybersecurity & Infrastructure Engineer at AMX1,
                            <br/>
                            while completing a Master of Science (MSc) in Cybersecurity, 
                            with a strong focus on securing systems, deploying SIEM solutions, 
                            and managing Linux-based infrastructures.
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
