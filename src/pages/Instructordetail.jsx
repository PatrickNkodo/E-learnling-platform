import { useEffect, useState } from "react";
import './instructordetail.css'
import img from "../assests/images/ui-ux.png";
import { useLocation } from "react-router";
import { useEverywhere } from "./context";
function Instructordetail() {
  const [data,setData]=useState({})
  const {fetchSingleUser}=useEverywhere();
  const location=useLocation(); //useLocation is storing the values
  useEffect(()=>{
    const {email}=location.state //destructure state.
    fetchSingleUser(email).then(x=>{setData(x);console.log(x);})
  },[])
  console.log(data);
  return (
    <div className="instructor-page">
   <div className="instructor">
      <h3>About {data.name}</h3>
      <img src={img} alt={data.instructorName} />
      <h1>{data.instructorName}</h1>
      <p>{data.description}</p>
   </div>
    </div>
  );
}
export default Instructordetail;