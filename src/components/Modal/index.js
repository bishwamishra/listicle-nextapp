"use client";
import { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { ModalContext } from "@/app/providers";
import Image from "next/image";
import Input from "../Input";
import Button from "../Button";
import Checkbox from "../Checkbox";

const Modal = () => {
  const { modalOpen, setModalOpen } = useContext(ModalContext);
  const [agreed, setAgreed] = useState(false);
  const [formValues, setFormValues] = useState({});

  const onInputChange = (key, e) => {
    // console.log(key, ":>>", e.target.value);
    setFormValues((values) => ({
      ...values,
      [key]: e.target.value,
    }));
  };
  console.log("formValues", ":>>", formValues);

  const modalContent = {
    login: {
      title: "Sign in",
      content: (
        <div>
          <form>
            <Input
              name="email"
              label="Email"
              onChange={onInputChange}
              value={formValues.email}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              onChange={onInputChange}
              value={formValues.password}
            />
            <Button>Login</Button>
          </form>
          <p className={styles.footerText}>
            Don’t have an account?
            <b
              className={styles.footerLink}
              onClick={() => setModalOpen("signup")}
            >
              {" "}
              Create an account.{" "}
            </b>
          </p>
        </div>
      ),
    },
    signup: {
      title: "Create an account",
      content: (
        <div>
          <form>
            <Input
              name="name"
              label="Name"
              onChange={onInputChange}
              value={formValues.name}
            />
            <Input
              name="email"
              label="Email"
              onChange={onInputChange}
              value={formValues.email}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              onChange={onInputChange}
              value={formValues.password}
            />
            <Checkbox checked={agreed} onCheck={setAgreed}>
              <p className={styles.agreeText}>
                I agree with{" "}
                <a href="https://b.uss.com.np/" target="_blank">
                  <b>Terms</b>
                </a>{" "}
                &{" "}
                <a href="https://b.uss.com.np/">
                  <b>Privacy</b>
                </a>
              </p>
            </Checkbox>
            <Button>Create account</Button>
          </form>
          <p className={styles.footerText}>
            Already have an account?
            <b
              className={styles.footerLink}
              onClick={() => setModalOpen("login")}
            >
              {" "}
              Sign in.{" "}
            </b>
          </p>
        </div>
      ),
    },
  };

  if (!modalOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <Image
          onClick={() => setModalOpen(null)}
          className={styles.close}
          src={"/close.png"}
          width={32}
          height={32}
          alt="close-icon"
        />
        <h2 className={styles.title}>{modalContent[modalOpen]?.title}</h2>
        {modalContent[modalOpen]?.content}
      </div>
    </div>
  );
};

export default Modal;
