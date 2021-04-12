/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-router-dom";
import { EntypoChevronLeft } from "react-entypo";

function humanLight(props) {
    return (
        <div className="work-wrapper">
            <div className="work-header">
                <div className="work-header-text">
                    <Link to="/" className="back-link" sx={{ color: 'secondary', marginLeft: '-.75em' }}>
                        <EntypoChevronLeft /><h4 sx={{ margin: 0, fontWeight: 400 }}>Back</h4>
                    </Link>
                    <h3 sx={{ marginTop: '2em' }}>Human Light</h3>
                    <p>'Architecture is the light of the human intellect.' This is the core concept behind this photography series, and is something the photographer genuinely believes in. The interior and exterior facade of Pinakothek der Moderne offers a clean and minimal environment, and through displaying these elements, the photographs serve as a meditative medium, allowing viewers to truly appreciate the visual minimalism and aesthetics in the space. The light in the space isn't just natural light, it is also the light of the human intellect.</p>
                </div>
                <div className="work-header-image" style={{ backgroundImage: `url('/img/work/work5.jpg')` }}></div>
            </div>
            <div className="work-body-image" style={{ backgroundImage: `url('/img/work/human-light/human-light-2.jpg')` }}></div>
            <div className="work-body-image" style={{ backgroundImage: `url('/img/work/human-light/human-light-3.jpg')` }}></div>
            <div className="work-body-image" style={{ backgroundImage: `url('/img/work/human-light/human-light-4.jpg')` }}></div>
            <div className="work-body-image" style={{backgroundImage: `url('/img/work/human-light/human-light-5.jpg')`}}></div>
        </div>
    )
}

export default humanLight;