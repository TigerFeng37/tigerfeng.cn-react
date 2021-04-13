/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-router-dom";
import { EntypoChevronLeft } from "react-entypo";

function apex(props) {
    return (
        <div className="work-wrapper">
            <div className="work-header">
                <div className="work-header-text">
                    <Link to="/" className="back-link" sx={{ color: 'gray', marginLeft: '-.75em' }}>
                        <EntypoChevronLeft /><h4 sx={{ margin: 0, fontWeight: 400 }}>Back</h4>
                    </Link>
                    <h3 sx={{ marginTop: '2em' }}>Apex</h3>
                    <p>The fine art and landscape photography series “Apex” reflects on the order and chaos within the natural organic forms and scapes, contrasting to the uniformity of social structures and routine lifestyles, and aims to displaying them through a setting that offers a sense of serenity and tranquility. The photographer believes that the facets of the mountain forms the perfect juxtaposition between ordered complexity and simplicity, establishing a different perspective on natural beauty.</p>
                </div>
                <div className="work-header-image" id="apex" style={{ backgroundImage: `url('/img/work/work6.jpg')` }}></div>
            </div>
            <div className="work-body-image" id="apex" style={{ backgroundImage: `url('/img/work/apex/apex-4.jpg')` }}></div>
            <div style={{ width: `calc(100% + 2em)` }}>
                <div className="work-body-image work-image-tile" id="apex" style={{ backgroundImage: `url('/img/work/apex/apex-5.jpg')` }}></div>
                <div className="work-body-image work-image-tile" id="apex" style={{ backgroundImage: `url('/img/work/apex/apex-6.jpg')` }}></div>
                <div className="work-body-image work-image-tile" id="apex" style={{ backgroundImage: `url('/img/work/apex/apex-3.jpg')` }}></div>
                <div className="work-body-image work-image-tile" id="apex" style={{ backgroundImage: `url('/img/work/apex/apex-2.jpg')` }}></div>
            </div>
        </div>
    )
}

export default apex;