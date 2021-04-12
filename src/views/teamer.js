/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-router-dom";
import { EntypoChevronLeft } from "react-entypo";

function teamer(props) {
    // var {ChevronLeft} = require('react-entypo')
    return (
        <div className="work-wrapper">
            <div className="work-header">
                <div className="work-header-text">
                    <Link to="/" className="back-link" sx={{ color: 'secondary', marginLeft: '-.75em' }}>
                        <EntypoChevronLeft /><h4 sx={{ margin: 0, fontWeight: 400 }}>Back</h4>
                    </Link>
                    <h3 sx={{ marginTop: '2em' }}>Teamer</h3>
                    <p>Teamer is a progressive-web-app-based team-finding and building platform for high-schoolers and college students, aimed to resolve the long-standing issue of finding suitable teammates in international student bodies to attend both and local competitions and events.</p>
                </div>
                <div className="work-header-image" style={{backgroundImage: `url('/img/work/work3.jpg')`}}></div>
            </div>
            <br/>
        </div>
    )
}

export default teamer;