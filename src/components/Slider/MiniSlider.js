import React, { Fragment } from 'react';
import Coverflow from 'react-coverflow';
import content from './content';


class MiniSlider extends React.Component {

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
                        <img
                            src={content[4].image}
                            alt={content[4].image}
                            style={{ display: 'block', width: '100%' }}
                        />
                        <img
                            src={content[0].image} alt={content[0].title}
                            style={{ display: 'block', width: '100%' }}
                        />
                        <img
                            src={content[1].image} alt={content[1].title}
                            style={{ display: 'block', width: '100%' }}
                        />
                        <img
                            src={content[2].image} alt={content[2].title}
                            style={{ display: 'block', width: '100%' }}
                        />
                        <img
                            src={content[3].image} alt={content[3].title}
                            style={{ display: 'block', width: '100%' }}
                        />

                    </Coverflow>
                </div>
            </Fragment>
        )
    };
}

export default MiniSlider;