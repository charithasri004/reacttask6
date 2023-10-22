import './App.css';
import insta from './instagramlogo.png';
import mail from './gmail.jpeg';
import github from './githublogo.png';
export default function app(){
  return(
    <div id="id">
      <div id="id1">
        <p>My Portfolio</p>
      </div>
      <div id="id2">
        <p><b id="id3">Profile</b></p>
        <p>Hello My name is Charitha Sri Yarkareddy currently I am pursing my BTech-CSE 3rd year with specialiazation DATA ANALYTICS in  VIT-AP university</p>
        <p>
          I completed my Intermediate at Sri Chaitanya College and my SSC Board at Sri Chaitanya E.M School .
        </p>
        <p>
          I believe in the power of technology to make a positive impact on the world.
        </p>
        <p>
          I enjoy hanging out with friends, playing sports, and indulging in my love for music and movies.
          I'm passionate about constant learning, especially in the ever-changing data field.
        </p>
      </div>

      <div id="id9">
        <p id="id3"><b>Skills</b></p>
        
        <span id="id6">Java</span>
        <span id="id6">Python</span>
        <span id="id6">DSA</span>
        <span id="id6">HTML & CSS</span>
        <span id="id6">SQL</span>
        <span id="id6">JavaScript</span>
      </div>
      <div id="id10">
        <p id="id12"><b>Projects</b></p>
        
        <span id="id11">Watering Plants using Arduino</span>

      </div>
      <div id="id4">
        <p id="id3">Contact</p>
        <span id="id5"><a id="id8" href="charithasri004@gmail.com">Email</a></span>
        <a href="charithasri004@gmail.com"><img src={mail} alt="Instagram logo" height={50}/></a>
        <span id="id5"><a id="id8" href="https://www.instagram.com/charitha_yarkareddy/?hl=en">Instagram</a></span>
        <a href="https://www.instagram.com/charitha_yarkareddy/?hl=en"><img src={insta} alt="Instagram logo" height={50}/></a>
        <span id="id5"><a id="id8" href="https://github.com/charithasri004 ">Github</a></span>
        <a href="https://github.com/charithasri004"><img src={github} alt="Instagram logo" height={50}/></a>
      </div>
    </div>
  );
}