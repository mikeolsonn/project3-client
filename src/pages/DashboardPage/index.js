import Bugs from '../../components/Bugs';

function DashboardPage(props) {
    console.log(props.data);
    return (
        <div>
        <Bugs data={props.data} />
        </div>
    )
}
   


export default DashboardPage;