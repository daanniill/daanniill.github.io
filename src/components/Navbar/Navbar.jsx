import "./Navbar.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#interests", label: "Interests" },
  { href: "#contact", label: "Contact" },
];

function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          DM<span className="navbar-logo-sub">Daniil Malakhov</span>
        </a>

        <nav className="navbar-menu">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="navbar-link">
              {label}
            </a>
          ))}

          <button
            type="button"
            className="navbar-theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
