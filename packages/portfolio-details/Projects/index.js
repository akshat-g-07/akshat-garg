const Projects = [
  {
    name: "PromptDB",
    github: "",
    live: "https://www.promptdb.cc/?ref=rec",
    skills: ["Gemini AI Studio", "NextJS"],
    images: ["chat.png", "share.png", "new-chat.png", "sidebar.png", "nlp.png"],
    description: [
      "Developed an AI Powered Application that answers questions about SQL/NOSQL Databases.",
      "Application uses NLP and generate accurate answers to user’s questions.",
      "Leveraged prompt engineering powered by Gemini 2.5 Flash from Google Gemini Studio.",
    ],
  },
  {
    name: "ROI Monk",
    github: "https://github.com/akshat-g-07/roi-monk",
    live: "https://www.roi-monk.com/?ref=rec",
    skills: ["NextJS", "Tailwind CSS"],
    images: [
      "privacy.png",
      "reports.png",
      "responsive.png",
      "portfolio.png",
      "feedback.png",
    ],
    description: [
      "Responsive application to keep a track of investments and returns on investments.",
      "User can create multiple portfolios and add multiple transactions of both credit and debit type to the portfolio.",
      "User can configure preferred currency which is made available across the app using Context API.",
      "Created a comprehensive dashboard to display reports using graphs for clear and insightful data visualization.",
      "User can also see ROI of individual portfolio, on portfolio page.",
    ],
  },
  {
    name: "TrekLicious",
    github:
      "https://github.com/akshat-g-07/akshat-garg/blob/main/apps/treklicious-fe/README.md",
    live: "https://treklicious.akshat-garg.com/?ref=rec",
    skills: ["NodeJS", "MongoDB", "ExpressJS", "ReactJS", "MaterialUI"],
    images: [
      "land01.png",
      "signup.png",
      "land03.png",
      "login.png",
      "land02.png",
    ],
    description: [
      "Full-Stack application built for trek lovers, providing personalized trek recommendations based on user preferences.",
      "Used JWT for authentication, react-router for navigation, tanstack query for querying apis.",
      "User can sign-up, log-in, add/remove treks in his favorites list, edit his profile.",
    ],
  },
  {
    name: "RatVenture",
    github:
      "https://github.com/akshat-g-07/akshat-garg/blob/main/apps/ratventure-fe/README.md",
    live: "https://ratventure.akshat-garg.com/?ref=rec",
    skills: ["ReactJS", "ExpressJS", "Javascript"],
    images: [
      "random.png",
      "results.png",
      "test.png",
      "no_result.png",
      "home.png",
    ],
    description: [
      "Visualization of famous Rat-In-A-Maze problem.",
      "Engineered an interactive interface for users to dynamically configure matrix dimensions, starting point, blocks, and destination point.",
      "User will be able to see all the viable routes from starting point to destination point.",
    ],
  },
];
export default Projects;
