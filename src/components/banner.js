import React, { useEffect } from 'react';
// import anime from 'animejs/lib/anime.es.js';

export default function Banner() {
    // useEffect(() => {
    //     anime.timeline()
    //     .add({
    //       targets: '.banner__intro__text',
    //       opacity: 0,
    //       duration: 200,
    //       easing: "easeOutExpo",
    //     })
    //     .add({
    //         targets: '.banner__intro__text',
    //         easing: "easeOutExpo",
    //         rotateY: [-90, 0],
    //         duration: 1300,
    //         opacity: 1,
    //         delay: 500
    //     })
    //     .add({
    //         targets: '.banner__intro__subtext',
    //         opacity: 0,
    //         duration: 200,
    //         easing: "easeOutExpo",
    //       })
    //       .add({
    //           targets: '.banner__intro__subtext',
    //           easing: "easeOutExpo",
    //           rotateY: [-90, 0],
    //           duration: 1300,
    //           opacity: 1,
    //           delay: 500
    //       });
    // }, []);

    return (
        <div className="banner">
            <div className="banner__intro">
                <div className="banner__intro__text">Looking for Advice?</div>
                <div className='banner__intro__subtext'>Ask a way</div>
            </div>
        </div>
    );
}