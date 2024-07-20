import { useEffect,useState} from "react"

export default function Intro() 
{
const[classes,setClasses]=useState('');

useEffect( () => {
    setClasses('visible');
}, []);

    return(
    <section id="intro" className={classes }>
      
        <div><p>I'm <span>John Philip</span>
          <br/> Data analyst
          <br/>Code  Enthusiast 
          <br /><a href="/public/resume.pdf" download="John_Philip_Resume.pdf">Download Resume</a>
           </p></div>
        <div className="me">
        <img src="/img/me.png" alt="logo"/>
        </div>
      </section>
      );
}