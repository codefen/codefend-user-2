import { NavLink } from "react-router";
import scss from "./sidebar.module.scss";
import { useState, useEffect } from "react";
import { BarsIcon } from "../BarsIcon"; 
import { CloseIcon } from "../CloseIcon";

const sidebarSections = [
  {
    title: "Main",
    items: [
      { title: "Dashboard", path: "/" },
      { title: "Team members", path: "/team" },
      { title: "Orders and payments", path: "/orders" },
      { title: "User profile", path: "/profile" },
    ],
  },
  {
    title: "Attack surface",
    items: [
      { title: "Web apps", path: "/web-apps" },
      { title: "Mobile apps", path: "/mobile-apps" },
      { title: "IP Addresses", path: "/ip-addresses" },
      { title: "Cloud risk check", path: "/cloud-risk" },
      { title: "Source code analysis", path: "/source-code" },
      { title: "Social attacks", path: "/social-attacks" },
    ],
  },
  {
    title: "Issues",
    items: [
      { title: "Generate reports", path: "/reports" },
      { title: "Open issues", path: "/open-issues" },
      { title: "Fixed issues", path: "/fixed-issues" },
      { title: "Accepted risks", path: "/accepted-risks" },
    ],
  },
  {
    title: "Toolset",
    items: [
      { title: "Automated web scans", path: "/web-scans" },
      { title: "Database explorer", path: "/database" },
      { title: "Talk to a hacker", path: "/hacker" },
    ],
  },
]

const Sidebar = () => {
  // const navbar = document.getElementById('navbar');
  // const isBlock = navbar.style.display === 'block';
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    const element = document.getElementById('sidebar');
    if (!isOpen) {
      element.style.left = `0%`;
      console.log(element.style)
      setIsOpen(true)
    } else {
      element.style.left = `-100%`;
      setIsOpen(false)
    }
  }

  // useEffect(()=>{

  // },[])

  return (
    <>
      <div id="navbar" className={scss.navbar}>
        <button className={scss.navButton} onClick={toggleBar} type="button">{!isOpen ? <BarsIcon /> : <CloseIcon />}</button>
      </div>
      <div id="sidebar" className={scss.sidebar}>
        {sidebarSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={scss.section}>
            <h2 className={scss.title}>{section.title}</h2>
            <ul className={scss.menu}>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? `${scss.link} ${scss.active}` : `${scss.link}`)}
                    // onClick={isBlock ? toggleBar : null}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default Sidebar