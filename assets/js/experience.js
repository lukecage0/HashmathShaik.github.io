AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research Assistant",
    cardImage: "assets/images/experience-page/Lakehead-University-Logo.png",
    place: "Lakehead University",
    time: "(May, 2023 - Present)",
    desp: "<ol><li>Working on Mitacs Sponsored Research Project under Professor Sabah Mohammad.</li><li> Spearheaded the development of an advanced deep learning-based Q&A system utilizing transformer models like BERT and GPT, specifically tailored to address PICO clinical questions, enhancing the practice of evidence-based medicine.</li><li>Conducted comprehensive analysis on data collected from more than 50 team interactions involving 3 speakers, leading to a significant 24% improvement in consensus-reaching strategies.</li><li>Innovated a two-stage bootstrapping process complemented by patch attention mechanisms, significantly improving the identification and relevancy of clinical evidence, thereby achieving state-of-the-art performance in extracting and summarizing pertinent medical research findings to support clinical decision-making.</li></ol>",
  },
  {
    title: "Full Stack Developer - Aurora Constellations",
    cardImage: "assets/images/experience-page/aurora.jpeg",
    place: "Thunder Bay",
    time: "(May, 2023 - Present)",
    desp: "<ol><li>Developed an EHR visualization software for the healthcare sector, utilizing Java, Spring Boot, Angular, JDBC, and MySQL to facilitate the effective visualization and management of electronic health records.</li><li> Architected RESTful APIs and responsive user interfaces leveraging Spring Boot, Hibernate, HTML, CSS, Bootstrap, and transitioned from Angular to React and Redux, enhancing application performance and user experience.</li><li>Revitalized front-end architecture using advanced JavaScript libraries and frameworks, leading to more dynamic and user-friendly web interfaces, significantly improving interactions with the EHR platform.</li></ol>",
  },
  {
    title: "Full Stack Web Developer",
    cardImage: "assets/images/experience-page/tcs.png",
    place: "Tata Consultancy Services",
    time: "(Aug, 2021 - Aug, 2022)",
    desp: "<ol><li>Took the lead in Java development, integrating Spring MVC to enhance system functionality and user interaction, ensuring seamless operation and data management within the benefits distribution system.</li><li>Implemented rigorous Unit and Integration testing for all new features and enhancements, utilizing Junit and Maven, to maintain high-quality software standards and ensure reliability in benefits management applications.</li><li>Developed an enterprise application to streamline the application and distribution processes for military employee and veteran benefits, focusing on real-time data handling and automation using Java and Spring MVC.</li></ol>",
  },
  {
    title: "DevOps Engineer",
    cardImage: "assets/images/experience-page/trovend.jpeg",
    place: "Trovend Technologies",
    time: "(Jan, 2021 - Aug, 2021)",
    desp: "<ol><li>Focused on containerization and immutable infrastructure. Dockerization of the application has been core to this experience, along with orchestration using Kubernetes.</li><li> Responsible for understanding the interdependencies and structure of systems and implementing this knowledge to improve the build and release processes which allow rapidly evolving product offerings.</li><li>Coordinated with Architects, Software & QA Engineers, to continuously improve the reliability and efficiency of Build and Deployment processes to support every phase of the application deployment.</li></ol>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// // Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Hamari Pahchan",
    cardImage: "assets/images/experience-page/hamari.jpeg",
    description:
      "Me as a volunteer in it took my responsiblity of Fundrising and Social Marketing as my priviledge and worked with atmost dedication and perseverance",
  },
  // {
  //   title: "StudentCode-in 2020",
  //   cardImage: "assets/images/experience-page/2.jpg",
  //   description:
  //     "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  // },
  // {
  //   title: "PClub Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/3.jpg",
  //   description:
  //     "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  // },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Web3athon",
    subtitle: "Participant",
    image: "assets/images/experience-page/web3athon.png",
    desp: "A Hyperlocal, people-first crypto Hackathon",
  },
  // {
  //   title: "ULHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/ulhacks.png",
  //   desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  // },
  // {
  //   title: "WaffleHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/wafflehacks.png",
  //   desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  // },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
