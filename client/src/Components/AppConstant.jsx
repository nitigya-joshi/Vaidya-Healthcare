export const works = [
  {
    title: "ShopiumX",
    banner: "https://i.imgur.com/bIJWflc.png",
    icon: "fad fa-browser",
    type: "Web App",
    link: "/works/shopiumx",
    featuredimg: [
      "https://i.imgur.com/LHv2Wxo.png",
      "https://i.imgur.com/q5svvof.png",
      "https://i.imgur.com/FFX3ubC.png",
    ],
    text: "ShopiumX is an ecommerce app that allows users to navigate through a bunch of products. ",
    filterby: "webapps",
    languages: "React, Firebase, HTML/CSS",
    colors: ["#000", "#25adff", "#add8e6"],
    industry: "Ecommerce",
    service: "Shopping",
    donut: {
      series: [513, 700, 362],
      labels: ["UX", "UI", "Design"],
    },
    area: {
      series: [2, 30, 80, 10, 21, 38, 23, 21, 19, 10, 0, 0],
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    url: "https://csb-xmzrv-2frg0dlqe-joshua131313.vercel.app/",
  },
  {
    title: "Chatify",
    banner: "https://i.imgur.com/z783de3.png",
    icon: "fad fa-browser",
    type: "Web App",
    link: "/works/chatify",
    featuredimg: [
      "https://i.imgur.com/dJDgwHw.png",
      "https://i.imgur.com/AOzHDXV.png",
      "https://i.imgur.com/hHy1lrB.png",
    ],
    text: "Chatify is a Web App that allows users to send each other messages. It features a home and chatting page!",
    filterby: "webapps",
    languages: "React, Firebase, HTML/CSS",
    colors: ["#399ff3", "#728eec", "#add8e6"],
    industry: "Social Media",
    service: "Chat",
    donut: {
      series: [53, 70, 62],
      labels: ["UX", "UI", "Design"],
    },
    area: {
      series: [23, 10, 40, 90, 121, 30, 2, 1, 10, 0, 0, 0],
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    url: "https://csb-pe3l5-9z6dcxnyi-joshua131313.vercel.app/",
  },
  {
    title: "Bookify",
    banner: "https://i.imgur.com/UB3SFr0.png",
    icon: "fad fa-browser",
    type: "Web App",
    link: "/works/bookify",
    filterby: "webapps",
    featuredimg: [
      "https://i.imgur.com/e4Ugkjc.png",
      "https://i.imgur.com/UagOrgy.png",
      "https://i.imgur.com/cyfrFSQ.png",
    ],
    text: "Bookify is a Web App which contains hundreds of free books. It also allows users to post books on the App!",
    languages: "React, Firebase, HTML/CSS",
    colors: ["#ff8032", "#ff7847", "#118ec0"],
    industry: "EBooks",
    service: "Reading",
    donut: {
      series: [33, 50, 32],
      labels: ["UX", "UI", "Design"],
    },
    area: {
      series: [44, 42, 41, 23, 53, 60, 30, 20, 10, 0, 0, 3],
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    url: "https://csb-n9l51-osd5k3626-joshua131313.vercel.app/",
  },
  {
    title: "Jobify",
    banner: "https://i.imgur.com/hYxo7gz.png",
    icon: "fad fa-columns",
    link: "/works/jobify",
    filterby: "hybrid",
    featuredimg: [
      "https://i.imgur.com/ZC1d1Um.png",
      "https://i.imgur.com/KjjtZSx.png",
      "https://i.imgur.com/UIO0DiX.png",
    ],
    type: "Hybrid",
    text: "Jobify is a Hybrid App, meaning it contains a dashboard and a website. This Hybrid App allows users to manage and apply to jobs.",
    languages: "React, Firebase, HTML/CSS",
    colors: ["#056dff", "#fcd385", "#8a2be2"],
    industry: "Work",
    service: "Jobs",
    donut: {
      series: [93, 80, 77],
      labels: ["UX", "UI", "Design"],
    },
    area: {
      series: [93, 20, 70, 10, 1, 30, 22, 1, 10, 0, 0, 0],
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    url: "https://csb-1u1b1-c2l5fblbr-joshua131313.vercel.app/",
  },
];

export const links = [
  {
    link: "/",
    text: "Home",
    exact: true,
  },
  {
    link: "/aboutme",
    text: "About",
  },
  {
    link: "/services",
    text: "Services",
    dropdown: [
      {
        link: "/services#websites",
        text: "Websites",
        icon: "fad fa-browser",
      },
      {
        link: "/services#webapps",
        text: "Web Apps",
        icon: "fad fa-browser",
      },
      {
        link: "/services#mobileapps",
        text: "Mobile Apps",
        icon: "fad fa-mobile",
      },
    ],
  },
  {
    link: "/works",
    text: "Works",
    keyword: true,
    dropdown: [
      {
        link: "website",
        text: "Websites",
      },
      {
        link: "webapps",
        text: "Web Apps",
      },
      {
        link: "mobile",
        text: "Mobile Apps",
      },
      {
        link: "hybrid",
        text: "Hybrid",
      },
      {
        link: "all",
        text: "All",
      },
    ],
  },
  {
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
    title: "Profile",
    img: "https://i.imgur.com/EMcyIBn.png",
    text: "Extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to come up with new ideas and enhance  my UI and UX skills.",
    icon: "paint-brush",
  },
  {
    title: "Quotes",
    img: "https://i.imgur.com/PldPiNS.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis ante nec imperdiet venenatis. Aenean sed consectetur enim. Donec pretium erat ut varius varius.",
    icon: "quote-left",
  },
  {
    title: "Inspiration",
    img: "https://i.imgur.com/ih8gwVB.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis ante nec imperdiet venenatis. Aenean sed consectetur enim. Donec pretium erat ut varius varius.",
    icon: "lightbulb",
  },
];

export const bars = [
  {
    skill: "React",
    percent: 70,
    icon: "fab fa-react",
    text: "Learn how React can make your dream come true!",
  },
  {
    skill: "React Native",
    percent: 40,
    icon: "fab fa-react",
    text: "Transform your website or web application into a mobile app!",
  },
  {
    skill: "Photoshop",
    percent: 50,
    icon: "fad fa-image",
    text: "",
  },
  {
    skill: "JavaScript",
    percent: 80,
    icon: "fab fa-js-square",
    text: "JavaScript is an extremely powerful language!",
  },
  {
    skill: "Firebase",
    percent: 90,
    icon: "fad fa-database",
    text: "A very powerful database which makes web developing easy!",
  },
  {
    skill: "CSS",
    percent: 90,
    icon: "fab fa-css3",
    text: "CSS is not code, it's the art of the internet!",
  },
  {
    skill: "HTML",
    percent: 100,
    icon: "fab fa-html5",
    text: "The backbone of your future website!",
  },
];

export const services = [
  {
    text: "Powerful, simple and modern websites!",
    title: "Web Design",
    icon: "fad fa-browser",
    link: "/services",
  },
  {
    text: "Websites are made with   love and creativity!",
    title: "Creativity",
    icon: "fad fa-pencil-paintbrush",
    link: "/services",
  },
  {
    text: "Modern and stylistic designs to your website!",
    title: "Modern",
    icon: "fad fa-sparkles",
    link: "/services",
  },
  {
    text: "User and device friendly websites!",
    title: "Responsive",
    icon: "fad fa-mobile-android",
    link: "/services",
  },
  {
    text: "Designs made with you in mind! ",
    title: "Stunning Design",
    icon: "fad fa-layer-group",
    link: "/services",
  },
  {
    text: "Clear, neat and organized code!",
    title: "Organization",
    icon: "fad fa-broom",
    link: "/services",
  },
  {
    title: "More!",
    icon: "fad fa-th",
    link: "/services",
  },
];

export const contactBoxes = [
  {
    title: "Call Me",
    text: "+91 1234567890",
    link: "tel:123456789",
    icon: "fad fa-phone",
    notBlank: true,
  },
  {
    title: "Email Me",
    text: "aryanverma2506@gmail.com",
    link: "mailto:aryanverma2506@gmail.com",
    icon: "fad fa-envelope",
  },
  {
    title: "Visit Me",
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

export const gridservices = [
  {
    img: "https://i.imgur.com/cvOIep6.jpg",
    title: "Websites",
    texts: ["Modern", "Style", "Responsive"],
    text: "Breath taking Web designs for an amazing user experience.",
    icon: "fad fa-browser",
    link: "/works/websites",
  },
  {
    reverse: true,
    img: "https://i.imgur.com/XFJIHqG.png",
    title: "Mobile Apps",
    texts: ["UX", "Design", "UI"],
    text: "Mobile Apps allow users to access your web app on their phone!",
    icon: "fad fa-mobile",
    link: "/works/mobile",
  },
  {
    img: "https://i.imgur.com/6vC3i3o.png",
    title: "Web Apps",
    texts: ["UI", "UX", "Responsive"],
    text: "Powerful Web Applications enhances user interference and productivity!",
    icon: "fad fa-browser",
    link: "/works/apps",
  },

  {
    reverse: true,
    img: "https://i.imgur.com/cs7dkFo.png",
    title: "Hybrid",
    texts: ["UI", "UX", "Responsive"],
    text: "A Hybrid is a mix of a Web Application and a Website!",
    link: "/works/hybrid",
    icon: "fad fa-columns",
  },
];
