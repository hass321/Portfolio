import React, { Fragment } from 'react';
import Slider from 'react-animated-slider';
import content from './content';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './css/slider-animations.css';
import './css/styles.css';

const MainSlider = () => {
	return (
		<div className='alternate__row'>
			<Slider className="slider-wrapper container" autoplay={2000} >
				{content.map((item, index) => (
					<div
						key={index}
						className="slider-content"
						style={{ background: `url('${item.image}') no-repeat center center`, maxWidth: '100%' }}
					>
						<div className='inner'>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<button>{item.button}</button>
						</div>
					</div>
				))}
			</Slider>
			</div>
	);
}
export default MainSlider;