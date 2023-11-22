// PeopleList.js

import { useNavigate } from "react-router-dom";
import BaseCard from "../../components/BaseCard/BaseCards";
import "./PeopleListPage.css";
import { useState, useEffect } from "react";
import BasePagination from "../../components/BasePagination/BasePagination";
import BaseLoading from "../../components/BaseLoading/BaseLoading";
import fetchData from "../../service/apiService";

const cardContentTitle = ["Birth Year", "Gender", "Skin Color"];

const PeopleList = () => {
  const navigate = useNavigate();
  const [peopleData, setPeopleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setLoading(true);
        const url = `https://swapi.dev/api/people/?page=${currentPage}`;
        const data = await fetchData(url);
        setPeopleData(data.results);
        setTotalPages(Math.ceil(data.count / 10));
      } catch (error) {
        console.error("Error fetching data from SWAPI", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [currentPage]);

  const handleClick = (data) => {
    navigate("/detail", { state: { data } });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="people-list-container">
      <div className="logo-container">
        <img className="logo" src="src/assets/star-wars-logo.svg"></img>
      </div>
      <h1>List of Star Wars People</h1>
      {loading ? (
        <BaseLoading />
      ) : (
        <div>
          <div className="list-container">
            {peopleData.map((person, index) => (
              <div key={index}>
                <BaseCard
                  cardName={person.name}
                  contentTitle={cardContentTitle}
                  contentData={[
                    person.birth_year,
                    person.gender,
                    person.skin_color,
                  ]}
                  handleClick={() => handleClick(person)}
                />
              </div>
            ))}
          </div>
          <BasePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default PeopleList;
