import React, { useState } from "react";
import styles from "./Profile.module.css";

export default function Profile({ name, date }) {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setdropdownOpen(!dropdownOpen);
  };

  return (
    <section className={styles.container}>
      <div
        className={styles.personIcon}
        style={{ backgroundImage: `url('/images/avatar-michelle.jpg')` }}
      ></div>

      <div className={styles.personId}>
        <h2>{name}</h2>
        <h3>{date}</h3>
      </div>

      <div role="dialog" arial-aria-modal="true" className={styles.modal}>
        <button onClick={toggleDropdown}>
          <img src="/images/icon-share.svg" alt="Share icon" />
        </button>

        {dropdownOpen && (
          <nav>
            <span>Share</span>

            <a href="#">
              <img src="/images/icon-facebook.svg" alt="Icon Facebook" />
            </a>
            <a href="#">
              <img src="/images/icon-twitter.svg" alt="Icon Twitter" />
            </a>
            <a href="#">
              <img src="/images/icon-pinterest.svg" alt="Icon Pinterest" />
            </a>

            <button onClick={toggleDropdown}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path
                  fill="#FFFFFF"
                  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
