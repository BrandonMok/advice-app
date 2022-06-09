import React, { useState, useRef } from 'react';
import OpenQuote from "../icons/openQuote.svg";
import CloseQuote from "../icons/closingQuote.svg";

export default function AdviceSearch() {
    const [error, updateError] = useState();
    const [advice, updateAdvice] = useState();
    const searchInput = useRef();
    const defaultText = "Enter a search term for advice.";
    const endpoint = 'https://api.adviceslip.com/advice/search/';

    function inputSanitize(s) {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    async function queryAdvice() {
        const searchTerm = searchInput.current.value;

        if (searchTerm) {
            const sanitizedTerm = inputSanitize(searchTerm);

            const response = await fetch(endpoint + sanitizedTerm);
            const respJSON = await response.json();

            if (respJSON.message) {
                // error
                updateError(respJSON.message.text);
            }
            else {
                if (respJSON.total_results > 1) {
                    // multiple.. choose random from list given
                    const totalResSize = respJSON.total_results;
                    const randomIndex = Math.floor(Math.random() * totalResSize);

                    updateAdvice(respJSON.slips[randomIndex].advice);
                }
                else {
                    // only one
                    updateAdvice(respJSON.slips[0].advice);
                }
            }
        }
        else {
            // empty or invalid!
            updateError('Please enter a valid search term!');
        }
    }


    return (
        <div className='adSearch' id='adSearch'>
            <div className='container'>
                <div className='row'>
                    <div className='adSearch__title'>Advice Search</div>
                </div>
                <div className='row'>
                    <div className='adSearch__advice-text'>
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
                            <>{ error ? error : defaultText }</>
                        )}

                    </div>
                </div>
                <div className='row'>
                    <div className='adSearch__btn-flexbox'>
                        <input ref={searchInput} type='text' name='searchTerm' className='form-control adSearch__btn-flexbox__search' placeholder='EX: Spiders...' />
                        <div className='cbtn cbtn--primary adSearch__btn-flexbox__btn' onClick={queryAdvice}>Give Me Advice!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}