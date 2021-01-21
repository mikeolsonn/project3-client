import styles from './Bugs.module.css'

function Bugs(props) {
    console.log(props.data);
    return (
        <div className={styles.Bugs}>
        {props.data.map((item, idx) =>
            
                <p key={idx} className={styles.Bug}>{item.id}</p>
            )}
        </div>
    )
}
   


export default Bugs;