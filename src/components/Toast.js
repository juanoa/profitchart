import React from 'react';
import {useDispatch} from "react-redux";

import {removeToast} from "../actions/ui";

export const Toast = ({msg, type}) => {

    const typeText = type.charAt(0).toUpperCase() + type.slice(1)
    const dispatch = useDispatch()

    let state = {
        class: '',
        emoji: ''
    };

    switch (type) {
        case 'error':
            state = {
                emoji: '❌',
                className: 'toast__container toast__error'
            }
            break
        case 'success':
            state = {
                emoji: '✅',
                className: 'toast__container toast__success'
            }
            break
        default:
            state = {
                emoji: '',
                className: ''
            }
    }


    const closeHandle = () => {
        dispatch(removeToast())
    }


    return (
        <div className={state.className}>
            <div className="toast__icon">
                <span>{state.emoji}</span>
            </div>
            <div className="toast__content">
                <p className="toast__type">{typeText}</p>
                <p className="toast__message">{msg}</p>
            </div>
            <div className="toast__close" onClick={closeHandle}>x</div>
        </div>
    );
};