import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function Banner() {
    useEffect(() => {
        anime.timeline()
        .add({
          targets: '.banner__intro__text',
          opacity: 0,
          duration: 200,
          easing: "easeOutExpo",
        })
        .add({
            targets: '.banner__intro__text',
            easing: "easeOutExpo",
            rotateY: [-90, 0],
            duration: 500,
            opacity: 1
        })
        .add({
            targets: '.banner__intro__subtext',
            opacity: 0,
            duration: 200,
            easing: "easeOutExpo",
          })
          .add({
            targets: '.banner__intro__subtext',
            easing: "easeOutExpo",
            rotateY: [-90, 0],
            opacity: 1,
            delay: 200
          })
          .add({
            targets: '.banner__intro__btn-group',
            easing: 'easeOutExpo',
            opacity: 0,
            duration: 500
          })
          .add({
            targets: '.banner__intro__btn-group',
            easing: 'easeOutExpo',
            rotateX: [-90, 0],
            opacity: 1,
            duration: 500
          });
    }, []);

    return (
        <div className="banner">
            <div className="container banner__intro">
                <div className='row'>
                    <div className='col-12'>
                        <div className="banner__intro__text">Looking for Advice?</div>
                    </div>
                    <div className='col-12'>
                        <div className='banner__intro__subtext'>Ask a way</div>
                        <div className='banner__intro__btn-group'>
                            <a class="cbtn cbtn--primary" href="#adv-random" role="button">RANDOM</a>
                            <a class="cbtn cbtn--secondary" href="#adv-search" role="button">SEARCH</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}