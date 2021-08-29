import React, { useRef } from 'react';

const Modal = ({ content, handleOnClose, children }) => {
  const modalRef = useRef();

  const handleOnClick = (e) => {
    if (modalRef.current === e.target) {
      handleOnClose();
    }
  };
  return (
    <div className='modal_overlay' onClick={handleOnClick} ref={modalRef}>
      <div className='modal_screen'>
        {content ? (
          <div className='modal_content'>
            {content}
            <button className='modal_btn' onClick={handleOnClose}>
              확인
            </button>
          </div>
        ) : (
          <div className='modal_children'>{children}</div>
        )}
      </div>
    </div>
  );
};

export default Modal;
