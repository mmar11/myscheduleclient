import Task from "./Task"
import Objectives from "./Objective"

const UserLayout = (props) => {
    return (

        <div key='usrlayout1' className="userlayout" >

            <Objectives state={props.state} reminder={props.reminder} />


        </div >
    );
}

export default UserLayout
