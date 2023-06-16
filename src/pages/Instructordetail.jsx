import { useEffect, useState } from "react";
import './instructordetail.css'
import img from "../assests/images/ui-ux.png";
function Instructordetail({ id }) {
  const [instructor, setInstructor] = useState(null);

  // useEffect(() => {
  //   // Fetch instructor data based on the provided ID
  //   fetch(`/instructors/${id}`)
  //     .then(response => response.json())
  //     .then(data => setInstructor(data));
  // }, [id]);

  // if (!instructor) {
  //   return <div>Loading...</div>;
  // }
  const data={
    img,
    name:'Bisso Jerry',
    bio:"I'm a pationate of react js.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nulla eveniet. Iure facere laudantium totam ex ad mollitia sapiente consectetur beatae exercitationem obcaecati, modi suscipit ut soluta, est ab dolorum."
  }
  return (
    <div className="instructor-page">
   <div className="instructor">
      <h3>About {data.name}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, iste.</p>
      <img src={img} alt={data.name} />
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
   </div>
    </div>
  );
}
export default Instructordetail;