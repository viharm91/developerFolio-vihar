/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vihar Manchala",
  title: "Hi all, I'm Vihar Manchala",
  subTitle: emoji(
    "An innovative lead architect software engineer with 10 years of experience in designing, developing, and maintaining operationally performant software applications and platforms. Skilled in software architecture, system planning, deployment, and infrastructure management. Expertise in performance optimization and continuous improvement."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/viharm91",
  linkedin: "https://www.linkedin.com/in/vihar-manchala-82662911b/",
  gmail: "viharmanchala@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@viharmanchala",
  stackoverflow: "https://stackoverflow.com/users/10231115/vihar-manchala",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Backend Lead Engineer | Architect of Backend worldclass event driven systems, Graphql and Restful Services",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Missouri Univeristy of Science and Technology",
      logo: require("./assets/images/mstLogo.png"),
      subHeader: "Master of Science",
      duration: "January 2015 - May 2016",
      desc: "",
      descBullets: [
      ]
    },
    {
      schoolName: "Gokaraju Rangaraju institute of ",
      logo: require("./assets/images/grietLogo.png"),
      subHeader: "Bachelor of Science",
      duration: "Aug 2008 - April 2012",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer III/ Senior Software Engineer",
      company: "Walmart Global Technology",
      companylogo: require("./assets/images/Walmart_logo.png"),
      date: "July 2021 – Present",
      desc: "",
      descBullets: [
      ]
    },
    {
      role: "Systems Analyst/Associate Software Engineer/Software Engineer",
      company: "Carfax",
      companylogo: require("./assets/images/carfax_logo.png"),
      date: "June 2016 – July 2021",
      desc: ""
    },
    {
      role: "System Analyst",
      company: "Sonata Software",
      companylogo: require("./assets/images/sonata_logo.png"),
      date: "July 2012 – Dec 2014",
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Awards 🏆 "),
  subtitle:
    "Awards Recived for the technical, and the business impact in organizations!",

  achievementsCards: [
    {
      title: "Technical Excellence Award @ Walmart Global Tech - Apr 2024",
      subtitle:
        "The Technical Excellence Award is a prestigious recognition granted to individuals or teams who have made a significant technical impact on a product or solution. This award celebrates innovation, mastery, and the application of advanced technologies. Recipients of this award demonstrate deep technical expertise, a commitment to quality, and an ability to leverage cutting-edge methodologies to drive tangible results that advance the state of the art in their field.",
      image: require("./assets/images/Walmart_logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
      ]
    },
    {
      title: "Bravo Award @ Walmart Global Tech - Jan 2023, Aug 2022, Dec 2021",
      subtitle:
        "The Bravo Award recognizes engineers who go above and beyond in their work, demonstrating exceptional dedication and achievement. This award celebrates individuals who consistently exceed expectations, contribute to the success of projects, and deliver outstanding results through their technical skills, problem-solving abilities, and proactive efforts.",
      image: require("./assets/images/Walmart_logo.png"),
      imageAlt: "Google Assistant Action Logo"
      // footerLink: [
      //   {
      //     name: "View Google Assistant Action",
      //     url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
      //   }
      // ]
    },

    {
      title: "Spot Award @ Carfax - Nov 2020",
      subtitle: "A Spot Award is a recognition given spontaneously to reward outstanding performance or contributions on the spot. It is typically granted for exceptional achievements or efforts that go beyond regular job expectations, such as solving a critical problem, delivering a project ahead of schedule, or demonstrating exemplary teamwork.",
      image: require("./assets/images/carfax_logo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
          // name: "Final Project",
          // url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/p/86f9aabb19dc",
      title: "The Hidden Cost of Frequent Kafka Consumer Commits",
      description:
        "Kafka has revolutionized real-time data processing with its distributed messaging system, but its efficiency heavily relies on how consumers interact with data. One common practice among developers is frequent consumer commits, yet this seemingly innocuous action can have significant implications on system performance and stability."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Speaker Sessions",
  subtitle: emoji(
    "Love to share insights as an industry expert: Harnessing Innovation, AI Integration, and Best Practices for Building Scalable, Secure Software Solutions."
  ),

  talks: [
    {
      title: "Talking AI 2024 - AI & Retail",
      subtitle: "A discussion on building and retaining engineering talent in AI, with a lens on the retail industry experts.",
      event_url: "https://www.wework.com/info/talking-ai-nyc?utm_medium=email&utm_source=external_partner_email&utm_campaign=202408-GLOBAL-GLOBAL-ALL-None-NYC_TalkingAI_Event_2024_Intellibus_Partner&SFID="
    },
    {
      title: "Black is Tech - Billion Number Traffic: Engineering a reliable system",
      subtitle: "A talk on building a reliable system to process a system with billion transactions or events.",
      event_url: "https://blackistechconference.com/speaker/vihar-manchala/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss about speaker session, judging, and a technical review or just want to say hi? My Inbox is open for all.",
  number: "+1-5732021540",
  email_address: "viharmanchala@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
