import "./homepage.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const goToNotes = () => {
    navigate("/Home/notes");
  };

  const goToMusic = () => {
    navigate("/Home/musicPage");
  };

  const goToQuotes = () => {
    navigate("/Home/quotes");
  };

  return (
    <div id="homepage">
      <h1 className="titleWelcome">Welcome</h1>
      <h1 className="title">User</h1>

      <section className="grid-container">
        <button onClick={goToNotes} className="item">
          <h2 className="title2">Your </h2>
          <h2 className="title2"> Notes</h2>
        </button>
        <button onClick={goToMusic} className="item">
          <h2 className="title2">Your </h2>
          <h2 className="title2"> Music</h2>
        </button>

        <button onClick={goToQuotes} className="item">
          <h2 className="title2">Your </h2>
          <h2 className="title2"> Quotes</h2>
        </button>

        <button className="item">
          <h2 className="title2">Your</h2>
          <h2 className="title2"> Weather</h2>
        </button>
      </section>
    </div>
  );
}
export default HomePage;
