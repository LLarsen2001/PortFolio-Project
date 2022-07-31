import React from "react"
import BackGround from "../../Imgstyle/Desktop.png"

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', }}>
            <img src={BackGround} style={{ width: "100rem", height: "45rem" }} />
            <footer style={{ background: 'black', display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: "flex", flexDirection: 'column', marginLeft: '.5rem', marginRight: "auto", }}>

                    <h4>JobHuntly</h4>
                    <p5>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p5>
                </div>
                <div style={{ display: "flex", flexDirection: 'column', marginLeft: "auto", marginRight: "auto" }}>
                    <h4>About</h4>
                    <p5>Team</p5>
                </div>
                <div style={{ display: "flex", flexDirection: 'column' }}>
                    <h4>Resources</h4>
                    <p5>Conteact Us</p5>
                </div>
            </footer>
        </div>
    )
}
export default Home