import styles from './Bugs.module.css'
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement("#root");
const bugModalStyles = {
    content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'auto',
    border: '1px solid #92c57c',
    outline: 'none',
    width: '400px',
    'background-color': '#eae3b1',
    'max-width': '100%',
  
}
}


function Bugs(props) {

const [isOpen, setIsOpen] = useState(false);
const [critter, setCritter] = useState({name:{"name-EUen":""}, image_uri:"", "museum-phrase":"", availability:{"month-northern":""}, availability:{"rarity":""}, price:"", "price-flick":"" });


function triggerModal(selection) {
    if(!selection) {
        setCritter({name:{"name-EUen":""}, image_uri:"", "museum-phrase":"", availability:{"month-northern":""}, availability:{"rarity":""}, price:"", "price-flick":"" })
    } else {
        setCritter(selection); 
    }
   
    
    setIsOpen(!isOpen);
}
    return (
        <>
        <h2 className={styles.Title}>Bugs</h2>
        
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
                    <img className={styles.FirstColumn} src={critter.image_uri} alt="no image available" width="200" height="200" />
                    <div className={styles.Name}><strong>{critter.name["name-EUen"]}</strong></div>
                    
                    <div className={styles.SecondColumn}>
                    <ul className={styles.Availability}>Availability
                        <li>Months: {critter.availability["month-northern"]}</li>
                        <li>Time: {critter.availability["time"]}</li>
                    </ul>
                    <ul className={styles.Availability}>Sell
                        <li>Price: {critter.price} Bells</li>
                        <li>Flick's Price: {critter["price-flick"]} Bells</li>
                    </ul>
                    
                    </div>
                    <div> <i>   {critter.availability["rarity"]}</i></div>
                    <button className={styles.Close} onClick={() => triggerModal()}>X</button>
                </Modal>
    </>
    )
  

}

   


export default Bugs;