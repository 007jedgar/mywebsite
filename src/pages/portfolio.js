import React from "react"
import "../components/main.css"

import img3 from "../images/pixe.png"
import teachero from "../images/teachero_show.png"
import showcase from "../images/med_showcase.png"

const Work = () => (
        <div className="page-layout">
            <div className="content-container portfolio">
                <p>PORTFOLIO</p>

                <h3>Selected Projects</h3>

                <div>
                    <div className="project-container">
                        <img className="phone-showcase" src={showcase} />

                        <div className="proj-text">
                            <h5><a target="_blank" href="https://demia.app">Demia Mobile App</a></h5>
                            <p>
                                A mobile app launched Feb 2021. It’s purpose is to keep 
                                track of relevant classroom information. Students can create a virtual classroom 
                                with their classmates to share notes, track due dates, schedule study sessions, 
                                and get assignment feedback. They can also get reminders for due dates, scan syllabi to parse dates, generate essay outlines, flashcards, paragraph summaries, and generate audiobooks from textbooks using ai.
                            </p>
                            <p className="hide-extra"><strong>Built in:</strong> React Native (Javascript framework for native mobile applications), Firebase backend.</p>
                            <p className="hide-extra"><strong>Note:</strong> It's an incredibly fun project! I work with payments, messaging, push notifications, deep linking, social authentication, gpt-3, text-to-speech, ML Kit, and Vision Ai</p>
                        </div>
                    </div>
                    <div className="project-container">
                        <img className="phone-show" src={teachero} />

                        <div className="proj-text">
                            <h5><a target="_blank" href="https://apps.apple.com/us/app/teachero/id1590255247">Teachero Mobile App</a></h5>
                            <p>Formerly VarsityPrep, An app that allows parents and students to schedule and pay for private atheletic, academic, and fine arts tutoring sessions.</p>
                            <p className="hide-extra"><strong>Built in:</strong> React Native (Javascript framework for native mobile applications), Google Firebase backend.</p>
                            <p className="hide-extra"><strong>Note:</strong> This was the first mobile app I built using React Native and I was blown away by how powerful the framework was.</p>
                        </div>
                    </div>
                    {/* <div className="project-container">
                        <img className="phone-mockup" src={img3} />

                        <div className="proj-text">
                            <h5>Pixe Mobile App</h5>
                            <p>The first project I managed was a social media app. It allowed it's users to follow groups of people or organizations rather than just individuals. </p>
                            <p className="hide-extra"><strong>Built in:</strong> Native iOS frontend and AWS backend.</p>
                            <p className="hide-extra"><strong>Note:</strong> This was my introduction to app development. While I did more designing than I did coding on this project, seeing a software project from beginning to end has proven to be helpful.</p>
                        </div>
                    </div> */}
                </div>
                
            </div>
        </div>
)


export default Work;