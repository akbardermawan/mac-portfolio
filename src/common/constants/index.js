const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "archive",
    name: "Archive",
    icon: "trash.png",
    canOpen: true,
  },
];
const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  textandphoto: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  archive: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  cpns: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  village: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  music: { isOpen: true, zIndex: INITIAL_Z_INDEX, data: null },
};

const navLinks = [
  { id: 1, name: "Portfolio", type: "safari" },
  { id: 2, name: "Contact", type: "contact" },
  { id: 3, name: "Resume", type: "resume" },
];

const navIcons = [
  {
    id: 1,
    img: "icons/wifi.svg",
  },
  {
    id: 2,
    img: "icons/search.svg",
  },
  {
    id: 3,
    img: "icons/user.svg",
  },
  {
    id: 4,
    img: "icons/mode.svg",
  },
];

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 5,
      name: "CPNS Aplication",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", //icon position insider Finder
      windowPosition: "top-[15vh] right-20", //optional: Finder
      children: [
        {
          id: 1,
          name: "CPNS.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          windowKey: "textandphoto",
          position: "top-10 left-5",
          description: [
            "I have developed a web-based simulation application designed to help users practice CPNS exam questions. The website is fully responsive, ensuring a seamless and user-friendly experience across various devices, including desktops, tablets, and smartphones.",
            "https://akbarcpns.netlify.app/",
          ],
        },
        {
          id: 2,
          name: "CPNS.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          position: "top-10 left-5",
          href: "https://akbarcpns.netlify.app/",
        },
      ],
    },
    {
      id: 6,
      name: "Village Aplication",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", //icon position insider Finder
      windowPosition: "top-[15vh] right-20", //optional: Finder
      children: [
        {
          id: 1,
          name: "Village.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          windowKey: "textandphoto",
          position: "top-10 left-5",
          description: [
            "I developed a modern village website with a responsive design that works seamlessly across all devices. The website is user-friendly, easy to navigate, and designed to provide clear access to village information and services for the community.",
            "https://webvillage.netlify.app/",
          ],
        },
        {
          id: 2,
          name: "Village.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          position: "top-10 left-5",
          href: "https://webvillage.netlify.app/",
        },
        {
          id: 3,
          name: "Village.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img", // ✅ WAJIB
          windowKey: "textandphoto",
          position: "top-10 left-5", //icon position insider Finder
          windowPosition: "top-[15vh] right-20", //optional: Finder
          src: "/images/dekstop/village.JPG",
        },
      ],
    },
  ],
};
const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 6,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      windowKey: "textandphoto",
      position: "top-10 left-5", //icon position insider Finder
      windowPosition: "top-[15vh] right-20", //optional: Finder
      description: [
        "I am a website developer with an educational background in Agricultural Engineering from the University of Jember, Indonesia. Although my career path slightly deviates from my academic background, I chose to focus on enhancing my programming skills, particularly in web development.",
      ],
    },
  ],
};
const ABOUT_LOCATION_Android = [
  {
    id: 30,
    name: "about-me.txt",
    icon: "/images/txt.png",
    kind: "file",
    fileType: "txt",
    windowKey: "textandphoto",
    position: "top-10 left-5", //icon position insider Finder
    windowPosition: "top-[15vh] right-20", //optional: Finder
    description: [
      "I am a website developer with an educational background in Agricultural Engineering from the University of Jember, Indonesia. Although my career path slightly deviates from my academic background, I chose to focus on enhancing my programming skills, particularly in web development.",
    ],
  },
  {
    id: 31,
    name: "Akbar.png",
    icon: "/images/image.png",
    kind: "file",
    fileType: "img", // ✅ WAJIB
    windowKey: "textandphoto",
    position: "top-10 left-5", //icon position insider Finder
    windowPosition: "top-[15vh] right-20", //optional: Finder
    src: "/images/blog1.png",
  },
  {
    id: 32,
    name: "CPNS.com",
    icon: "/images/safari.png",
    kind: "file",
    fileType: "url",
    position: "top-10 left-5",
    href: "https://akbarcpns.netlify.app/",
  },
  {
    id: 33,
    name: "CPNS2.com",
    icon: "/images/safari.png",
    kind: "file",
    fileType: "url",
    position: "top-10 left-5",
    href: "https://akbarcpns.netlify.app/",
  },
  {
    id: 34,
    name: "CPNS2.com",
    icon: "/images/safari.png",
    kind: "file",
    fileType: "url",
    position: "top-10 left-5",
    href: "https://akbarcpns.netlify.app/",
  },
  {
    id: 35,
    name: "CPNS2.com",
    icon: "/images/safari.png",
    kind: "file",
    fileType: "url",
    position: "top-10 left-5",
    href: "https://akbarcpns.netlify.app/",
  },
  {
    id: 36,
    name: "CPNS2.com",
    icon: "/images/safari.png",
    kind: "file",
    fileType: "url",
    position: "top-10 left-5",
    href: "https://akbarcpns.netlify.app/",
  },
];

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 7,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      windowKey: "resume",
      position: "top-10 left-5", //icon position insider Finder
      windowPosition: "top-[15vh] right-20", //optional: Finder
    },
  ],
};
const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 8,
      name: "Akbar.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img", // ✅ WAJIB
      windowKey: "textandphoto",
      position: "top-10 left-5", //icon position insider Finder
      windowPosition: "top-[15vh] right-20", //optional: Finder
      src: "/images/akbar-7.jpg",
    },

    {
      id: 9,
      name: "Second Portfolio.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      position: "top-20 left-10",
      href: "https://akbardermawan-react.netlify.app/",
    },
  ],
};

const Archive = [
  {
    id: 1,
    name: "Akbar.png",
    icon: "/images/image.png",
    kind: "file",
    fileType: "img", // ✅ WAJIB
    windowKey: "textandphoto",
    position: "top-10 left-5", //icon position insider Finder
    windowPosition: "top-[15vh] right-20", //optional: Finder
    src: "/images/akbar-7.jpg",
  },
  {
    id: 2,
    name: "First Portfolio.com",
    icon: "/images/safari.png",
    kind: "file",
    fileType: "url",
    position: "top-10 left-5",
    href: "https://akbardermawan.github.io/",
  },
  {
    id: 3,
    name: "Second Portfolio.com",
    icon: "/images/safari.png",
    kind: "file",
    fileType: "url",
    position: "top-10 left-5",
    href: "https://akbardermawan-react.netlify.app/",
  },
  {
    id: 4,
    name: "Weding Invitation.com",
    icon: "/images/safari.png",
    kind: "file",
    fileType: "url",
    position: "top-10 left-5",
    href: "https://akbardermawan.github.io/wedding-invitation2/",
  },
];

const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/akbardermawan",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://github.com/akbardermawan",
  },
  {
    id: 3,
    text: "Twiter/X",
    icon: "/icons/twitter.svg",
    bg: "#f26222",
    link: "https://github.com/akbardermawan",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#00b4d8",
    link: "https://github.com/akbardermawan",
  },
];

const skill = [
  {
    category: "Frontend",
    tech: "React.js, Next.js, TypeScript",
  },
  {
    category: "Mobile",
    tech: "React Native, Expo",
  },
  {
    category: "Styling",
    tech: "Tailwind CSS, Sass, CSS",
  },
  {
    category: "Backend",
    tech: "Node.js, Express, NestJS, Hono",
  },
  {
    category: "Database",
    tech: "MongoDB, PostgreSQL",
  },
  {
    category: "Dev Tools",
    tech: "Git, GitHub, Docker",
  },
];
const services = [
  {
    title: "Frontend Developer",
    icon: "images/web.png",
    skill: ["React JS", "Tailwind CSS", "Flutter Dart", "Blazor"],
  },
  {
    title: "Backend Developer",
    icon: "images/backend.png",
    skill: ["Node JS", "Next Js", "GO Echo", "ASP.Net Core"],
  },
  {
    title: "Software Engineer",
    icon: "images/creator.png",
    skill: ["Postgre SQL", "Mongo DB", "Supabase", "GitHub", "Docker"],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "icons/tecnology/html.png",
  },
  {
    name: "CSS 3",
    icon: "icons/tecnology/css.png",
  },
  {
    name: "JavaScript",
    icon: "icons/tecnology/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "icons/tecnology/typescript.png",
  },
  {
    name: "CS",
    icon: "icons/tecnology/CS.svg",
  },
  {
    name: "React JS",
    icon: "icons/tecnology/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "icons/tecnology/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "icons/tecnology/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "icons/tecnology/nodejs.png",
  },
  {
    name: "Next",
    icon: "icons/tecnology/Next.svg",
  },
  {
    name: "DotNet",
    icon: "icons/tecnology/DotNet.svg",
  },
  {
    name: "Postgre",
    icon: "icons/tecnology/Postgre.svg",
  },
  {
    name: "MongoDB",
    icon: "icons/tecnology/mongodb.png",
  },
  {
    name: "Three JS",
    icon: "icons/tecnology/threejs.svg",
  },

  {
    name: "git",
    icon: "icons/tecnology/git.png",
  },

  {
    name: "docker",
    icon: "icons/tecnology/docker.png",
  },
];

const imagesGalry = [
  {
    id: 70,
    name: "Akbar.png",
    icon: "/images/akbar.JPG",
    kind: "file",
    fileType: "img", // ✅ WAJIB
    windowKey: "textandphoto",
    position: "top-10 left-5", //icon position insider Finder
    windowPosition: "top-[15vh] right-20", //optional: Finder
    src: "/images/akbar.JPG",
  },
  {
    id: 72,
    name: "Akbar.png",
    icon: "/images/akbar-2.JPG",
    kind: "file",
    fileType: "img", // ✅ WAJIB
    windowKey: "textandphoto",
    position: "top-10 left-5", //icon position insider Finder
    windowPosition: "top-[15vh] right-20", //optional: Finder
    src: "/images/akbar-2.JPG",
  },
  {
    id: 73,
    name: "Akbar.png",
    icon: "/images/akbar-3.JPG",
    kind: "file",
    fileType: "img", // ✅ WAJIB
    windowKey: "textandphoto",
    position: "top-10 left-5", //icon position insider Finder
    windowPosition: "top-[15vh] right-20", //optional: Finder
    src: "/images/akbar-3.JPG",
  },
  {
    id: 74,
    name: "Akbar.png",
    icon: "/images/akbar-4.JPG",
    kind: "file",
    fileType: "img", // ✅ WAJIB
    windowKey: "textandphoto",
    position: "top-10 left-5", //icon position insider Finder
    windowPosition: "top-[15vh] right-20", //optional: Finder
    src: "/images/akbar-4.JPG",
  },
  {
    id: 75,
    name: "Akbar.png",
    icon: "/images/akbar-5.jpg",
    kind: "file",
    fileType: "img", // ✅ WAJIB
    windowKey: "textandphoto",
    position: "top-10 left-5", //icon position insider Finder
    windowPosition: "top-[15vh] right-20", //optional: Finder
    src: "/images/akbar-5.jpg",
  },
  {
    id: 76,
    name: "Akbar.png",
    icon: "/images/akbar-6.JPG",
    kind: "file",
    fileType: "img", // ✅ WAJIB
    windowKey: "textandphoto",
    position: "top-10 left-5", //icon position insider Finder
    windowPosition: "top-[15vh] right-20", //optional: Finder
    src: "/images/akbar-6.JPG",
  },
  {
    id: 77,
    name: "Akbar.png",
    icon: "/images/blog1.png",
    kind: "file",
    fileType: "img", // ✅ WAJIB
    windowKey: "textandphoto",
    position: "top-10 left-5", //icon position insider Finder
    windowPosition: "top-[15vh] right-20", //optional: Finder
    src: "/images/blog1.png",
  },
];

const playlist_music = [
  {
    title: "AL-WAQI'AH",
    artist: "Muzammil Hasballah",
    cover: "/images/akbar-4.JPG",
    src: "/music/1.mp3",
  },
  {
    title: "AR-RAHMAN",
    artist: "Muzammil Hasballah",
    cover: "/images/akbar-6.JPG",
    src: "/music/2.mp3",
  },
];

export {
  dockApps,
  INITIAL_Z_INDEX,
  WINDOW_CONFIG,
  navLinks,
  navIcons,
  locations,
  WORK_LOCATION,
  ABOUT_LOCATION,
  RESUME_LOCATION,
  TRASH_LOCATION,
  socials,
  skill,
  services,
  technologies,
  ABOUT_LOCATION_Android,
  imagesGalry,
  Archive,
  playlist_music,
};
