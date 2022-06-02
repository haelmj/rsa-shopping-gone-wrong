import React from "react";
import Header from "../components/Header";

const About = (props) => {
  return (
    <div>
      <div className="breadcrumb">
        <Header bookLength={props.bookcaseLength}/>
      </div>
      <p className="page">I have no information about myself. I promise it's just books but I am a secret lover of the Web Application Hackers Handbook and so I occasionally do free giveaways.</p>
      <p className="page">You probably already figured this out but my styling(css) is really horrible.</p>
      <p className="page">I don't want to bore you much. <b>Go ahead and purchase some books!!!</b></p>
    </div>
  );
};

export default About;
