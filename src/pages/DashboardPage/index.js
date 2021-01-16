function DashboardPage(props) {
    console.log(props.data);
         return (
        <div>
            <p>{props.item.price}</p>
        </div> 
    );       
}

export default DashboardPage;