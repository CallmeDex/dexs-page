// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Hi! Dex is here",
    firstName: "DEX",
    LastName: "HERE",
    btnText: "Say Hello",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years in NURUL IMAN (Islamic Boarding School)",
      },
      {
        count: "20+",
        text: "Lives on this earth",
      },
    ],
  },
  skills: {
    title: "My Hobby",
    subtitle: "Hobi Gue",
    skills_content: [
      {
        name: "Music",
        para: "Music and Sing",
        logo: figma,
      },
      {
        name: "Football",
        para: "Play and Watch",
        logo: nodejs,
      },
      {
        name: "Reading",
        para: "Al-Qur'an, Hadits, and Karya Tulis",
        logo: ps,
      },
      {
        name: "Playing Games",
        para: "Valorant, Mobile Legend, PUBG dll",
        logo: reactjs,
      },
      {
        name: "Ngoding",
        para: "React, Next -JS ",
        logo: sketch,
      },
      {
        name: "Traveling",
        para: "Rihlah and Ziarah",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "WYD right now?",
    subtitle: "Kesibukan Gue",
    service_content: [
      {
        title: "Ngoding",
        para: "Lebih tepatnya, hanya untuk mengasah skill dan mengisi waktu luang saya",
        logo: services_logo1,
      },
      {
        title: "Belajar - Mengajar",
        para: "Saya adalah seorang santri di salah satu ponpes tepatnya di Probolinggo - Jawa timur. Angkatan ke 4 yang sudah menempuh pendidikan selama lebih dari 8 tahun",
        logo: services_logo2,
      },
      {
        title: "Cari Cuan",
        para: "Di samping kesibukan Belajar - Mengajar, Saya menyempatkan diri untuk membantu ekonomi keluarga",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "My Projects",
    subtitle: "Project Gue",
    image: person_project,
    project_content: [
      {
        title: "Redaksi Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "What People Say",
    subtitle: "Kata Orang-Orang",
    testimonials_content: [
      {
        review:
          "“Odiq tu orangnya asik, baik, ganteng ya walaupun kadang ngeselin dikit. tapi gue bangga banget punya dia”",
        img: avatar1,
        name: "~ Bryna Mytra",
      },
      {
        review:
          "“Nglopok orenga, tapeh mon ka kancana lambhek sara. ghenteng, penter, nyaman suarannah”",
        img: avatar2,
        name: "~ Aris bin Sholeh",
      },
      {
        review:
          "“Dia jago banget mainin jungler. Retri ga pernah indomaret, poko nya idaman cewe-cewe ML deh. Oiyaa... kadang kita juga main PUBG bareng. poko nya seru deh si Dex ni!”",
        img: avatar3,
        name: "~ Alvian Rizky",
      },
      {
        review:
          "“@d.dexx_ Gila ni orang main Valo kya orang kesurupan anjir, yakin menang sih tiap kali mabar ama si Dex”",
        img: avatar4,
        name: "~ Andre2101 gaming",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Mau punya personal portfolio website seperti ini? Silahkan klik tombol di bawah ini",
    btnText: "Obrolin",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "Ada yang pengen di sampein mungkin?",
    social_media: [
      {
        text: "dadeksan@gmail.com",
        icon: GrMail,
        link: "mailto:dadeksan@gmail.com?body=Hi%20Dex%20!",
      },
      {
        text: "WhatsApp",
        icon: MdCall,
        link: "https://wa.me/6282313958829",
      },
      {
        text: "d.dexx_",
        icon: BsInstagram,
        link: "https://www.instagram.com/d.dexx_/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
