// -> Making navbar transparent until we scroll -> Değerlendirme Formu : 9
const navbar = document.querySelector(".navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    // -> Adding transparency effect when scrolling
    navbar.style.backgroundColor =
      window.scrollY > 50 ? "rgba(53, 85, 146, 0.9)" : "transparent";
  });
}

//#region -> 'OUR CLASSES' Area -> Değerlendirme Formu : 11
const classButtons = document.querySelectorAll(".class-btn");
const yogaInfo = document.querySelector(".yoga-info");

// * I managed class actions with objects and as final set inner html with loop

if (classButtons && yogaInfo) {
  // -> Images from for different class types
  const classImages = {
    Yoga: "images/yoga.jpg",
    Group: "images/group.webp",
    Solo: "images/solo.jpg",
    Stretching: "images/stret.webp",
  };

  // -> Info about each class type
  const classSchedules = {
    Yoga: {
      title: "Why are your Yoga?",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      schedule: {
        "Monday-Tuesday": "9:00am - 10:00am",
        "Wednesday-Friday": "3:00pm - 5:00pm",
      },
    },
    Group: {
      title: "Why join Group Classes?",
      description: "Experience teamwork and motivation in a group setting...",
      schedule: {
        "Monday-Wednesday": "10:00am - 11:00am",
        "Friday-Sunday": "5:00pm - 6:00pm",
      },
    },
    Solo: {
      title: "Solo Training for Individual Growth",
      description: "Focus on your personal goals with solo sessions...",
      schedule: {
        "Monday-Friday": "8:00am - 9:00am",
        Saturday: "2:00pm - 3:00pm",
      },
    },
    Stretching: {
      title: "Stretching for Flexibility",
      description: "Improve flexibility and relieve tension...",
      schedule: {
        "Monday-Wednesday": "7:00am - 8:00am",
        "Thursday-Sunday": "6:00pm - 7:00pm",
      },
    },
  };

  // -> Handle clicking class buttons
  classButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // -> Removing active class from all buttons and add to clicked one
      classButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      updateClassInfo(button.textContent);
    });
  });

  // -> Updates the info shown for each class type
  function updateClassInfo(className) {
    const info = classSchedules[className];
    const imgSrc = classImages[className];

    if (info && imgSrc) {
      // -> Build the HTML for class info I mentioned above as *
      yogaInfo.innerHTML = `
                <div>
                    <h3>${info.title}</h3>
                    <p>${info.description}</p>
                    <h3>When comes ${className} Your Time.</h3>
                    <div class="schedule">
                        ${Object.entries(info.schedule)
                          .map(([days, time]) => `<p>${days}: ${time}</p>`)
                          .join("")}
                    </div>
                </div>
                <img src="${imgSrc}" alt="${className} Class">
            `;
    }
  }

  // -> Set default class info when page loads
  document.addEventListener("DOMContentLoaded", () => {
    const defaultButton = document.querySelector(".class-btn.active");
    if (defaultButton) {
      updateClassInfo(defaultButton.textContent);
    }
  });
}

//#endregion

//#region 'BMI Calculator' Area -> Değerlendirme Formu : 8

// -> Getting dom and defining min max of bmi
document.addEventListener("DOMContentLoaded", () => {
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const bmiCursor = document.querySelector("#bmi-cursor");
  const chartElement = document.querySelector(".bmi-chart");

  const minBMI = 18.5;
  const maxBMI = 35;

  // -> Function updating cursor according to user inputs
  function updateCursor() {
    const chartWidth = chartElement.getBoundingClientRect().width; // Dynamically get chart width
    const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      bmiCursor.style.left = `0px`; // Reset cursor position
      return;
    }

    let bmi = (weight / (height * height)).toFixed(1);

    bmi = Math.max(minBMI, Math.min(bmi, maxBMI));

    const cursorPosition = ((bmi - minBMI) / (maxBMI - minBMI)) * chartWidth;

    // -> Apply position within the chart boundaries
    bmiCursor.style.left = `${cursorPosition}px`;
  }

  // -> Triggered with every input
  heightInput.addEventListener("input", updateCursor);
  weightInput.addEventListener("input", updateCursor);
});

//#endregion

//#region 'Our Best Trainers' Area -> Değerlendirme Formu : 12

const trainerCards = document.querySelectorAll(".trainer-card");

// -> Loop through the trainer cards
trainerCards.forEach((card, index) => {
  const trainerInfo = card.querySelector(".trainer-info");

  // -> For the first two cards, initially hide the trainer info text
  if (index < 2) {
    trainerInfo.classList.add("hidden"); // Hide by default
  }

  // -> Add hover event listener for the first two cards
  if (index < 2) {
    card.addEventListener("mouseenter", () => {
      trainerInfo.classList.remove("hidden"); // -> Show text on hover
    });
    card.addEventListener("mouseleave", () => {
      trainerInfo.classList.add("hidden"); // -> Hide text when not hovering
    });
  }

  // -> For the third card, the text is always visible
  if (index === 2) {
    trainerInfo.classList.remove("hidden");
  }
});

//#endregion

// -> Form operations like default validation in 'Contact Us' area, in my scenario no backend communication at least for now
const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // ->Basic form validation
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector("textarea").value;

  if (name && email && message) {
    alert("Message sent successfully!");
    contactForm.reset();
  } else {
    alert("Please fill in all fields");
  }
});

// -> Google Maps Integration -> Değerlendirme Formu : 13
function initMap() {
  const location = { lat: 40.7128, lng: -74.006 }; // -> Random location points

  const map = new google.maps.Map(document.querySelector(".map-container"), {
    center: location,
    zoom: 15,
    styles: [
      {
        featureType: "all",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }],
      },
    ],
  });

  new google.maps.Marker({
    position: location,
    map: map,
    title: "Our Location",
  });
}

// -> Load Google Maps API asynchronously I defined above ( API Key is 'key=' part from google cloud)
function loadGoogleMapsAPI() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCfIwrHjJpw3x2_sAE6WXg4WqV0Hru70IU&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// -> And finally after settings of map calling the function to load the Google Maps API
loadGoogleMapsAPI();
