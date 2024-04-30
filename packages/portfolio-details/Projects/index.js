const Projects = [
  {
    name: "TrekLicious",
    github: "https://github.com/akshat-g-07/TrekLicious-frontend",
    live: "https://treklicious.onrender.com/",
    skills: ["NodeJS", "MongoDB", "ExpressJS", "ReactJS", "MaterialUI"],
    images: [
      "land01.png",
      "signup.png",
      "land03.png",
      "login.png",
      "land02.png",
    ],
    description: [
      "Developed a preference-based full-stack web application with a user-friendly interface that caters to trek lovers.",
      "Implemented user authentication system using JWT, allowing users to securely signup, login and update they profiles.",
      "The website’s main objective is to assist trek lovers in determining the appropriate treks for themselves",
      "User can also create a favorite list and add/remove items from their list.",
    ],
  },
  {
    name: "RatVenture",
    github: "",
    live: "https://rat-frontend.onrender.com/",
    skills: ["ReactJS", "ExpressJS", "Javascript", "MaterialUI"],
    images: [
      "random.png",
      "results.png",
      "test.png",
      "no_result.png",
      "home.png",
    ],
    description: [
      "Visualization of famous Rat-In-A-Maze problem.",
      "Engineered an interactive interface empowering users to dynamically configure matrix dimensions, starting point, blocks, and destination point.",
      "Incorporated functionality for users to opt for random generation of the aforementioned parameters, enhancing flexibility and user experience.",
      "User will be able to see all the viable routes from starting point to destination point.",
    ],
  },
  {
    name: "GrillZilla",
    github: "https://github.com/akshat-g-07/GrillZilla",
    live: "https://restaurant-bulc.onrender.com/",
    skills: ["ReactJS", "Axios"],
    images: [
      "land01.png",
      "location.png",
      "land02.png",
      "client.png",
      "chefs.png",
    ],
    description: [
      "A frontend application to show the menu of the restaurant incorporating API integration.",
      "Implemented Axios API to acquire user’s location and show him the restaurants closest to him.",
      "Using Google Maps API user can see the directions to the restaurant location from his/her.",
    ],
  },
];
export default Projects;
