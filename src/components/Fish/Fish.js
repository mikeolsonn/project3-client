import styles from './fish.module.css';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement("#root");
const fishModalStyles = {
    content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'auto',
    border: '1px solid #f8a4ae',
    outline: 'none',
    padding: '20px'
}
}

function Fish(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [fish, setFish] = useState({ name:{"name-EUen":""}, image_uri:"", "museum-phrase":"", availability:{"month-northern":""}, availability:{"rarity":""}, price:"", "price-cj":"" });
    
    
    function triggerModal(selection) {
        if(!selection) {
            setFish({ name:{"name-EUen":""}, image_uri:"", "museum-phrase":"", availability:{"month-northern":""}, availability:{"rarity":""}, price: "", "price-cj":"" })
        } else {
            setFish(selection); 
        }
       
        
        setIsOpen(!isOpen);
    }
        return (
            <>
            <h2 className={styles.Title}>Fish</h2>
            
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
                        <img className={styles.FirstColumn} src={fish.image_uri} alt="no image available" width="200" height="300" />
                        <div><strong>{fish.name["name-EUen"]}</strong></div>
                    
                    <div className={styles.SecondColumn}>
                    <ul>Availability
                        <li>Months: {fish.availability["month-northern"]}</li>
                        <li>Time: {fish.availability["time"]}</li>
                    </ul>
                    <ul>Sell
                        <li>Price: {fish.price} Bells</li>
                        <li>CJ's Price: {fish["price-cj"]} Bells</li>
                    </ul>
                    
                    <div>Rarity: {fish.availability["rarity"]}</div>
                    </div>
                    
                        <button className={styles.Close} onClick={() => triggerModal()}>X</button>
                    </Modal> 
        </>
        )
      
    
    }
    
       
    
    
    export default Fish;
