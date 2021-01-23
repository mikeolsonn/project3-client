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
const [critter, setCritter] = useState({name:{"name-EUen":""}, image_uri:"", "museum-phrase":"" });


function triggerModal(critter) {
    alert(critter.image_uri)
    if(!critter) {
        setCritter({name:{"name-EUen":""}, image_uri:"", "museum-phrase":"" })
    } else {
        setCritter(critter); 
    }
    
    setIsOpen(!isOpen);
}
  

    return (
        <>
        <h2>Bugs</h2>
        
        <div className={styles.Bugs}>
        {props.data.map((item, idx) =>
        <>
            <img 
                onClick={() => triggerModal(item)} 
                key={idx}
                className={styles.Bug} 
                src={item.icon_uri} 
                alt={item.name["name-EUen"]}
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
                    <div>{critter.name["name-EUen"]}</div>
                    <div>{critter["museum-phrase"]}</div> 
                    
                    <button onClick={triggerModal} isOpen={!isOpen}>Close</button>
                </Modal>
       </>
    )
}

   


export default Bugs;