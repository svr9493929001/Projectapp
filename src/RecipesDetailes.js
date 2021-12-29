import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect } from "react";

export function RecipesDetailes() {
  const history = useHistory();
  const { id } = useParams();
  const [data, setData] = useState({});
  const getData = () => {
    fetch(`https://6120e98624d11c001762ee23.mockapi.io/recipes/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setData(data));
  };
  useEffect(getData, [id]);
  return (
    <div className="detailes">
      <h1>{data.name}</h1>
      <iframe
        width="752"
        height="480"
        src={data.viedo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="info">
        <h4>Prep : {data.Prep}</h4>
        <h4>Cock : {data.Cock}</h4>
        <h4>Additional : {data.Additional}</h4>
        <h4>Total : {data.Total}</h4>
        <h4>Serving : {data.Serving}</h4>
        <h4>yield : {data.yield}</h4>
      </div>
      <h5>ingredients: {data.ingredients}</h5>
      <Button
        onClick={() => {
          history.goBack();
        }}
        variant="contained"
      >
        GoBack
      </Button>
    </div>
  );
}
