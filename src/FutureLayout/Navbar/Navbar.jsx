import React from "react";
import styles from "./Navbar.module.css";
import { HiHome } from "react-icons/hi";
import { BsFillChatRightQuoteFill } from "react-icons/bs";

import { GiCargoShip } from "react-icons/gi";
import { RiBuilding2Fill } from "react-icons/ri";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

import { Link } from "react-router-dom";
import Image from "../../Assets/File (1).jpg";

const Navbar = ({
  setSection,
  setShowFooter,
  setIsFooterVisible,
  setVisible,
  setSearchModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.routes}>
          <div className={styles.Logo}>
            <img src={Image} alt="logo" />
          </div>
          <Link
            onClick={() => {
              setIsFooterVisible(true);
              setShowFooter([]);
              setVisible([]);
              setSearchModal(true);
            }}
            className={styles.Navlink}
            to={"/rates"}
          >
            <span>
              <HiHome className={styles.routeIcon} />
            </span>
            <span>Instant Rates</span>
          </Link>
        </div>
        <div className={styles.routes}>
          <Link
            onClick={() => setSection(2)}
            className={styles.Navlink}
            to={"/inquiry"}
          >
            <span>
              <BsFillChatRightQuoteFill className={styles.routeIcon} />
            </span>
            <span>Inquiry</span>
          </Link>
        </div>
        <div className={styles.routes}>
          <Link
            onClick={() => setSection(3)}
            className={styles.Navlink}
            to={"/quotes"}
          >
            <span>
              <BsFillChatRightQuoteFill className={styles.routeIcon} />
            </span>
            <span>Quotes</span>
          </Link>
        </div>
        <div className={styles.routes}>
          <Link
            className={styles.Navlink}
            to={"/shipments"}
            onClick={() => setSection(7)}
          >
            <span>
              <GiCargoShip className={styles.routeIcon} />
            </span>
            <span>Shipments</span>
          </Link>
        </div>
        <div className={styles.routes}>
          <Link className={styles.Navlink} to={"/mycompany"}>
            <span>
              <RiBuilding2Fill className={styles.routeIcon} />
            </span>
            <span>My Company</span>
          </Link>
        </div>
        <div className={styles.routes}>
          <Link className={styles.Navlink} to={"/rms"}>
            <span>
              <AiOutlineDeliveredProcedure className={styles.routeIcon} />
            </span>
            <span>RMS</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
