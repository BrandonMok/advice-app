import React, {useState} from 'react';
import OpenQuote from "../icons/openQuote.svg";
import CloseQuote from "../icons/closingQuote.svg";

export default function AdviceRandom() {
    const [advice, updateAdvice] = useState();

    // https://api.adviceslip.com/
    const endpoint = 'https://api.adviceslip.com/advice';

    async function getRandomAdvice() {
        const response = await fetch(endpoint);
        const respJSON = await response.json();
        updateAdvice(respJSON.slip.advice);
    }

    return (
        <div className='random' id='random'>
            <div className="container">
                <div className='row'>
                    <div className='random__title'>Random Advice</div>
                </div>
                <div className='row'>
                    <div className='random__advice-text'>
                        {advice ? (
                            <>
                            <span>
                                <img src={OpenQuote} alt="SVG open quote" />
                            </span>
                            {advice}
                            <span>
                                <img src={CloseQuote} alt="SVG close quote" />
                            </span>

                            </>
                        ) : ( 
                            <>Click the button to receive advice!</>
                        )}
                    </div>
                </div>
                <div className='row'>
                    <div className='random__btn-flexbox'>
                        <div className='cbtn cbtn--primary random__btn' onClick={getRandomAdvice}>Give Me Advice!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}