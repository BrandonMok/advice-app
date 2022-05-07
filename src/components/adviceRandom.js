import React, {useState} from 'react';
import OpenQuote from "../icons/openQuote.svg";
import CloseQuote from "../icons/closingQuote.svg";

export default function AdviceRandom() {
    const [advice, updateAdvice] = useState();

    // https://api.adviceslip.com/
    const endpoint = 'https://api.adviceslip.com/advice';


    function getRandomAdvice() {
        fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            updateAdvice(data.slip.advice);
        });
    }

    return (
        <div className="random container" id="random">
            <div className='row'>
                <div className='random__title'>Random Advice</div>
            </div>
            <div className='row'>
                <div className='col-12 mt-4 random__advice-text'>
                    {advice ? (
                        <>
                        <img src={OpenQuote} alt="SVG open quote" />
                        {advice}
                        <img src={CloseQuote} alt="SVG close quote" />
                        </>
                    ) : ( 
                        <>Click the button to receive advice!</>
                    )}
                </div>
                <div className='col-12 mt-4 random__btn'>
                    <div className='cbtn cbtn--primary' onClick={getRandomAdvice}>Ask!</div>
                </div>
            </div>
        </div>
    );
}