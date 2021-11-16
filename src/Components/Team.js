import React from "react";
import member1 from "../images/team/Ritik Tiwari.png";
import member2 from "../images/team/Het Patel.png";
import member3 from "../images/team/Karthik Amran.png";
import member4 from "../images/team/Naganath S.png";
import member5 from "../images/team/Harsh Deshwal.png";

const Team = () => {
    return (
        <>
            <div className="team container-fluid">
                <h2 className="text-center my-4">TEAM MEMBERS</h2>
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide carousel-fade container-fluid"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="bg-dark active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="bg-dark" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="bg-dark" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="bg-dark" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="bg-dark" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src={member1} className="d-block" alt="Team Member 1" />
                            <div>
                                <h4 className="fw-bold text-uppercase">Ritik Tiwari</h4>
                                <p>
                                    I am an aspiring front-end developer who enjoys connecting the dots: be it ideas from different disciplines, people from different teams, or applications from different industries. I have strong technical skills and an academic background in engineering.
                                </p>
                                <a href="https://linkedin.com/in/theritiktiwari/" target="_blank" rel="noreferrer" className="btn">Contact</a>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={member2} className="d-block" alt="Team Member 2" />
                            <div>
                                <h4 className="fw-bold text-uppercase">Het Patel</h4>
                                <p>
                                    I'm a Robotics and IOT enthusiast currently studying (ECE 2nd Year) and hustling with my new projects. I'm the Technical Head at DORMIO. I worked on the product's electrical components and as well as its app development.
                                </p>
                                <a href="https://linkedin.com/in/het-patel-3a84b8136/" target="_blank" rel="noreferrer" className="btn">Contact</a>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={member3} className="d-block" alt="Team Member 3" />
                            <div>
                                <h4 className="fw-bold text-uppercase">Karthik Amran</h4>
                                <p>
                                    I'm an Electronics and Communication Engineering UG from one of the most prestigious Instituition Vellore Instituite of Technology, Chennai. I'm a member of the DORMIO team, and I've been instrumental in developing and bringing DORMIO to market.
                                </p>
                                <a href="https://linkedin.com/in/karthikh-amaran-8a2297209/" target="_blank" rel="noreferrer" className="btn">Contact</a>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={member4} className="d-block" alt="Team Member 4" />
                            <div>
                                <h4 className="fw-bold text-uppercase">Naganath S.</h4>
                                <p>
                                I'm an Electronics and Communication Engineering Under Graduate, pursuing the degree from Vellore Institue of Technology, Chennai.
                                I've taken the use of electronic devices to a different level by making a device named DORMIO.
                                </p>
                                <a href="https://linkedin.com/in/naganath-s-499681226/" target="_blank" rel="noreferrer" className="btn">Contact</a>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={member5} className="d-block" alt="Team Member 5" />
                            <div>
                                <h4 className="fw-bold text-uppercase">Harsh Deshwal</h4>
                                <p>
                                    A computer science under graduate, pursuing B.Tech. from VIT Chennai. I along with my teammates and skills developed the cure of the sleeping problems called DORMIO.
                                </p>
                                <a href="https://linkedin.com/in/harsh-deswal-87400a223/" target="_blank" rel="noreferrer" className="btn">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;
