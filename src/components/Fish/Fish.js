import styles from './fish.module.css';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement("#root");
const fishModalStyles = {
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

function Fish(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [fish, setFish] = useState({ name:{"name-EUen":""}, image_uri:"", "museum-phrase":"", availability:{"month-northern":""}, availability:{"rarity":""} });
    
    
    function triggerModal(selection) {
        if(!selection) {
            setFish({ name:{"name-EUen":""}, image_uri:"", "museum-phrase":"", availability:{"month-northern":""}, availability:{"rarity":""} })
        } else {
            setFish(selection); 
        }
       
        
        setIsOpen(!isOpen);
    }
        return (
            <>
            <h2>Fish</h2>
            
             <div className={styles.Fishes}>
            {props.data.map((item, idx) =>
            <>
                <img 
                    onClick={() => triggerModal(item)} 
                    key={idx}
                    className={styles.Fish} 
                    src={item.icon_uri} 
                    alt="fish"
                />
            
                    </>
                )}
            </div>
                <Modal 
                    style={fishModalStyles}
                    isOpen={isOpen}
                
                    onRequestClose={() => triggerModal()}
                    contentLabel="testing"
                    
                    >
                        <div>{fish.name["name-EUen"]}</div>
                    <div>{fish["museum-phrase"]}</div>
                    <div>
                    <ul>Availability
                        <li>Months: {fish.availability["month-northern"]}</li>
                        <li>Time: {fish.availability["time"]}</li>
                    </ul>
                    </div>
                    <div>Rarity: {fish.availability["rarity"]}</div>
                    <img src={fish.image_uri} alt="no image available" width="200" height="300" />
                        <button onClick={() => triggerModal()}>Close</button>
                    </Modal> 
        </>
        )
      
    
    }
    
       
    
    
    export default Fish;
