/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'react-router-dom';
import work from './data/work.json';

// const View = React.lazy(() =>
//     work.map((item => import(`./views/${item.component}.js`))),
//     work.map((item => console.log(`${item.component}`)))
// )

function Projects(props) {
    return (
        <div className="Projects">
            <div className="project-wrapper">
                {
                    work.map((item =>
                        <Link key={item.index} to={"/" + item.slug} className="project-image-wrapper">
                            <div className="project-image" style={{backgroundImage: `url("/img/work/${item.src}")`}}>
                                <div className="text-hover-wrapper">
                                    <div className="text-hover">
                                        <h3>{item.title}</h3>
                                        {
                                            (item.tags || []).map(tag => (
                                                    <h5 key={tag} className="tag">{tag}</h5>
                                                ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <h4 className="project-text-mobile" sx={{color: 'text'}}>{item.title}</h4>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Projects;