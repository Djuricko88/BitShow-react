import { useState, useEffect } from "react";
import axios from "axios";
import NoData from "./NoData";
import Card from "../components/Card";
import Searchbar from "../components/Searchbar";
import Spinner from "../components/Spinner";

const Homepage = () => {
  const [shows, setShows] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);


  useEffect(() => {
    axios.get("https://api.tvmaze.com/shows")
      .then((response) => {
        console.log(response.data);
        setShows(response.data.slice(0, 72));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filteredShows = shows.filter((show) =>
    show.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  console.log(filteredShows);

  if (Loading) {
    return <Spinner/>;
  }

  if (Error) {
    return <NoData />;
  }
  return (
    <div className="container">
      <Searchbar searchItem={searchItem} setSearchItem={setSearchItem} />
      {filteredShows.length === 0 ? (
        <NoData setSearchItem={setSearchItem} />
      ) : (
        <div className={filteredShows.length === 1 ? "one" : "card-grid"}>
          {filteredShows.map((show) => (
            <Card key={show.id} show={show} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
