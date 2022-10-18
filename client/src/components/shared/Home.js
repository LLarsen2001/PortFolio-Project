import React from "react"
import BackGround from "../../Imgstyle/Desktop.png"
import Logo from "../../Imgstyle/Logo.png"

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', }}>
            <img src={BackGround} style={{ width: "auto", height: "auto" }} />
            <footer style={{ background: '#202430', display: 'flex', flexDirection: 'row', }}>
                <div style={{
                    display: "block",
                    marginLeft: '3rem',
                    marginRight: "auto",
                    fontWeight: '400',
                    color: '#D6DDEB',
                }}>
                    <h4><img src={Logo} style={{ width: '1.5rem', marginTop: '-5px' }} />JobSeek</h4>
                    <p5>Great platform for the job seeker<br />
                        that passionate about startups.<br />
                        Find your dream job easier.</p5>
                </div>
                <div style={{
                    display: "block", marginLeft: "auto", marginRight: "70rem", fontWeight: '400',
                    color: '#D6DDEB',
                }}>
                    <h4>Contributors</h4>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/lancelarsen2001/">Lance Larsen</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/colby-patterson/">Colby Patterson</a>
                    </li>
                </div>
            </footer >
        </div >
    )
}
export default Home