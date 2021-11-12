import React from "react";

const Team = () => {
    return (
        <>
            <div className="team container-fluid">
                <h2 className="text-center my-4">TEAM MEMBERS</h2>
                <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade container-fluid"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <img src="https://source.unsplash.com/900x900/?avatar" className="d-block" alt="Team Member 1" />
                            <div>
                                <h4 className="fw-bold">NAME 1</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus in, animi eveniet repudiandae sequi voluptatibus aperiam, placeat eligendi et repellat tempora? Asperiores natus sequi aut dignissimos perferendis ratione inventore consectetur.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src="https://source.unsplash.com/900x900/?avatar" className="d-block" alt="Team Member 2" />
                            <div>
                                <h4 className="fw-bold">NAME 2</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus in, animi eveniet repudiandae sequi voluptatibus aperiam, placeat eligendi et repellat tempora? Asperiores natus sequi aut dignissimos perferendis ratione inventore consectetur.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src="https://source.unsplash.com/900x900/?avatar" className="d-block" alt="Team Member 3" />
                            <div>
                                <h4 className="fw-bold">NAME 3</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus in, animi eveniet repudiandae sequi voluptatibus aperiam, placeat eligendi et repellat tempora? Asperiores natus sequi aut dignissimos perferendis ratione inventore consectetur.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src="https://source.unsplash.com/900x900/?avatar" className="d-block" alt="Team Member 4" />
                            <div>
                                <h4 className="fw-bold">NAME 4</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus in, animi eveniet repudiandae sequi voluptatibus aperiam, placeat eligendi et repellat tempora? Asperiores natus sequi aut dignissimos perferendis ratione inventore consectetur.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src="https://source.unsplash.com/900x900/?avatar" className="d-block" alt="Team Member 5" />
                            <div>
                                <h4 className="fw-bold">NAME 5</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus in, animi eveniet repudiandae sequi voluptatibus aperiam, placeat eligendi et repellat tempora? Asperiores natus sequi aut dignissimos perferendis ratione inventore consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
            </div>
        </>
    );
};

export default Team;
