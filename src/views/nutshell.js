/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-router-dom";
import { EntypoChevronLeft } from "react-entypo";

function nutshell(props) {
    return (
        <div className="work-wrapper">
            <div className="work-header">
                <div className="work-header-text">
                    <Link to="/" className="back-link" sx={{ color: 'gray', marginLeft: '-.75em' }}>
                        <EntypoChevronLeft /><h4 sx={{ margin: 0, fontWeight: 400 }}>Back</h4>
                    </Link>
                    <h3 sx={{ marginTop: '2em' }}>Nutshell</h3>
                    <p>Nutshell is the deliverables designed for a student-led art exhibition of the same name. The event was held in May 2020 by students of IB Visual Arts Class of 2020.</p>
                </div>
                <div className="work-header-image" style={{ backgroundImage: `url('/img/work/work2.jpg')` }}></div>
            </div>
            <div className="work-body-image" style={{ backgroundImage: `url('/img/work/nutshell/nutshell-2.jpg')` }}></div>
        </div>
    )
}

export default nutshell;