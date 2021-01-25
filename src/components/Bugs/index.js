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
const [critter, setCritter] = useState({name:{"name-EUen":""}, image_uri:"", "museum-phrase":"", availability:{"month-northern":""}, availability:{"rarity":""} });


function triggerModal(selection) {
    if(!selection) {
        setCritter({name:{"name-EUen":""}, image_uri:"", "museum-phrase":"", availability:{"month-northern":""}, availability:{"rarity":""} })
    } else {
        setCritter(selection); 
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
            
                onRequestClose={() => triggerModal()}
                contentLabel="testing"
                
                >
                    <div>{critter.name["name-EUen"]}</div>
                    <div>{critter["museum-phrase"]}</div>
                    <div>
                    <ul>Availability
                        <li>Months: {critter.availability["month-northern"]}</li>
                        <li>Time: {critter.availability["time"]}</li>
                    </ul>
                    </div>
                    <div>Rarity: {critter.availability["rarity"]}</div>
                    <img src={critter.image_uri} alt="no image available" width="200" height="300" />
                    <button onClick={() => triggerModal()}>Close</button>
                </Modal>
    </>
    )
  

}

   


export default Bugs;