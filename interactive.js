
// 1. Interactive Button: Toggle Background Color
const toggleBgBtn = document.getElementById("toggle-bg-btn");
let isBlue = false;

toggleBgBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = isBlue ? "white" : "lightblue";
  isBlue = !isBlue;
});

// 2. Slider with Real-Time Feedback
const textSlider = document.getElementById("text-slider");
const textToResize = document.getElementById("text-to-resize");

textSlider.addEventListener("input", () => {
  textToResize.style.fontSize = `${textSlider.value}px`;
});

// 3. Modal with Event Listeners
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modal-overlay");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
});

modalOverlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
});

// 4. Form with Validation
const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", (event) => {
  let isValid = true;

  // Name validation
  if (nameInput.value.length < 3) {
    nameError.textContent = "Name must be at least 3 characters long.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.textContent =
      "Password must be at least 8 characters long, contain one uppercase letter, and one number.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (!isValid) {
    event.preventDefault(); // Prevent form submission
  }
});

// 5. Dropdown Menu (Bonus)
const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownMessage = document.getElementById("dropdown-message");

dropdownMenu.addEventListener("change", () => {
  dropdownMessage.textContent = `You selected: ${dropdownMenu.value}`;
});
