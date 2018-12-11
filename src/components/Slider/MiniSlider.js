import React, { Fragment } from 'react';
import Coverflow from 'react-coverflow';

import image1 from './img/css.png';
import image2 from './img/docker.jpg';
import image3 from './img/node.png';
import image4 from './img/html.jpeg';

var fn = () => {

}
class Slider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: 0
        };
    }
    render() {
        return (
            <Fragment>
                <div className="row">
                    <Coverflow
                        width={1360}
                        height={480}
                        displayQuantityOfSide={2}
                        navigation={false}
                        enableHeading={false}
                    >
                        <div
                            onClick={() => fn()}
                            onKeyDown={() => fn()}
                            role="menuitem"
                            tabIndex="0"
                        >
                            <img
                                src={image1}
                                alt='title or description'
                                style={{ display: 'block', width: '100%' }}
                            />
                        </div>
                        <img src={image2} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                        <img src={image3} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                        <img src={image4} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                    </Coverflow>
                </div>
            </Fragment>
        )
    };
}

export default Slider;