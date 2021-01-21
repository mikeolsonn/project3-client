import styles from './Bugs.module.css'

function Bugs(props) {
    console.log(props.data);
    return (
        <div className={styles.Bugs}>
        {props.data.map((item, idx) =>
            <img key={idx} className={styles.Bug} src={item.icon_uri} />
            )}
        </div>
    )
}
   


export default Bugs;