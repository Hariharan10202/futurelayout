import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import {
  Nav,
  NavLink,
  NavMenu,
  Logo,
  ProfileIcon,
  CreateButton,
} from "./Navbar.styled";

import companyLogo from "../../Assets/logo.png";
import searchIcon from "../../Assets/search.svg";
import User from "../../Assets/user.png";

import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "../../Dropdown/Rmsdropdown/Dropdown";
import CreateDropdown from "../../Dropdown/createDropdown/CreateDropdown";
import UserDropdown from "../../Dropdown/profileDropdown/UserDropdown";

const Navbar = () => {
  const [rmsHover, setRmsHover] = useState(false);

  const [createClicked, setCreateClicked] = useState(false);
  const [profileClicked, setProfileClicked] = useState(false);

  const spanStyle = {
    fontSize: "14px",
    color: "inherit",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0].tagName !== "IMG") {
        setProfileClicked(false);
      }
      if (e.path[0].tagName !== "BUTTON") {
        setCreateClicked(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);

    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <>
      <Nav>
        <NavMenu>
          <Logo src={companyLogo} />
          <NavLink to="/rates">
            <span style={spanStyle}>Instant rates</span>
          </NavLink>
          <NavLink to="/inquiry">
            <span style={spanStyle}> Inquiry</span>
          </NavLink>
          <NavLink to="/quotes">
            <span style={spanStyle}> Quotes</span>
          </NavLink>
          <NavLink to="/shipments">
            <span style={spanStyle}> Shipments</span>
          </NavLink>
          <NavLink
            onMouseEnter={() => setRmsHover(true)}
            onMouseLeave={() => setRmsHover(false)}
            to="/rms"
            className={styles.rms}
          >
            <span style={spanStyle}>
              RMS <IoIosArrowDown />
            </span>

            <Dropdown rmsHover={rmsHover} />
          </NavLink>
          {/* <NavBtn>
            <NavBtnLink to="/profile">Add Rate</NavBtnLink>
          </NavBtn> */}
        </NavMenu>
        <ProfileIcon>
          <div className="">
            <CreateButton onClick={() => setCreateClicked(!createClicked)}>
              <span className={styles.pointerNone}>Create</span>
              <IoIosArrowDown
                className={`${styles["dropdown-arrow"]} ${styles.pointerNone}`}
              />
            </CreateButton>
            <CreateDropdown createClicked={createClicked} />
          </div>
          <div className="">
            <img
              style={{ maxWidth: "22px", maxHeight: "22px" }}
              src={searchIcon}
              alt=""
            />
          </div>
          <div className="">
            <img
              onClick={() => setProfileClicked(!profileClicked)}
              className={styles.profile}
              style={{ maxWidth: "30px", maxHeight: "30px" }}
              src={User}
              alt="user-img"
            />
            <UserDropdown profileClicked={profileClicked} />
          </div>
        </ProfileIcon>
      </Nav>
    </>
  );
};

export default Navbar;
