import React, { useState } from 'react'
import { BiEnvelope } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl'
import './subscribe.scss'

const Subscribe = () => {

    const [email, setEmail] = useState('');

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <div className='shared-subscribe flex-box'>

            <div className="block">
                <h1>
                    <FormattedMessage id='Subscribe to our newsletter' 
                    defaultMessage='Subscribe to our newsletter' />
                </h1>
                <p>
                    <FormattedMessage id='shared-subscribe-text' 
                    defaultMessage='Be the first to know about newest articles, tips and resources.' />
                </p>
            </div>

            <form onSubmit={handleSubmit} >
                <div className="input">
                    <span className='centered-item'><BiEnvelope /></span>
                    <input type="email" 
                        value={email}
                        name='email'
                        id='email'
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email address'
                    />
                </div>
                <button type='submit'>
                    <FormattedMessage id='subscribe' defaultMessage='Subscribe' />
                </button>
            </form>
        </div>
    )
}

export default Subscribe