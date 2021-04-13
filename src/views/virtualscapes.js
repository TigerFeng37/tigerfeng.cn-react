/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-router-dom";
import { EntypoChevronLeft } from "react-entypo";

function virtualscapes(props) {
    return (
        <div className="work-wrapper">
            <div className="work-header">
                <div className="work-header-text">
                    <Link to="/" className="back-link" sx={{ color: 'gray', marginLeft: '-.75em' }}>
                        <EntypoChevronLeft /><h4 sx={{ margin: 0, fontWeight: 400 }}>Back</h4>
                    </Link>
                    <h3 sx={{ marginTop: '2em' }}>Virtualscapes</h3>
                    <p><i>Non-Exhaustive Post</i><br />A small collection of 3D renders created with Cinema 4D</p>
                </div>
                <div className="work-header-image" style={{backgroundImage: `url('/img/work/work4.jpg')`}}></div>
            </div>
        </div>
    )
}

export default virtualscapes;