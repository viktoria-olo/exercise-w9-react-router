// TODO: Import necessary modules and data
import { useParams } from "react-router-dom";
import Songs from "../data/songs.json";

// TODO: Destrcutrue props to receive information coming in from the parent comp
const SongInfo = () => {
  const { songTitle } = useParams();

  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)
  const songInfo = Songs.songs.find(
    (s) => s.title.toLowerCase().replace(/ /g, "-") === songTitle
  );
  if (!songInfo) {
    return <div>Song not found!</div>;
  }
  return (
    <>
      {/* TODO: Display song details or a "Song not found!" message */}
      <div>
        <h2>{songInfo.title}</h2>
        <h2>{songInfo.artist}</h2>
        <h2>{songInfo.album}</h2>
        <h2>{songInfo.year}</h2>
      </div>
    </>
  );
};

export default SongInfo;
