import React, {useState} from 'react';
import './info.css';

export default function Info() {
    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    
      return (
        <>
          <button onClick={toggleModal} className="btn-modal">
            Project Info
          </button>
    
          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <h2>TOOLS USED FOR THIS REPLICA :</h2>
                <p>
                  <li>React Js</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>HTML</li>
                </p>
                <h3>Thanking You :</h3>
                <p>R . Douglass Deva</p>

                <button className="close-modal" onClick={toggleModal}>
                  X
                </button>
              </div>
            </div>
          )}
        </>
      );
    }