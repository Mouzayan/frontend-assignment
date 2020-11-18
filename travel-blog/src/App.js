import headshot from "./images/headshot.jpg";
import heroBackground from "./images/hero-background.jpg";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <header>
        <div className="hdr-logo">
          <div className="logo-ln1">
            <p>Travelize</p>
          </div>
          <div className="logo-ln2">
            <p>My traveling experiences</p>
          </div>
        </div>
        <div className="hdr-nav">
          <div className="link">
            <p>Home</p>
          </div>
          <div className="link">
            <p>Blog</p>
          </div>
          <div className="link current">
            <p>About</p>
          </div>
        </div>
      </header>
      <section>
        <div className="test">
          <div className="hero">
            <img className="hero-img" src={heroBackground} alt="Hero" />
          </div>
          <div className="details">
            <aside>
              <img className="headshot" src={headshot} alt="Profile" />
            </aside>
            <div className="article">
              <h1 className="heading">A little about me</h1>
              <p className="about">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
              <p className="about">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus. Temporibus
                autem quibusdam et aut officiis debitis aut rerum necessitatibus
                saepe eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
              <p className="about">
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.At vero eos et
                accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga.
              </p>
              <p className="about">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus. Temporibus
                autem quibusdam et aut officiis debitis aut rerum necessitatibus
                saepe eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="ftr-year">
          <p>
            {" © "}
            {new Date().getFullYear()} Travelize
          </p>
        </div>
        <div className="ftr-link">
          <p>Privacy Policy Terms and Conditions</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
