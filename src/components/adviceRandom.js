import React, {useEffect, useState} from 'react';

export default function AdviceRandom() {
    return (
        <div className="adv-random" id="adv-random">
            <div className='adv-random__container container'>
                <div className='row adv-random__container__title-row'>
                    <div className='adv-random__container__title-row__title'>
                        Random Advice
                    </div>
                </div>
                <div className='row adv-random__container__content-row'>
                    <div className='col-12 mt-4'>
                        <div className='adv-random__container__content-row__advice'>test</div>
                    </div>
                    <div className='col-12 mt-4'>
                        <div className='cbtn cbtn--primary'>Ask!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}