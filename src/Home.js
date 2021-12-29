import Paper from "@mui/material/Paper";
import { Recipes } from "./Recipes";

export function Home() {
  return (
    <Paper className="home_Page">
      <h1>FOOD is the ingredient that binds us TOGETHER</h1>
      <img
        src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Not found"
      />
      <Recipes />
    </Paper>
  );
}
