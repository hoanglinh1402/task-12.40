import { Component } from "react";
import './style.scss';

class TitleComponent extends Component{
    render(){
        return(
            <>
            <form className="reponseform pb-4  " >
                <div className="col-12 pt-4   d-flex">
                    <div className="col-2 firstname">FirstName</div>
                    <div className="col-12">
                        <input type="text" className=" col-7 " placeholder="Your Name.."></input>
                    </div>
                </div>
                <div className="col-12 pt-4  d-flex">
                    <div className="col-2 firstname">LastName</div>
                    <div className="col-12">
                        <input type="text" className=" col-7 " placeholder="Your Last Name.."></input>
                    </div>
                </div>
                <div className="col-12 pt-4  d-flex">
                    <div className="col-2 firstname">Country</div>
                    <div className="col-12">
                       <select className="col-7">
                        <option value="Australia">Australia</option>
                        <option value="US">US</option>
                        <option value="VietNam">VietNam</option>
                       </select>
                    </div>
                </div>
                <div className="col-12 pt-4  d-flex">
                    <div className="col-2 firstname" >Subject</div>
                    <div className="col-12 ">
                        <textarea className="col-7"></textarea>
                    </div>
                </div>
                <div className="">
                       <button className="ml-3 bg-success border-0 pt-2 pb-2 px-3 firstname " type="submit ">Send data</button>
                    </div>
                
            </form>
            </>
        )
    }
}
export default TitleComponent