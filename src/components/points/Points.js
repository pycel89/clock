
import "./style.css";
const Points = (props) =>{
    return(
        <div className="blockPoints">
        <div className={props.children}></div>
        <div className={props.children}></div>
      </div>
    )
}
export default Points