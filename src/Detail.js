import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { get } from "./WebService/WebService";
import "./Detail.css";
const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  const fetchHandler = async () => {
    // await axios
    // .get(`http://localhost:5000/getbyid/${id}`) // Use axios.get instead of fetch
    // .then((response) => {
    //   setDetail(response.data);
    //   // console.log(response.data);
    // })
    // .catch((error) => console.error(error));
    let data = await get(`getbyid/${id}`);
    setDetail(data[0]);
  };
  useEffect(() => {
    fetchHandler();
  }, [id]);

  if (!detail) {
    return <div>Loading....</div>;
  }
  console.log(detail);
  // console.log(detail[0].title);

  return (
    <div className="main2">
      <div className="detail">
        <div className="in">
          <div className="title">
            <h2>{detail.title}</h2>
          </div>
          <hr />
          <div className="desc">
            <p>{detail.description}</p>
          </div>
          {/* if we use the above axios method */}
          {/* <p>{detail[0].title}</p> */}
          {/* <p>{detail[0].description}</p> */}
          {/* </div> */}
          <hr />
          <div className="onbutt">
            <button
              className="butt"
              onClick={() => {
                navigate("/");
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
