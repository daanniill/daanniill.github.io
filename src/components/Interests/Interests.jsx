import "./Interests.css";

function Interests() {
  return (
    <section className="interests-section">
      <h2 className="interests-title">Interests</h2>
      <p className="interests-description">
        Aside from math and programming, I have a large passion for video games and video game consoles.
        I have a large collection of primarily Sony PlayStation and Nintendo consoles and games, and I enjoy playing both modern and retro games.
        I also run a small business with my cousin where we restore and resell retro video game consoles and games. We primarily focus on handhelds such as the PSP and Nintendo 3DS where we have fixed and repaired screens, shells, and more.
        Check out our ebay shop <a href="https://www.ebay.com/usr/neovintagetech" target="_blank" rel="noreferrer">here</a>!
      </p>

      <h3 className="interests-subtitle">Favorite Games</h3>
      <ol className="interests-list">
        <li className="interests-list-item">The Legend of Zelda: Tears of the Kingdom</li>
        <li className="interests-list-item">Final Fantasy VII</li>
        <li className="interests-list-item">The Legend of Zelda: Ocarina of Time</li>
        <li className="interests-list-item">Monster Hunter World</li>
        <li className="interests-list-item">Animal Crossing: New Leaf</li>
        <li className="interests-list-item">Persona 4: Golden</li>
        <li className="interests-list-item">Horizon Zero Dawn</li>
      </ol>

      <h3 className="interests-subtitle">Favorite Consoles</h3>
      <ol className="interests-list">
        <li className="interests-list-item">New Nintendo 3DS</li>
        <li className="interests-list-item">PlayStation 5</li>
        <li className="interests-list-item">PlayStation Portable</li>
        <li className="interests-list-item">Nintendo Wii</li>
        <li className="interests-list-item">Nintendo Switch</li>
      </ol>
      
      <h3 className="interests-subtitle">Currently Playing</h3>
      <ol className="interests-list">
        <li className="interests-list-item">Persona 5 Royal</li>
        <li className="interests-list-item">Astro Bot</li>
        <li className="interests-list-item">Monster Hunter Wilds</li>
        <li className="interests-list-item">The Legend of Zelda: Tears of the Kingdom (again lol)</li>
        <li className="interests-list-item">Final Fantasy IX</li>
      </ol>

      <h3 className="interests-subtitle">Photos of my Collection</h3>
      <div className="interests-photos">
        <img src="/collection_img/collection.jpeg" alt="My Collection" className="interests-photo" />
        <img src="/collection_img/ds.jpeg" alt="New 3ds and dsi" className="interests-photo" />
        <img src="/collection_img/new_3ds.jpeg" alt="New 3ds" className="interests-photo" />
        <img src="/collection_img/ps5.jpeg" alt="PlayStation 5" className="interests-photo" />
      </div>

      <h3 className="interests-subtitle">Other Interests</h3>
      <p className="interests-description">
        I also enjoy reading, particularly fantasy and science fiction novels, as well as exploring new technologies and programming languages. Currently, I am reading Dune by Frank Herbert. I also enjoy working out and playing tennis and pickleball with my friends.
        Additionally, I have a strong interest in mathematics and its applications in computer science and software development.
      </p>

    </section>
  );
}

export default Interests;