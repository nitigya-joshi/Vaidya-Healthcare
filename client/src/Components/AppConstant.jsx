export const links = [
  {
    id: "1",
    link: "/",
    text: "Home",
  },
  {
    id: "2",
    link: "/doctors",
    text: "Doctors",
  },
  {
    id: "3",
    link: "/about",
    text: "About",
  },
  {
    id: "4",
    link: "/contact",
    text: "Contact",
  },
];

export const socialIcons = [
  { text: "Twitter", icon: "fab fa-twitter", link: "" },
  { text: "Facebook", icon: "fab fa-facebook", link: "" },
  { text: "Instagram", icon: "fab fa-instagram", link: "" },
  { text: "Pinterest", icon: "fab fa-pinterest", link: "" },
  { text: "YouTube", icon: "fab fa-youtube", link: "" },
];

export const profile = [
  {
    id: 1,
    title: "Live Doc",
    img: require("../img/banner_1.png"),
    text:
      "Connect securely anytime, anywhere with 24*7 doctors available just for you. Completely private and confidential.",
    icon: "fad fa-stethoscope",
  },
  {
    id: 2,
    title: "Appointments",
    img: "https://i.imgur.com/EMcyIBn.png",
    text:
      "Book appointments with our certified partner doctors, clinics, hospitals and receive personalized care.",
    icon: "fad fa-file-prescription",
  },
  {
    id: 3,
    title: "Chat Bot",
    img: "https://i.imgur.com/PldPiNS.png",
    text:
      "Our chatbot will try its best to clear your queries instantly. It will get you up with commonly asked questions.",
    icon: "fad fa-user-robot",
  },
];


export const services = [
  {
    text: "Powerful, simple and responsive appointment forms!",
    title: "Book Apointment",
    icon: "fad fa-file-prescription",
    link: "/services",
  },
  {
    text: "AI powered bot for resolving common doubts!",
    title: "Chatbot",
    icon: "fad fa-user-robot",
    link: "/services",
  },
  {
    text: "Profile dashboard for both doctors and patients!",
    title: "Personalized Dashboard",
    icon: "fad fa-window-alt",
    link: "/services",
  },
  {
    text: "We offer lowest price for your health plans!",
    title: "Low cost",
    icon: "fad fa-usd-circle",
    link: "/services",
  },
];

export const contactBoxes = [
  {
    title: "Call Us",
    text: "+91 1234567890",
    link: "tel:123456789",
    icon: "fad fa-phone",
    notBlank: true,
  },
  {
    title: "Email Us",
    text: "contact@vaidyahealth.com",
    link: "mailto:customersupport@vaidyahealth.com",
    icon: "fad fa-envelope",
  },
  {
    title: "Visit Us",
    text: "IIIT Sri City",
    link: "https://goo.gl/maps/EmzLFogcUes8PEAd8",
    icon: "fad fa-map-marker-alt",
  },
];

export const style = {
  NotificationItem: {
    DefaultStyle: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      border: "solid 1px rgb(0, 0,0,0)",
      boxShadow: "var(--light-shadow)",
      height: "45px",
      display: "flex",
      alignItems: "center",
    },
    warning: {},
  },
};

export const contactInputs = [
  {
    text: "Full Name",
    value: "name",
    name: "form-name",
  },
  {
    text: "Email",
    value: "email",
    name: "form-email",
  },
  {
    text: "Message",
    value: "msg",
    textarea: true,
    name: "form-message",
  },
];

export const loginInputs = [
  {
    text: "Email",
    value: "email",
    name: "login-email",
    type: "email",
  },
  {
    text: "password",
    value: "password",
    name: "login-password",
    type: "password",
  }
];

export const signupInputs = [
  {
    text: "Name",
    value: "name",
    name: "signup-name",
    type: "text",
  },
  {
    text: "Email",
    value: "email",
    name: "signup-email",
    type: "email",
  },
  {
    text: "Password",
    value: "password",
    name: "signup-password",
    type: "password",
  },
  {
    text: "Confirm password",
    value: "confirmPassword",
    name: "signup-hospital-confirm-password",
    type: "password",
  },
];

export const gridservices = [
  {
    img: "https://xsgames.co/randomusers/assets/avatars/pixel/1.jpg",
    title: "Sudeep Gangwar",
    text: "UG3",
    icon: "fad fa-solid fa-info",
  },
  {
    reverse: true,
    img: "https://xsgames.co/randomusers/assets/avatars/pixel/2.jpg",
    title: "Gulshan Kumar",
    text: "UG3",
  },
  {
    img: "https://xsgames.co/randomusers/assets/avatars/pixel/3.jpg",
    title: "Nitigya Joshi",
    text: "UG3",
  },

  {
    reverse: true,
    img: "https://xsgames.co/randomusers/assets/avatars/pixel/6.jpg",
    title: "Aryan Verma",
    text: "UG3",
  },

  {
    img: "https://xsgames.co/randomusers/assets/avatars/pixel/7.jpg",
    title: "Anmol Singh",
    text: "UG3",
  },
];

export const appointmentFormFields = [
  {
    id: "patientFirstName",
    name: "patientFirstName",
    type: "text",
    placeholder: "First Name",
    errorMessage: "First Name is required",
    label: "Patient's First Name",
    required: true,
  },
  {
    id: "patientLastName",
    name: "patientLastName",
    type: "text",
    placeholder: "Last Name",
    errorMessage: "Last Name is required",
    label: "Patient's Last Name",
    required: true,
  },
  {
    id: "patientMobileNo",
    name: "patientMobileNo",
    type: "tel",
    errorMessage: "Mobile pattern: 0123456789 or +910123456789",
    placeholder: "Mobile Number",
    label: "Patient's Mobile No.",
    pattern: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
    minLength: "10",
    maxLength: "13",
  },
  {
    id: "patientDOB",
    name: "patientDOB",
    type: "text",
    errorMessage:
      "Date Of Birth is required & Age will be set according to DOB",
    placeholder: "DOB",
    label: "Patient's DOB",
    max: "",
    required: true,
  },
  {
    id: "patientAge",
    name: "patientAge",
    type: "number",
    errorMessage: "Age is required",
    placeholder: "Age",
    label: "Patient's Age",
    required: true,
    disabled: true,
  },
  {
    id: "patientEmail",
    name: "patientEmail",
    type: "email",
    errorMessage: "Email is required",
    placeholder: "Email",
    label: "Patient's Email",
    pattern: `[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}`,
    required: true,
  },
  {
    id: "patientSex",
    name: "patientSex",
    type: "radio",
    errorMessage: "Sex of the person is required",
    placeholder: "Select Sex",
    label: "Patient's Sex",
    required: true,
    setSpan: false,
  },
  {
    id: "patientState",
    name: "patientState",
    type: "radio",
    errorMessage: "State is required",
    placeholder: "Select State",
    label: "State",
    required: true,
    setSpan: false,
  },
  {
    id: "patientCity",
    name: "patientCity",
    type: "radio",
    errorMessage: "City is required",
    placeholder: "Select City",
    label: "City",
    required: true,
    setSpan: false,
  },
  {
    id: "appointmentReason",
    name: "appointmentReason",
    type: "text-area",
    placeholder: "Appointment Reason",
    label: "Appointment Reason",
  },
];

export const doctorFormFields = [
  {
    id: "doctorName",
    name: "doctorName",
    type: "text",
    placeholder: "Doctor's Name",
    label: "Doctor's Name",
    required: false,
    disabled: true,
  },
  {
    id: "doctorSpecialization",
    name: "doctorSpecialization",
    type: "text",
    placeholder: "Doctor's Specialization",
    label: "Doctor's Specialization",
    required: false,
    disabled: true,
  },
  {
    id: "appointmentDate",
    name: "appointmentDate",
    type: "text",
    errorMessage:
      "Please Provide the correct date on which you want the Appointment",
    placeholder: "Appointment Date",
    label: "Appointment Date",
    min: "",
    required: false,
  },
  {
    id: "appointmentTime",
    name: "appointmentTime",
    type: "text",
    errorMessage: "Please Provide the time on which you want the Appointment",
    placeholder: "Appointment Time",
    label: "Appointment Time",
    required: false,
  },
  {
    id: "appointmentLocState",
    name: "appointmentLocState",
    type: "text",
    placeholder: "Appointment State or Union Territorie",
    label: "Appointment State or Union Territorie",
    required: false,
    disabled: true,
  },
  {
    id: "appointmentLocCity",
    name: "appointmentLocCity",
    type: "text",
    placeholder: "Appointment City",
    label: "Appointment City",
    required: false,
    disabled: true,
  },
];

export const applicationInputs = [
  {
    "id": 1,
    text: "Name",
    value: "name",
    name: "application-name",
    type: "text",
  },
  {
    "id": 2,
    text: "Category",
    value: "category",
    name: "application-category",
    type: "text",
  },
  {
    "id": 3,
    text: "Fee",
    value: "fee",
    name: "application-fee",
    type: "number",
  },
  {
    "id": 4,
    text: "Education",
    value: "education",
    name: "application-education",
    type: "text",
  },
  {
    "id": 5,
    text: "Experience",
    value: "experience",
    name: "application-experience",
    type: "number",
  },
  
  {
    "id": 6,
    text: "Email",
    value: "email",
    name: "applicaiton-email",
    type: "email",
  },
  {
    "id": 7,
    text: "Phone",
    value: "phone",
    name: "application-phone",
    type: "number",
  },
  {
    "id": 8,
    text: "Address",
    value: "address",
    name: "application-address",
    type: "text",
  },
]