/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from "react-router-dom";
import "./PeopleDetailPage.css";
import { useState } from "react";
import { useEffect } from "react";
import fetchData from "../../service/apiService";
import BaseLoading from "../../components/BaseLoading/BaseLoading";

const PeopleDetail = () => {
  const location = useLocation();
  const data = location.state?.data || {};
  const [filmsData, setFilmsData] = useState([]);
  const [speciesData, setSpeciesData] = useState([]);
  const [starShipsData, setStarShipsData] = useState([]);
  const [vehiclesData, setVehiclesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataForCategory = async (urls, setData) => {
      try {
        const categoryPromises = urls.map((url) => fetchData(url));
        const categoryData = await Promise.all(categoryPromises);
        setData(categoryData);
      } catch (error) {
        console.error(`Error fetching category data`, error);
      }
    };

    const fetchAllData = async () => {
      try {
        setLoading(true);

        await Promise.all([
          fetchDataForCategory(data.films || [], setFilmsData),
          fetchDataForCategory(data.species || [], setSpeciesData),
          fetchDataForCategory(data.starships || [], setStarShipsData),
          fetchDataForCategory(data.vehicles || [], setVehiclesData),
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, [data]);

  return (
    <div className="detail-container">
      <div className="logo-container">
        <img className="logo" src="src/assets/star-wars-logo.svg"></img>
      </div>
      <h2>Profile of {data.name}</h2>
      {loading ? (
        <BaseLoading />
      ) : (
        <div>
          <div className="base-blank-card">
            <div className="profile-grid-container">
              <div className="profile-data">
                <span className="font-weight-600">Birth Year</span>
                <span>{data.birth_year}</span>
              </div>
              <div className="profile-data">
                <span className="font-weight-600">Gender</span>
                <span>{data.gender}</span>
              </div>
              <div className="profile-data">
                <span className="font-weight-600">Mass</span>
                <span>{data.mass}</span>
              </div>
              <div className="profile-data">
                <span className="font-weight-600">Height</span>
                <span>{data.height}</span>
              </div>
              <div className="profile-data">
                <span className="font-weight-600">Hair Color</span>
                <span>{data.hair_color}</span>
              </div>
              <div className="profile-data">
                <span className="font-weight-600">Eye Color</span>
                <span>{data.eye_color}</span>
              </div>
              <div className="profile-data">
                <span className="font-weight-600">Skin Color</span>
                <span>{data.skin_color}</span>
              </div>
            </div>
          </div>

          <h2>Species</h2>
          <div className="base-blank-card">
            {speciesData.length === 0 ? (
              <div>No Information Available</div>
            ) : (
              <div>
                {speciesData.map((species, index) => (
                  <div key={index}>
                    <div className="profile-grid-container">
                      <div className="profile-data">
                        <span className="font-weight-600">Name</span>
                        <span>{species.name}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Classification</span>
                        <span>{species.classification}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Designation</span>
                        <span>{species.designation}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Home Wolrd</span>
                        <span>
                          {species.homeworld ? species.homeworld : "n/a"}
                        </span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Language</span>
                        <span>{species.language}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">
                          Average Lifespan
                        </span>
                        <span>{species.average_lifespan}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Average Height</span>
                        <span>{species.average_height}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <h2>Star Ships</h2>
          <div className="base-blank-card">
            {starShipsData.length === 0 ? (
              <div>No Information Available</div>
            ) : (
              <div>
                {starShipsData.map((starship, index) => (
                  <div key={index}>
                    <h3 className="font-weight-600">{starship.name}</h3>
                    <div className="profile-grid-container">
                      <div className="profile-data">
                        <span className="font-weight-600">Starship Class</span>
                        <span>{starship.starship_class}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Model</span>
                        <span>{starship.model}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Manufacturer</span>
                        <span>{starship.manufacturer}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Crew</span>
                        <span>{starship.crew}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Passengers</span>
                        <span>{starship.passengers}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Cargo Capacity</span>
                        <span>{starship.cargo_capacity}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Consumables</span>
                        <span>{starship.consumables}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Length</span>
                        <span>{starship.length}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">
                          Max Atmosphering Speed
                        </span>
                        <span>{starship.max_atmosphering_speed}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">
                          Hyperdrive Rating
                        </span>
                        <span>{starship.hyperdrive_rating}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">MGLT</span>
                        <span>{starship.MGLT}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Cost in Credits</span>
                        <span>{starship.cost_in_credits}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <h2>Vehicles</h2>
          <div className="base-blank-card">
            {vehiclesData.length === 0 ? (
              <div>No Information Available</div>
            ) : (
              <div>
                {vehiclesData.map((vehicle, index) => (
                  <div key={index}>
                    <h3 className="font-weight-600">{vehicle.name}</h3>
                    <div className="profile-grid-container">
                      <div className="profile-data">
                        <span className="font-weight-600">Vehicle Class</span>
                        <span>{vehicle.vehicle_class}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Model</span>
                        <span>{vehicle.model}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Manufacturer</span>
                        <span>{vehicle.manufacturer}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Crew</span>
                        <span>{vehicle.crew}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Passengers</span>
                        <span>{vehicle.passengers}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Cargo Capacity</span>
                        <span>{vehicle.cargo_capacity}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Consumables</span>
                        <span>{vehicle.consumables}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Length</span>
                        <span>{vehicle.length}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">
                          Max Atmosphering Speed
                        </span>
                        <span>{vehicle.max_atmosphering_speed}</span>
                      </div>
                      <div className="profile-data">
                        <span className="font-weight-600">Cost in Credits</span>
                        <span>{vehicle.cost_in_credits}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <h2>Films</h2>
          <div className="base-blank-card">
            {filmsData.length === 0 ? (
              <div>No Information Available</div>
            ) : (
              <div>
                {filmsData.map((film, index) => (
                  <div className="films-container" key={index}>
                    <div className="films-title font-weight-600">
                      Star Wars: Episode {film.episode_id} - {film.title}
                    </div>
                    <div>Release in {film.release_date}</div>
                    <div>Directed by {film.director}</div>
                    <div>Produced by {film.producer}</div>
                    <div className="films-opening-crawl">
                      <q>{film.opening_crawl}</q>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PeopleDetail;
