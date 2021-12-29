import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";

export function Editrecipes() {
  const history = useHistory();
  const { id } = useParams();
  const [, setdata] = useState({});
  const [Recipename, setRecipename] = useState("");
  const [Recipephoto, setRecipephoto] = useState("");
  const [Type, setType] = useState("");
  const [Description, setDescription] = useState("");
  const [Viedo, setViedo] = useState("");
  const [Preptime, setPreptime] = useState("");
  const [Coocktime, setCoocktime] = useState("");
  const [Additionaltime, setAdditionaltime] = useState("");
  const [Total, setTotal] = useState("");
  const [Serving, setServing] = useState("");
  const [Yeild, setYeild] = useState("");
  const [Ingredients, setIngredients] = useState("");
  const getData = () => {
    fetch(`https://6120e98624d11c001762ee23.mockapi.io/recipes/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        setdata(data);
        setRecipename(data.name);
        setRecipephoto(data.photo);
        setType(data.type);
        setDescription(data.description);
        setViedo(data.viedo);
        setPreptime(data.Prep);
        setCoocktime(data.Cock);
        setAdditionaltime(data.Additional);
        setTotal(data.Total);
        setServing(data.Serving);
        setYeild(data.yield);
        setIngredients(data.ingredients);
      });
  };
  useEffect(getData, [id]);
  const editrecipe = (editRecipe) => {
    fetch("https://6120e98624d11c001762ee23.mockapi.io/recipes/" + id, {
      method: "PUT",
      body: JSON.stringify(editRecipe),
      headers: { "Content-type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => history.push("/"));
  };

  const editRecipe = () => {
    const Recipe = {
      name: Recipename,
      photo: Recipephoto,
      type: Type,
      description: Description,
    };
    editrecipe(Recipe);
  };
  return (
    <div className="movie-form">
      <TextField
        id="outlined-basic"
        label="Recipe name"
        variant="outlined"
        value={Recipename}
        onChange={(event) => setRecipename(event.target.value)}
        placeholder={Recipename}
      />
      <TextField
        id="outlined-basic"
        label="Recipe photo"
        variant="outlined"
        value={Recipephoto}
        onChange={(event) => setRecipephoto(event.target.value)}
        placeholder="Recipe photo"
      />
      <TextField
        id="outlined-basic"
        label="Recipe type"
        variant="outlined"
        value={Type}
        onChange={(event) => setType(event.target.value)}
        placeholder="Recipe type"
      />
      <TextField
        id="outlined-basic"
        label="Recipe description"
        variant="outlined"
        value={Description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Recipe description"
      />
      <TextField
        id="outlined-basic"
        label="Recipe viedo"
        variant="outlined"
        value={Viedo}
        onChange={(event) => setViedo(event.target.value)}
        placeholder="Recipe viedo"
      />
      <TextField
        id="outlined-basic"
        label="Recipe prep time"
        variant="outlined"
        value={Preptime}
        onChange={(event) => setPreptime(event.target.value)}
        placeholder="Recipe prep time"
      />
      <TextField
        id="outlined-basic"
        label="Recipe coock time"
        variant="outlined"
        value={Coocktime}
        onChange={(event) => setCoocktime(event.target.value)}
        placeholder="Recipe coock time"
      />
      <TextField
        id="outlined-basic"
        label="Recipe additional cook time"
        variant="outlined"
        value={Additionaltime}
        onChange={(event) => setAdditionaltime(event.target.value)}
        placeholder="Recipe additional cook time"
      />
      <TextField
        id="outlined-basic"
        label="Recipe total time"
        variant="outlined"
        value={Total}
        onChange={(event) => setTotal(event.target.value)}
        placeholder="Recipe total time"
      />
      <TextField
        id="outlined-basic"
        label="Recipe serving"
        variant="outlined"
        value={Serving}
        onChange={(event) => setServing(event.target.value)}
        placeholder="Recipe serving"
      />
      <TextField
        id="outlined-basic"
        label="Recipe yeild"
        variant="outlined"
        value={Yeild}
        onChange={(event) => setYeild(event.target.value)}
        placeholder="Recipe yeild"
      />
      <TextField
        id="outlined-basic"
        label="Recipe ingredients"
        variant="outlined"
        value={Ingredients}
        onChange={(event) => setIngredients(event.target.value)}
        placeholder="Recipe ingredients"
      />
      <Button onClick={editRecipe}>Submit</Button>
    </div>
  );
}
