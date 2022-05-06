import React from "react";
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
                                <div className="testimonial__container__name">{td.name}</div>
                                <div className="testimonial__container__desc">{td.desc}</div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-12 col-md-6">
                                <div className="testimonial__container__name">{td.name}</div>
                                <div className="testimonial__container__desc">{td.desc}</div>
                            </div>
                            <div className="col-12 col-md-6">
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