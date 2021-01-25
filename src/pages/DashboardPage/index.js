import Bugs from '../../components/Bugs';
import Fish from '../../components/Fish/Fish';

function DashboardPage(props) {
    console.log(props.data);
   
    return (
        <div>
        <Bugs data={props.data} />
        <Fish data={props.fish} />
        </div>
    )
}
   


export default DashboardPage;