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
const [critterId, setCritterId] = useState({critterId:""});


function triggerModal(critterId) {
    
    setIsOpen(!isOpen);
    setCritterId({name:critterId}); // changed from critterId:critterId

    
    
}
  

    return (
        <>
        <h2>Bugs</h2>
        
        <div className={styles.Bugs}>
        {props.data.map((item, idx) =>
        <>
            <img 
                onClick={() => triggerModal(item.name["name-EUen"])} // call to item instead of item.id to return all of the components of the array
                key={idx}
                className={styles.Bug} 
                src={item.icon_uri} 
            />
        
                </>
            )}
        </div>
            <Modal 
                style={bugModalStyles}
                isOpen={isOpen}
                onRequestClose={triggerModal}
                contentLabel="testing"
                
                >
                    <div>{critterId.name}</div> 
                    
                    <button onClick={triggerModal}>Close</button>
                </Modal>
       </>
    )
}

   


export default Bugs;