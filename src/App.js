import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-info fixed-top"
        id="sideNav"
      >
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">MAHAMADOU KABBA</span>
          <span class="d-block d-none d-lg-block">
            <img
              class="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="imgs/kabzz.png"
              alt="kabba's selfie image"
            ></img>
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          data-target="#navbarSupportedContent"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#experience">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#awards">
                Certifications
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* page content  */}
      <div class="container-fluid p-0">
        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="about"
        >
          <div class="w-100">
            <div class="kabba">
              <h1 class="mb-3">
                MAHAMADOU
                <span class="text-info">KABBA</span>
              </h1>
            </div>

            <div class="subheading mb-5">
              New York, NY .(347)882-9510.
              <br></br>
              <a href="mailto:name@email.com" class="text-info">
                mkabba34@gmail.com
              </a>
            </div>
            <p class="lead mb-3">
              Full-Stack C# .NET software developer with an interest in DevOps,
              and Cloud Engineering.
            </p>

            <div class="social-icons">
              <a
                class="social-icon"
                href="https://www.linkedin.com/in/mahamadou-kabba-747945221/"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/moekabba">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>

        <hr class="m-0"></hr>

        <section
          class="resume-section p-3 p-lg-5 d-flex justify-content-center"
          id="experience"
        >
          <div class="w-100">
            <h2 class="mb-5">Projects</h2>
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <h3 class="mb-0">MedTrak</h3>
                <div class="subheading mb-3">
                  An App to help you with your medication intake.
                </div>
                <p>
                  This app is developed as your personal pharmacists to help you
                  with your medication intake. A new user will have the option
                  to create an account. An existing user will be able to log in
                  with their credentials. If you are a new user, the aplication
                  will ask you to add you medications (CREATE). If you are an
                  existing user, you will have the option to view your
                  medications (READ). If you meds run out, you can refill or
                  change your medications (UPDATE). If you are no longer on a
                  medication, you can remove or delete that medicine (DELETE).
                </p>

                <div class="social-icons">
                  Github link
                  <br></br>
                  <a
                    class="social-icon"
                    href="https://github.com/220425-Reston-NET/Alphacode-reactFrontEnd"
                  >
                    <i class="social-icon fab fa-github"></i>
                  </a>
                  {/*  backend link */}
                  <a
                    class="social-icon"
                    href="https://github.com/220425-Reston-NET/Alpha_Code_P2"
                  >
                    <i class="social-icon fab fa-github"></i>
                  </a>
                </div>
                <img
                  src={
                    "https://raw.githubusercontent.com/220425-Reston-NET/Alphacode-reactFrontEnd/main/public/images/medtrak.png"
                  }
                  alt="Logo"
                  style={{ width: "80%", height: "35rem" }}
                />
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <h3 class="mb-0">HOF</h3>
                <div class="subheading mb-3">Recipe App for Foodies.</div>
                <p>
                  App that allow users to search food recipes by typing in the
                  ingredient or recipe name. User will be presented with list of
                  recipes with their detailed instructions. This was a group
                  project I worked on.
                </p>

                <div class="social-icons">
                  <p>
                    Github link
                    <br></br>
                    <a
                      class="social-icon"
                      href="https://github.com/jpmare29/project-1-group-8-columbia"
                    >
                      <i class="social-icon fab fa-github"></i>
                    </a>
                  </p>
                </div>

                <iframe
                  src="https://jpmare29.github.io/project-1-group-8-columbia/"
                  style={{ width: "80%", height: "35rem" }}
                ></iframe>
              </div>
            </div>
            <br></br>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <h3 class="mb-0">Weather-Dashboard</h3>
                <div class="subheading mb-3">Weather App</div>
                <p>
                  This is a simple weather app that you can use to see the
                  weather outlook for multiple cities. This app can be use to
                  help plan your trip or an event. This app fetchs its data from
                  OpenWeather APi
                </p>
                <div class="social-icons">
                  <p>
                    Github link
                    <br></br>
                    <a
                      class="social-icon"
                      href="https://github.com/Moekabba/weather-dasboard"
                    >
                      <i class="social-icon fab fa-github"></i>
                    </a>
                  </p>
                </div>

                <iframe
                  src="https://moekabba.github.io/weather-dasboard/"
                  style={{ width: "80%", height: "35rem" }}
                ></iframe>
              </div>
            </div>
            {/* 
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <h3 class="mb-0">Calculator</h3>
                <div class="subheading mb-3">Simple Calculator App</div>
                <p>This is simple calculate app built in vanilla JS</p>
                <div class="social-icons">
                  <p>
                    Github link
                    <br></br>
                    <a
                      class="social-icon"
                      href="https://github.com/Moekabba/simple-js-calculator"
                    >
                      <i class="social-icon fab fa-github"></i>
                    </a>
                  </p>
                </div>

                <div class="p-2" id="p2">
                  <iframe
                    src="https://moekabba.github.io/simple-js-calculator/"
                    style={{ width: "280%", height: "35rem" }}
                  ></iframe>
                </div>
              </div>
            </div> */}

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <h3 class="mb-0">Quiz Game</h3>
                <div class="subheading mb-3">Code Quiz Game</div>
                <p>
                  Simple JavaScript and interactive multiple-choice game for
                  learning JS fundamentals. This game will score your high
                  scores so you can measure and keep track of your progress.
                  (work in progress)
                </p>
                <div class="social-icons">
                  <p>
                    Github link
                    <br></br>
                    <a
                      class="social-icon"
                      href="https://github.com/Moekabba/code-quiz"
                    >
                      <i class="social-icon fab fa-github"></i>
                    </a>
                  </p>
                </div>

                <div id="p2">
                  {/* <iframe
                    src=" https://moekabba.github.io/code-quiz/"
                    style={{ width: "80%", height: "35rem" }}
                  ></iframe> */}
                </div>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <h3 class="mb-0">Beads Store</h3>
                <div class="subheading mb-3">
                  Full Stack .Net and React Ecommerce Bead Store
                </div>
                <p>
                  Ecommerce store built in .NET REST framework and React.
                  Includes Stripe payments, shopping cart, profile manager, and
                  different variations of products. Authorization, signup, and
                  login state is handled via Redux.
                </p>
                <div class="social-icons">
                  <p>
                    Github link
                    <br></br>
                    <a class="social-icon" href="https://github.com/Moekabba/my-e-commerce-app">
                      <i class="social-icon fab fa-github"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div class="resume-content">
                <h3 class="mb-0">WDA website</h3>
                <div class="subheading mb-3">wordpress website</div>
                <p> A simple wordpress website to present services</p>
                <p>
                  This is my first wordpress website I created for a
                  construction company located in The Gambia
                </p>

                <div class="social-icons">
                  <p>
                    Github link
                    <br></br>
                    <a class="social-icon" href="https://wdagambia.com">
                      <i class="social-icon fab fa-wordpress"></i>
                    </a>
                  </p>
                </div>
                <iframe
                  src=" https://wdagambia.com/"
                  style={{ width: "120%", height: "35rem" }}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <hr class="m-0"></hr>

        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
        >
          <div class="w-100">
            <h2 class="mb-5">Education</h2>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <h3 class="mb-0">BCC of The City University of New York</h3>
                <div class="subheading mb-3">Associate of Science </div>
                <div>Electrical Engineering Technology</div>
                {/* <p>GPA: 2.9</p> */}
              </div>
              <div class="resume-date text-md-right">
                <span class="text-info">January 2018 - May 2021</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div class="resume-content">
                <h3 class="mb-0">NYC College of Technology</h3>
                <div class="subheading mb-3">Bachelor of science</div>
                <div>Electrical Engineering Technology</div>
                {/* <p>GPA: 0.0</p> */}
              </div>
              <div class="resume-date text-md-right">
                <span class="text-info"> Current</span>
              </div>
            </div>
          </div>
        </section>

        <hr class="m-0"></hr>

        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="skills"
        >
          <div class="w-100">
            <h2 class="mb-5">Skills</h2>

            <div class="subheading mb-3">Programming Languages & Tools</div>

            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-vuejs"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js"></i>
              </li>

              <li class="list-inline-item">
                <i class="fab fa-wordpress"></i>
              </li>
              <li class="list-inline-item">
                C#<i class="#"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-docker"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-aws"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-github"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-npm"></i>
              </li>
            </ul>

            <div class="subheading mb-3">WORKFLOW</div>
            <ul class="fa-ul mb-0">
              <li>
                <i class="fa-li fa fa-check"></i>
                Agile Development & Scrum
              </li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Cross Functional Teams
              </li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Responsive Design
              </li>
              {/* <li>
                <i class="fa-li fa fa-check"></i>
                Git & Github
              </li>
              <li>
                <i class="fa-li fa fa-check"></i>
                AutoCad & Revit
              </li> */}
            </ul>
          </div>
        </section>

        <hr class="m-0"></hr>

        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="interests"
        >
          <div class="w-100">
            <h2 class="mb-5">Hobbies and Interests </h2>
            <p>
              In my spare time, I like to play soccer. My friends and I meet up
              about every Sunday to play friendly games near my house.
            </p>
            <p>
              {" "}
              I like CAD drawings, mainly, with AutoCad & Revit. I also enjoy
              playing videogames like FIFA.
            </p>

            <p>
              I also like spending time with my family and friends.
            </p>

            <p class="mb-0"></p>
          </div>
        </section>

        <hr class="m-0"></hr>

        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="awards"
        >
          <div class="w-100">
            <h2 class="mb-5">Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                Full Stack Web Development
              </li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                AWS CCP
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default App;
