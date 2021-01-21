import styles from './Bugs.module.css'
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement("#root");
const bugModalStyles = {
    content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    overflow: 'auto',
    border: '1px solid #f8a4ae',
    outline: 'none',
    padding: '20px'
}
}


function Bugs(props) {

const [isOpen, setIsOpen] = useState(false);

function triggerModal() {
    setIsOpen(!isOpen);
}
   
    return (
        <>
        <h2>Bugs</h2>
        
        <div className={styles.Bugs}>
        {props.data.map((item, idx) =>
        <>
            <img 
                onClick={triggerModal}
                key={idx}
                className={styles.Bug} 
                src={item.icon_uri} 
            />
            <Modal 
                style={bugModalStyles}
                isOpen={isOpen}
                onRequestClose={triggerModal}
                contentLabel="testing"
                >
                    <div>testing123</div>
                    <button onClick={triggerModal}>Close</button>
                </Modal>
                </>
            )}
        </div>
        
       </>
    )
}

   


export default Bugs;