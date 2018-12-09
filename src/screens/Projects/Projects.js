import React,{ Component, Fragment } from 'react';

// Components
import Alternate from '../../components/Alternate/Alternate';


class Projects extends Component{
    render() {
        return (
            <Fragment>
                <div className="mainContent">
                    <Alternate name={'Projects'} />
                </div>
            </Fragment>
        )
    }
}

export default Projects;