import React,{ Component, Fragment } from 'react';

// Components
import Alternate from '../../components/Alternate/Alternate';


class About extends Component{
    render() {
        return (
            <Fragment>
                <div className="mainContent">
                    <Alternate name={'About'} />
                </div>
            </Fragment>
        )
    }
}

export default About;