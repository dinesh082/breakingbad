import React, { useEffect, useState } from "react";
import SingleData from "./SingleData";
import ReactPaginate from "react-paginate";
import Star from "./logo";
function App() {
  const [items, setItems] = useState([]);
  const [pageno, setpageno] = useState(0);
  const [searchName, setSearchName] = useState("");
  const [showall, setshowall] = useState(true);
  const [specific, setspecific] = useState({});
  const userPerPage = 10;
  const ListUrl = "https://www.breakingbadapi.com/api/characters";
  const pageVisted = pageno * userPerPage;
  const displayUsers = items.slice(pageVisted, pageVisted + userPerPage);
  const datafetcher = async (url) => {
    const response = await fetch(url);
    const JsonData = await response.json();

    setItems(JsonData);
  };
  const handler = (e) => {
    e.preventDefault();

    const itemd = items.find((item) => item.name === searchName);
    console.log(itemd);
    if (itemd) {
      console.log(itemd);
      setspecific(itemd);
      setshowall(false);
    }
  };

  useEffect(() => {
    datafetcher(ListUrl);
  }, [items]);
  const changePage = ({ selected }) => {
    setpageno(selected);
  };
  const backToAll = () => {
    setshowall(true);
    setspecific({});
  };
  const pageCount = Math.ceil(items.length / userPerPage);
  return (
    <div className="App">
      <div className="title">
        <Star />
      </div>
      <form className="input">
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.currentTarget.value)}
        />
        <button type="submit" onClick={handler}>
          search
        </button>
        <button type="button" onClick={() => backToAll()}>
          all
        </button>
      </form>
      {showall ? (
        displayUsers.map((item) => {
          const { char_id } = item;
          return <SingleData {...item} key={char_id} />;
        })
      ) : (
        <SingleData {...specific} />
      )}
      <ReactPaginate
        previousLabel="prev"
        nextLabel="next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"prev-btn"}
        nextLinkClassName={"next-btn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;
