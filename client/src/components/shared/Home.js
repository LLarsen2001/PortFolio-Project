import React from "react"
import BackGround from "../../Imgstyle/Desktop.png"

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

                    <h4>JobHuntly</h4>
                    <p5>Great platform for the job seeker<br />
                        that passionate about startups.<br />
                        Find your dream job easier.</p5>
                </div>
                <div style={{
                    display: "block", marginLeft: "10rem", marginRight: "10rem", fontWeight: '400',
                    color: '#D6DDEB',

                }}>
                    <h4>About</h4>
                    <p5>Team</p5>
                </div>
                <div style={{
                    display: "block", fontWeight: '400', marginRight: "55rem",
                    color: '#D6DDEB',

                }}>
                    <h4>Resources</h4>
                    <p5>Contact Us</p5>
                </div>
            </footer >
        </div >
    )
}
export default Home