import {ViewList,ViewModule} from "@material-ui/icons"

const IconSwitch = (props) => {
    return(
        <div className="right-corner">
            {props.icon == "view_list" ?
            <ViewList onClick={props.onSwitch}></ViewList> :
            <ViewModule onClick={props.onSwitch}></ViewModule>
            }
        </div>
        
    )
}

export default IconSwitch