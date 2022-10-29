import React, {useState} from 'react';

interface Props {
  msg: string;
  type: string;
}

export const Toast = ({msg, type}: Props) => {

  const typeText = type.charAt(0).toUpperCase() + type.slice(1)

  const [state, setState] = useState({className: "", emoji: ""});

  switch (type) {
    case 'error':
      setState({
        emoji: '❌',
        className: 'toast__container toast__error'
      });
      break
    case 'success':
      setState({
        emoji: '✅',
        className: 'toast__container toast__success'
      })
      break
    default:
      setState({
        emoji: '',
        className: ''
      })
  }


  const closeHandle = () => {
    // TODO: handle close toast
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