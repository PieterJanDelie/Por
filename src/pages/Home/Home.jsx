import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./Home.css";

const Home = () => {
  const skills = [
    "Java",
    "Javascript",
    "React",
    "C#",
    "Kotlin",
    "Angular",
    "HTML5",
    "CSS",
    "Python",
    "Node",
    "Docker",
    "K8s",
    "Machine learning",
    "Deep learning",
    "Google cloud console",
    "MariaDB",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Git",
    "Github",
    "Rest API",
    "Flask",
    "FastAPI",
    "Spring",
    "asp .net",
    "React-native",
    "Expo GO",
  ];

  const shuffleSkills = (skillsArray) => {
    for (let i = skillsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [skillsArray[i], skillsArray[j]] = [skillsArray[j], skillsArray[i]];
    }
    return skillsArray;
  };

  const sortedSkills = skills.sort();

  const repeatedSkills = [];
  while (repeatedSkills.length < 2000) {
    const shuffledSkills = shuffleSkills([...sortedSkills]);
    repeatedSkills.push(...shuffledSkills);
  }

  const [displayedText, setDisplayedText] = useState("");
  const fullText = `<span class="codecolorone" style="color: var(--primary-color);">const</span> Person = {
  <span class="codecolortwo" style="color: var(--secondary-color);">Name:</span> <span class="codecolorthree" style="color: var(--accent-color);"><a href="/aboutme" class="link">"Pieter-Jan Delie"</a></span>,
  <span class="codecolortwo" style="color: var(--secondary-color);">Studies:</span> [<span class="codecolorthree" style="color: var(--accent-color);"><a href="/skillscertification" class="link">"Software Development"</a></span>,
  <span class="codecolorfive" style="color: var(--primary-color-hover);"><a href="/skillscertification" class="link">"AI"</a></span>, <span class="codecolorsix" style="color: var(--secondary-color-hover);"><a href="/skillscertification" class="link">"International Management"</a></span>]};
  
<span class="codecolorone" style="color: var(--primary-color);">Person</span>.say(<span class="codecolorseven" style="color: var(--background-color-hover);"><a href="/contact" class="link">"Let's get in touch!"</a></span>);`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <DefaultLayout>
        <div className="content">
          <div className="skills-background">
            {repeatedSkills.map((skill, index) => (
              <span key={index} className="skill-word">
                {skill}
              </span>
            ))}
          </div>
          <section className="welcome">
            <div className="welcome-text">
              <h1>
                <pre>
                  <code dangerouslySetInnerHTML={{ __html: displayedText }} />
                  <span className="cursor">
                    <span className="transparent">|</span>
                  </span>
                </pre>
              </h1>
            </div>
          </section>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Home;
