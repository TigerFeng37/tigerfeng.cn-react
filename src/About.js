/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { EntypoGithubWithCircle, EntypoLinkedinWithCircle, EntypoMailWithCircle, EntypoInstagramWithCircle } from "react-entypo"

function About(props) {
    return (
        <div className="About">
            <div className="about-wrapper">
                <h1>Yicheng Feng</h1>
                <div className="about-description">
                    <p>Hey there! I am currently a student studying Communication Design at Parsons School of Design.
                        <br />Proficient in UI/UX design, photography, cinematography, and post-production, along with some front-end development and 3D modeling experience.</p>
                </div>
                <div style={{ fontSize: '3em' }}>
                    <a href="mailto:yicheng@tigerfeng.cn" sx={{ textDecoration: 'none', color: 'accent', marginRight: '.25em' }}><EntypoMailWithCircle /></a>
                    <a href="instagram.com/tigerfeng_sh/" sx={{ textDecoration: 'none', color: 'accent', marginRight: '.25em' }}><EntypoInstagramWithCircle /></a>
                    <a href="github.com/TigerFeng37" sx={{ textDecoration: 'none', color: 'accent', marginRight: '.25em' }}><EntypoGithubWithCircle /></a>
                    <a href="linkedin.com/in/yicheng-feng/" sx={{ textDecoration: 'none', color: 'accent' }}><EntypoLinkedinWithCircle /></a>
                </div>
                <h6 sx={{marginTop: '2em', color: 'gray'}}>Website built w/ React.js & 💛</h6>
            </div>
        </div>
    )
}

export default About;