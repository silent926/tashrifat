import "./loginScreen.css";
import logo from "../../assets/images/logo.svg";
import signin from "../../assets/images/signin.svg";
import signup from "../../assets/images/signup.svg";

import { useState } from "react";

const SigninForm = () => (
  <form className="active">
    <p dir="rtl">
      اکانت ندارید؟ <a>ثبت نام</a>
    </p>
    <label> ایمیل </label>
    <div className="control">
      <input type="email" placeholder="email@gmail.com" />
      <i className="ai-envelope"></i>
    </div>
    <label> رمز عبور </label>
    <div className="control">
      <input type="password" placeholder="●●●●●●●●●●●●●●●" />
      <i className="ai-lock-on"></i>
    </div>
    <button>ورود</button>
    <p className="footer" dir="rtl">
      اگر دکمه ورود را بزنید شما تمام قوانین و شرایط ما را پذیرفته اید.
    </p>
  </form>
);

const SignupForm = () => (
  <form>
    <p dir="rtl">
      اکانت دارید؟ <a>ورود</a>.
    </p>
    <label> نام کاربری </label>
    <div className="control">
      <input type="text" placeholder="myusername" />
      <i className="ai-person"></i>
    </div>
    <label> ایمیل </label>
    <div className="control">
      <input type="email" placeholder="youremail@gmail.com" />
      <i className="ai-envelope"></i>
    </div>
    <label> رمز عبور </label>
    <div className="control">
      <input type="password" placeholder="●●●●●●●●●●●●●●●" />
      <i className="ai-lock-on"></i>
    </div>
    <button>ثبت نام</button>
  </form>
);

const navButtons = [
  { name: "signin", label: "ورود", icon: "check" },
  { name: "signup", label: "ثبت نام", icon: "add" },
];

const NavButton = ({ onClick, isActive, label, icon }) => (
  <button
    type="button"
    className={`${isActive ? "active" : ""} `}
    onClick={onClick}
  >
    <i className={`ai-person-${icon}`} />
    <span>{label}</span>
  </button>
);

const CardForms = ({ view }) => (
  <div className="card-form">
    <div className="forms" style={{ top: view === "signin" ? 0 : "-100%" }}>
      <SigninForm />
      <SignupForm />
    </div>
  </div>
);

const CardHero = ({ view }) => (
  <div className="card-hero">
    <div
      className="card-hero-inner"
      style={{ top: view === "signin" ? 0 : "-100%" }}
    >
      <div className="card-hero-content signin"  dir="rtl">
        <h2>خوش آمدید.</h2>
        <h3>لطفا مشخصات را تکمیل کنید</h3>
        <img src={signin} />
      </div>
      <div className="card-hero-content signup"  dir="rtl">
        <h2>به خانواده ما بپیوندید.</h2>
        <h3>امروز ثبت نام و شروع کنید </h3>
        <img src={signup} />
      </div>
    </div>
  </div>
);

const CardNav = ({ view, toggleView }) => (
  <ul className="card-nav">
    <li>
      <img src={logo} />
      <span
        className="active-bar"
        style={{ top: view === "signin" ? "33.33%" : "66.66%" }}
      ></span>
    </li>
    {navButtons.map((btn) => (
      <li>
        <NavButton
          icon={btn.icon}
          label={btn.label}
          isActive={view === btn.name}
          onClick={toggleView}
        />
      </li>
    ))}
  </ul>
);

export const Login = () => {
  const [view, setView] = useState("signin");

  const toggleView = () => setView(view === "signin" ? "signup" : "signin");

  return (
    <section className="page login-2-page">
      <div className="login-2">
        <CardNav view={view} toggleView={toggleView} />
        <CardHero view={view} />
        <CardForms view={view} />
      </div>
    </section>
  );
};