import { useEffect,useState} from "react";
export default function Skills()
{
    const[extraClasses, setExtraClasses] = useState('');
    return(
        <section id="skills">
            <div className="center">
            <h2>Skills</h2>
            <div className={extraClasses+"skills-container"}>
                <div className="skill-box"><img src='/img/python.png'alt=""/><span>Python</span></div>
                <div className="skill-box"><img src='/img/r.png'alt=""/><span>R-Studio</span></div>
                <div className="skill-box"><img src='/img/Stata.png'alt=""/><span>Stata</span></div>
                <div className="skill-box"><img src='/img/mysql.png'alt=""/><span>MySQL</span></div>
                <div className="skill-box"><img className="mongodb"src='/img/MongoDB.png'alt=""/><span>MongoDB</span></div>
                <div className="skill-box"><img src='/img/excel.png'alt=""/><span>MS Excel</span></div>
                <div className="skill-box"><img src='/img/html-5.png'alt=""/><span>HTML</span></div>
                <div className="skill-box"><img src='/img/logo-javascript.png'alt=""/><span>Javascript</span></div>
            </div>
            </div>
        </section>
    )
}