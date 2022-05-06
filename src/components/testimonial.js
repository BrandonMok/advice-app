import React from "react";
import OpenQuote from '../icons/openQuote.svg';
import CloseQuote from '../icons/closingQuote.svg';

// import PropTypes from 'prop-types';

export default function Testimonial({td}) {
    const orderLayoutModifier = td.order ? '' : 'testimonial--order2';

    return (
        <div className={`testimonial ${orderLayoutModifier}`}>
            <div className="testimonial__container container">
                <div className="row">
                    {td.order ? (
                        <>
                            <div className="col-12 col-md-6">
                                <img src={td.icon} alt='Avatar' />
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="testimonial__container__textContent">
                                    <div className="testimonial__container__textContent__name">{td.name}</div>
                                    <div className="testimonial__container__textContent__desc">
                                        <img src={OpenQuote} alt='SVG open quote' />
                                        {td.desc}
                                        <img src={CloseQuote} alt='SVG close quote' />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-12 col-md-6 order-2 order-md-1">
                                <div className="testimonial__container__textContent">
                                    <div className="testimonial__container__textContent__name">{td.name}</div>
                                    <div className="testimonial__container__textContent__desc">
                                        <img src={OpenQuote} alt='SVG open quote' />
                                        {td.desc}
                                        <img src={CloseQuote} alt='SVG close quote' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 order-1 order-md-2">
                                <img src={td.icon} alt='Avatar' />
                            </div>
                        </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

// Testimonial.propTypes = {
//     id: PropTypes.number,
//     icon: PropTypes.string,
//     name: PropTypes.string,
//     desc: PropTypes.string,
//     order: PropTypes.bool
// }