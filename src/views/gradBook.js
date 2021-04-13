/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-router-dom";
import { EntypoChevronLeft } from "react-entypo";

function gradBook(props) {
    return (
        <div className="work-wrapper">
            <div className="work-header">
                <div className="work-header-text">
                    <Link to="/" className="back-link" sx={{ color: 'gray', marginLeft: '-.75em' }}>
                        <EntypoChevronLeft /><h4 sx={{ margin: 0, fontWeight: 400 }}>Back</h4>
                    </Link>
                    <h3 sx={{ marginTop: '2em' }}>YK Pao School<br />Class of 2020 Grad Book</h3>
                    <p>The 2020 Grad Book was crafted by a small team of designers and writers of the YK Pao School Class of 2020 student group, and created as a momento of high-school for both the students and faculties of the class.</p>
                </div>
                <div className="work-header-image" style={{backgroundImage: `url('/img/work/work1.jpg')`}}></div>
            </div>
            <div style={{ width: `calc(100% + 2em)` }}>
                <div className="work-body-image work-image-tile" style={{ backgroundImage: `url('/img/work/grad-book/grad-book-4.jpg')` }}></div>
                <div className="work-body-image work-image-tile" style={{ backgroundImage: `url('/img/work/grad-book/grad-book-5.jpg')` }}></div>
                <div className="work-body-image work-image-tile" style={{ backgroundImage: `url('/img/work/grad-book/grad-book-2.jpg')` }}></div>
                <div className="work-body-image work-image-tile" style={{ backgroundImage: `url('/img/work/grad-book/grad-book-3.jpg')` }}></div>
            </div>
        </div>
    )
}

export default gradBook;