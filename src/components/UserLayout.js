import Objectives from "./Objective"

const UserLayout = (props) => {
    return (

        <div key='usrlayout1' className="userlayout" >

            {<Objectives tasks={props.tasks} objectives={props.objectives} reminder={props.reminder} addTasks={props.addTasks}
            />}


        </div >
    );
}

export default UserLayout
