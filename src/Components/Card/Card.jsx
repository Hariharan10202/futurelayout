import React, { useState } from "react";
import styles from "./Card.module.css";

import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { Box } from "@mui/material";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import Singlecard from "../Singlecard/Singlecard";
import ModalWindow from "../Modal/Modal";
import { useSelector } from "react-redux";
import Filter from "../Filter/Filter";

const Card = () => {
  const isLoading = useSelector((state) => state.rates.pending);
  const rateData = useSelector((state) => state.rates.data);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chargesDetails, setChargesDetails] = useState([]);

  const handleClose = () => setIsModalVisible(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1300,
    bgcolor: "white",
    boxShadow: 24,
    p: 2,
  };

  return (
    <>
      <div className={styles.container}>
        {rateData.length > 0 && <Filter isLoading={isLoading} />}

        <div className={styles.cardWrapper}>
          <div className={styles.cards}>
            <>
              {isLoading ? (
                <>
                  <Singlecard isLoading={isLoading} />
                  <Singlecard isLoading={isLoading} />
                  <Singlecard isLoading={isLoading} />

                  <Singlecard isLoading={isLoading} />
                </>
              ) : (
                <>
                  {rateData?.map((data, index) => (
                    <Singlecard
                      setIsModalVisible={setIsModalVisible}
                      key={index}
                      data={data}
                      setChargesDetails={setChargesDetails}
                      isLoading={isLoading}
                    />
                  ))}
                </>
              )}
            </>
          </div>
        </div>
      </div>

      <Modal
        keepMounted
        open={isModalVisible}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Fade in={isModalVisible} timeout={200}>
          <Box sx={style}>
            <ModalWindow
              chargesDetails={chargesDetails}
              setIsModalVisible={setIsModalVisible}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Card;
