import "./style.css";
import {timeCss} from "../../helpers/timeCss";
const TimePart = (props) =>
{
    const a=Math.floor(props.children / 10)
    const b=props.children % 10
    const time = [...timeCss];
    return (<>
    <div className="number">
        <div className={"numberPart " + time[a].top}></div>
        <div className={"numberPart " + time[a].down}></div>
      </div>
      <div className="number">
        <div className={"numberPart " + time[b].top}></div>
        <div className={"numberPart " + time[b].down}></div>
      </div>
    </>)
    
}
export default TimePart;