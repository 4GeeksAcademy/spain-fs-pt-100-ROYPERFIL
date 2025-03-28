import { left, right } from "@popperjs/core";
import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false)
    cover = `<div class='cover'><img src ="${variables.backgroundfALSA}"/></div>`;
  const NameUser = variables.name ? `${variables.name}` : "Usuario";
  const lastName = variables.lastName ? `${variables.lastName}` : "Usuario";
  const RoleUser = variables.role ? `${variables.role}` : "Streamer";
  const UserCity = variables.city ? `${variables.city}` : "Barcelona";
  const UserCountry = variables.country ? `${variables.country}` : "Spain";
  const Tweeter = variables.twitter
    ? `${variables.twitter}`
    : "https://twitter.com/4geeksacademy";

  const GIThub = variables.github
    ? `${variables.github}`
    : "https://github.com/hedrickantonio";

  const linKeDin = variables.linkedin
    ? `${variables.linkedin}`
    : "https://www.linkedin.com/in/rodolfo-antonio-58561a312";

  const InstaGram = variables.instagram
    ? `${variables.instagram}`
    : "https://www.instagram.com/4geeksacademyes/";

  let posicion = variables.socialMediaPosition
    ? `${variables.socialMediaPosition}`
    : "position-right";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover} 
          <img src="${variables.avatarURL}" class="photo" />
          <h1> ${NameUser} </h1>
          <h3> ${lastName} </h3>
          <h3>${RoleUser}</h3>
          <h3>${UserCity}</h3>
          <h3>${UserCountry}</h3>
          <ul class=${posicion}>
            <li><a href=${Tweeter}><i class="fab fa-twitter"></i></a></li>
            <li><a href=${GIThub}><i class="fab fa-github"></i></a></li>
            <li><a href=${linKeDin}><i class="fab fa-linkedin"></i></a></li>
            <li><a href=${InstaGram}><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://th.bing.com/th/id/R.6ec19ee1c315c3dd1dc5b6b85ed5061a?rik=oO5I4FD6TOLbLA&pid=ImgRaw&r=0",
    // this is the url for the profile avatar
    avatarURL:
      "https://avatars.githubusercontent.com/u/197240898?s=400&u=95a3cc8163996fbe150d033b8f09c7485e752cd5&v=4",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    backgroundfALSA:
      "https://www.itmastersmag.com/wp-content/uploads/2021/01/shutterstock_1078387013-scaled.jpg",
    // CREACION ROY
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
