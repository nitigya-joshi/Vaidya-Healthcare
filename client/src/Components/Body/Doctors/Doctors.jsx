import React, { useEffect, useState } from "react";
import BannerProps from "../Banner/BannerProps";
import DoctorRow from "./DoctorRow";
import styles from "./Doctors.module.css";

function Doctors() {

  const [fetchedDoctors, setFetchedDoctors] = useState([]);
  const [renderedDoctors, setRenderedDoctors] = useState([]);
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    let doctors = fetchedDoctors.filter((doctor) => {
      return (location === doctor.clinicaddress.split(',')[0] || location === '' || location === 'Select Location');
    });
    if (sortBy === 'Rating') {
      doctors.sort((a, b) => b.rating - a.rating);
    }
    if (sortBy === 'Consultation Fee') {
      doctors.sort((a, b) => a.fee - b.fee);
    }
    doctors = doctors.filter((doctor) => {
      let searchText = search.toLowerCase();
      return doctor.name.toLowerCase().includes(searchText) || doctor.edu.toLowerCase().includes(searchText) || doctor.category.toLowerCase().includes(searchText);
    });
    setRenderedDoctors(doctors);
  }, [fetchedDoctors, location, sortBy, search]);


  const fetchDoctors = async () => {
    const response = await fetch(`/api/doctors/getdoctors`);
    const data = await response.json()
    setFetchedDoctors(data);
  };

  const renderedDoctorsHtml = renderedDoctors.map((doctor) => {
    return <DoctorRow key={doctor._id} id={doctor._id} imgsrc={doctor.name.length} name={doctor.name} degree={doctor.edu} location={doctor.clinicaddress} fee={doctor.fee} type={doctor.category} rating={doctor.rating} />
  })

  return (
    <div className={`${styles["about-me"]}`}>
      <BannerProps
        img="https://i.imgur.com/oFYPpob.png"
        title="All doctors"
        text="Below is the list of all the doctors registered."
      />
      {/* <div className={`${styles["about-me-part"]}`}>
        <AboutSection fulltext limit={Infinity} />x
      </div> */}
      <div style={{ "minHeight": "80vh" }}>
        <div className={`${styles["main-container"]}`}>
          <div className={`${styles["head"]}`}>
            <select className="form-control" value={location} onChange={(e) => setLocation(e.target.value)}>
              <option>Select Location</option>
              <option>Bengaluru</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Kolkata</option>
              <option>Chennai</option>
              <option>Pune</option>
            </select>
            <input type="text" placeholder="Search..." className="form-control" id="search" style={{}}
              name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className={`${styles["body"]}`}>
            <div className={`${styles["body-head"]}`}>
              <div className={styles["records"]}>Showing :&nbsp;
                <span><b>{renderedDoctors.length}</b></span> results
              </div>
              <div className={styles["result-sorting"]}>
                <span>Sort By:</span>
                <select className="form-control border-0" id="sort-selector" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option>None</option>
                  <option>Rating</option>
                  <option>Consultation Fee</option>
                </select>
              </div>
            </div>
            {renderedDoctorsHtml}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;

