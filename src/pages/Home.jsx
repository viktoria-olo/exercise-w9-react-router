// TODO: Import necessary modules and data
import Songs from "../data/songs.json";
import { Link } from "react-router-dom";
const Home = () => {
  // TODO: Implement logic to display the list of songs
  const songsData = Songs.songs;
  return (
    <>
      <div>
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        <ul className="app-ul">
          {songsData.map((song) => (
            <li key={song.rank}>
              <Link to={`/song/${song.title.toLowerCase().replace(/ /g, "-")}`}>
                {song.title} - {song.artist}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;