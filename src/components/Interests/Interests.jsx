import "./Interests.css";
import SectionHeading from "../SectionHeading/SectionHeading";

const LISTS = [
  {
    name: "Favorite games",
    items: [
      "The Legend of Zelda: Tears of the Kingdom",
      "Final Fantasy VII",
      "The Legend of Zelda: Ocarina of Time",
      "Monster Hunter World",
      "Animal Crossing: New Leaf",
      "Persona 4: Golden",
      "Horizon Zero Dawn",
    ],
  },
  {
    name: "Favorite consoles",
    items: [
      "New Nintendo 3DS",
      "PlayStation 5",
      "PlayStation Portable",
      "Nintendo Wii",
      "Nintendo Switch",
    ],
  },
  {
    name: "Currently playing",
    items: [
      "Persona 5 Royal",
      "Astro Bot",
      "Monster Hunter Wilds",
      "Tears of the Kingdom (again lol)",
      "Final Fantasy IX",
    ],
  },
];

function Interests() {
  return (
    <section id="interests" className="interests-section">
      <SectionHeading title="Interests" />

      <p className="interests-intro">
        Aside from math and programming, I have a large passion for video
        games and video game consoles. I collect primarily Sony PlayStation
        and Nintendo hardware, and play both modern and retro titles. I also
        run a small business with my cousin restoring and reselling retro
        consoles — mostly handhelds like the PSP and Nintendo 3DS, where we
        repair screens, shells, and more.{" "}
        <a
          href="https://www.ebay.com/usr/neovintagetech"
          target="_blank"
          rel="noreferrer"
        >
          Check out our eBay shop
        </a>
        .
      </p>

      <div className="interests-lists-grid">
        {LISTS.map((col) => (
          <div key={col.name} className="interests-list-group">
            <div className="interests-subtitle">{col.name}</div>

            <ol className="interests-list">
              {col.items.map((item) => (
                <li key={item} className="interests-list-item">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="interests-photos-block">
        <div className="interests-subtitle">Photos of my collection</div>

        <div className="interests-photos">
          <img
            src="/collection_img/collection.jpeg"
            alt="Console and game collection"
            className="interests-photo"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/collection_img/ds.jpeg"
            alt="Nintendo DSi and New Nintendo 3DS"
            className="interests-photo"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/collection_img/new_3ds.jpeg"
            alt="New Nintendo 3DS"
            className="interests-photo"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/collection_img/ps5.jpeg"
            alt="PlayStation 5"
            className="interests-photo"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="interests-other">
        <div className="interests-other-label">Other interests</div>

        <p className="interests-other-copy">
          Reading — mostly fantasy and science fiction; currently working
          through Dune. Exploring new technologies and programming languages.
          Working out, tennis, and pickleball with friends. And a standing
          interest in mathematics and its applications to computer science.
        </p>
      </div>
    </section>
  );
}

export default Interests;
