import { Icon } from "@iconify/react";

function Footer() {
  return (
    <>
      <footer>
        <a
          href="https://github.com/JossDev-Morales/Jossdev-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Coded by Joss<span>Dev</span>
          </p>
          <div className="social_icon">
            <Icon icon="ph:github-logo-fill" color="white" />
          </div>
        </a>
      </footer>
    </>
  );
}
export default Footer