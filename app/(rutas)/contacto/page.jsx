"use client";
import PageHead from "../../components/PageHead";
import style from "./contacto.module.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import MailSVG from "public/icons/mail.svg";
import GithubSVg from "public/icons/github.svg";
import WhatsAppSVG from "public/icons/whatsapp.svg";
import LinkedinSVG from "public/icons/linkedin.svg";

export default function About() {
  const refBtn = useRef();
  const [formData, setFormData] = useState(() => {
    return {
      nombre: "",
      email: "",
      mensaje: "",
    };
  });

  function handleClick() {
    refBtn.current.textContent = "Enviado";
    refBtn.current.style.backgroundColor = "var(--gold)";
    refBtn.current.style.color = "var(--light)";
    setTimeout(() => {
      refBtn.current.textContent = "Enviar Email";
      refBtn.current.style.backgroundColor = "transparent";
      refBtn.current.style.color = "var(--gold)";
    }, 1500);
  }

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE,
      process.env.NEXT_PUBLIC_TEMPLATE,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_KEY
    );
    setFormData(() => ({
      nombre: "",
      email: "",
      mensaje: "",
    }));
    handleClick();
  }

  return (
    <main className="page_container">
      <PageHead nombre="Contacto" />
      <div className={style.contacto}>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.nombre}>
            <input value={formData.nombre} type="text" name="nombre" id="nombre" onChange={handleChange} required />
            <label htmlFor="nombre">Nombre</label>
          </div>
          <div className={style.email}>
            <input value={formData.email} type="email" name="email" id="email" onChange={handleChange} required />
            <label htmlFor="email">Email</label>
          </div>
          <div className={style.mensaje}>
            <textarea
              value={formData.mensaje}
              name="mensaje"
              id="mensaje"
              onChange={handleChange}
              placeholder=" "
              rows="6"
              spellCheck="false"
            />
            <label htmlFor="mensaje">Mensaje</label>
          </div>
          <button ref={refBtn} className={style.form_btn}>
            Enviar Email
          </button>
        </form>

        <div className={style.contacto_links}>
          <div className={style.contacto_link}>
            <a href="mailto:sdadrian@gmail.com" target="_blank" rel="noreferrer">
              <MailSVG className={style.icon} />
            </a>
            <p>sdadrian@gmail.com</p>
          </div>

          <div className={style.contacto_link}>
            <a href="https://github.com/AdrianFerrari" target="_blank" rel="noreferrer">
              <GithubSVg className={style.icon} />
            </a>
            <p>GitHub</p>
          </div>

          <div className={style.contacto_link}>
            <a href="https://wa.me/543413125021" target="_blank" rel="noreferrer">
              <WhatsAppSVG className={style.icon} />
            </a>
            <p>54-341-3125021</p>
          </div>

          <div className={style.contacto_link}>
            <a href="https://www.linkedin.com/in/adrian-ferrari-4b44a3200" target="_blank" rel="noreferrer">
              <LinkedinSVG className={style.icon} />
            </a>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </main>
  );
}
