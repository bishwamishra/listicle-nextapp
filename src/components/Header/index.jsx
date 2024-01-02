"use client";
import { useContext, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { ModalContext } from "@/app/providers";

const Header = ({ actions }) => {
  const { setModalOpen } = useContext(ModalContext);
  const [showMenu, setShowMenu] = useState(false);
  const { isMobile } = useIsMobile();

  const onMenuClick = () => {
    setShowMenu((s) => !s);
  };
  return (
    <div className={styles.header}>
      {/* logo */}
      <div className={styles.logocontainer}>
        <Image src="/logo.png" width={40} height={40} alt="listicle logo" />
        <h2>Listicle</h2>
      </div>
      {isMobile === null ? (
        <div />
      ) : isMobile ? (
        <Image
          onClick={onMenuClick}
          src="/menu.png"
          width={40}
          height={40}
          alt="menu-img"
        />
      ) : (
        <>
          {/* Action */}
          <div className={styles.actionsContainer}>
            {actions.map((action) => (
              <h3 key={action.title} className={styles.action}>
                {action.title}
              </h3>
            ))}
          </div>
          {/* call to action  */}
          <div className={styles.cta}>
            <h3 onClick={() => setModalOpen("login")}>Sign In</h3>
            <span>
              <h3 onClick={() => setModalOpen("signup")}>Create an account</h3>
            </span>
          </div>
        </>
      )}
      {showMenu && (
        <div className={styles.mobileMenu}>
          <div className={styles.actionsContainer}>
            {actions.map((action) => (
              <h3 key={action.title} className={styles.action}>
                {action.title}
              </h3>
            ))}
          </div>
          {/* call to action  */}
          <div className={styles.cta}>
            <h3 className={styles.signIn} onClick={() => setModalOpen("login")}>
              Sign In
            </h3>
            <span onClick={() => setModalOpen("signup")}>
              <h3>Create an account</h3>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
