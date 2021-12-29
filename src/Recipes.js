import { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Recipeslist } from "./Recipeslist";

export function Recipes() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://6120e98624d11c001762ee23.mockapi.io/recipes", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setData(data));
  };
  const getType = (type) => {
    fetch(`https://6120e98624d11c001762ee23.mockapi.io/recipes?type=${type}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setData(data));
  };
  useEffect(getData, []);
  const deleteData = (id) => {
    fetch(`https://6120e98624d11c001762ee23.mockapi.io/recipes/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(() => getData());
  };
  return (
    <Paper elevation={3}>
      <div className="buttons">
        <Button variant="contained" onClick={() => getType("Veg")}>
          Veg
        </Button>
        <Button variant="contained" onClick={() => getType("Non-Veg")}>
          Non-Veg
        </Button>
        <Button variant="contained" onClick={() => getData()}>
          All
        </Button>
      </div>
      <div className="list">
        {data.map((data, i) => (
          <div>
            <Recipeslist
              key={i}
              photo={data.photo}
              name={data.name}
              type={data.type}
              description={data.description}
              id={data.id}
              deletedata={
                <IconButton
                  style={{
                    marginLeft: "auto",
                  }}
                  aria-label="delete"
                  color="error"
                  component="span"
                  onClick={() => {
                    deleteData(data.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              }
            />
          </div>
        ))}
      </div>
    </Paper>
  );
}
