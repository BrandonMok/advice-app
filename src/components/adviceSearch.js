import React, { useState, useRef } from 'react';
import OpenQuote from "../icons/openQuote.svg";
import CloseQuote from "../icons/closingQuote.svg";
import { random } from 'animejs';


export default function AdviceSearch() {
    const [searchTerm, updateSearchTerm] = useState();
    const [advice, updateAdvice] = useState();
    const searchInput = useRef();

    const endpoint = 'https://api.adviceslip.com/advice/search/';

    const inputSanitize = (s) => {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    const queryAdvice = () => {
        const searchTerm = searchInput.current.value;

        if (searchTerm) {
            const sanitizedTerm = inputSanitize(searchTerm);
            
            fetch(endpoint + sanitizedTerm)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    // error not found

                }
                else {
                    if (data.total_results > 1) {
                        // multiple.. choose random from list given
                        const totalResSize = data.total_results;

                        const randomIndex = Math.floor(Math.random() * totalResSize);
                        // updateAdvice(data.slips[randomIndex]);
                    }
                    else {
                        // only one
                    }

                }
            });

            // .then(data => updateAdvice(data[0].slip.advice));
        }
        else {
            // empty or invalid!
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
                            <>Enter a word that you want advice on</>
                        )}
                    </div>
                </div>
                <div className='row'>
                    <div className='adSearch__btn-flexbox'>
                        <input ref={searchInput} type='text' name='searchTerm' className='adSearch__btn-flexbox__search' />
                        <div className='cbtn cbtn--primary adSearch__btn-flexbox__btn' onClick={queryAdvice}>Give Me Advice!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}