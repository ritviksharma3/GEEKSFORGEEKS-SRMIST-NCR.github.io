import React from "react";
import Card from "./card";
import "./Team.css";

let data = [
  {
    id: 1,
    name: "Simarpreet Kaur",
    desc: "Chairperson",
    img: "Simar.webp",
    link1: "https://www.linkedin.com/in/simarpeet-kaur-1a31951b6",
    link2: "https://www.github.com/",
    link3: "https://www.instagram.com/arora_simar_19/",
  },
  {
    id: 2,
    name: "Deepak Gupta",
    desc: "Vice Chairperson",
    img: "Deepak.webp",
    link1: "https://www.linkedin.com/in/spycaptain/",
    link2: "https://www.github.com/",
    link3: "https://www.instagram.com/_spycaptain/",
  },
  {
    id: 3,
    name: "Aman Dahiya",
    desc: "Technical Head",
    img: "Aman.webp",
    link1: "https://www.linkedin.com/in/aman-dahiya-4a11a7199/",
    link2: "https://www.github.com/",
    link3: "https://www.instagram.com/dahiya.aman1998/",
  },
  {
    id: 4,
    name: "Aditya Prabhakar",
    desc: "Event Head",
    img: "Aaditya.webp",
    link1: "https://www.linkedin.com/in/aditya-prabhakar-b9a8a11a6",
    link2: "https://www.github.com/",
    link3: "https://www.instagram.com/",
  },
  {
    id: 5,
    name: "Anushka Kunwar",
    desc: "Marketing Head",
    img: "Anushka.webp",
    link1: "https://www.linkedin.com/in/anushka-kanwar-8484241b6",
    link2: "https://www.github.com/",
    link3: "https://www.instagram.com/anushkakanwar15/",
  },
  {
    id: 6,
    name: "Aditi Srivastava",
    desc: "Social Media Head",
    img: "Aditi.webp",
    link1: "https://www.linkedin.com/in/aditisrv",
    link2: "https://www.github.com/",
    link3: "https://www.instagram.com/aditi_srv/",
  },
  {
    id: 7,
    name: "Shreyansh Sharma",
    desc: "Design/Branding Head",
    img: "Shreyansh.webp",
    link1: "https://www.linkedin.com/in/shreyansh-sharma-/",
    link2: "https://www.github.com/",
    link3: "https://www.instagram.com/_._shreyansh_._311/",
  },
  {
    id: 8,
    name: "Samriddha Basu ",
    desc: "P.R. Head",
    img: "Samriddha.webp",
    link1: "https://www.linkedin.com/in/samriddha-basu-4594401ba",
    link2: "https://www.github.com/",
    link3: "https://www.instagram.com/unsheathed.dmg/",
  },
];

let cardgrid = data.map((data) => {
  return <Card key={data.id} title={data.name} desc={data.desc} img={data.img} link1={data.link1} link2={data.link2} link3={data.link3} />;
});

const Team = () => {
  return (
    <section className="team" id="Team">
      <div className="">
        <h1 className="section-title">Team</h1>
        <div className="team-container" key={data.id}>
          {cardgrid}
        </div>
      </div>
    </section>
  );
};

export default Team;
