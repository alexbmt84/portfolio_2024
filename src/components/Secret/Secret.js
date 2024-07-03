import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import '../../secret.css';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Secret() {
    const [tokenValid, setTokenValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = Cookies.get("secret_token");
        if (storedToken) {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/verify-token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${storedToken}`
                },
                credentials: 'include'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.valid) {
                        setTokenValid(true);
                    } else {
                        navigate('/home');
                    }
                })
                .catch(() => {
                    navigate('/home');
                });
        } else {
            navigate('/home');
        }
    }, [navigate]);

    if (!tokenValid) {
        return null;
    }

    return (
        <Container fluid className="mx-auto snake-body">
            <Particle />
            <Container>
                <div className="wrapper">
                    <div className="game-details">
                        <span className="score">Score: 0</span>
                        <span className="high-score">High Score: 0</span>
                    </div>
                    <div className="play-board"></div>
                    <div className="controls">
                        <i data-key="ArrowLeft" className="fa-solid fa-arrow-left-long"></i>
                        <i data-key="ArrowUp" className="fa-solid fa-arrow-up-long"></i>
                        <i data-key="ArrowRight" className="fa-solid fa-arrow-right-long"></i>
                        <i data-key="ArrowDown" className="fa-solid fa-arrow-down-long"></i>
                    </div>
                </div>
            </Container>
        </Container>
    );
}

export default Secret;
