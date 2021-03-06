import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function Recipeslist({
  photo,
  name,
  type,
  description,
  deletedata,
  id,
}) {
  const history = useHistory();
  return (
    <Card sx={{ width: 345 }} className="card">
      <CardMedia component="img" alt="Not found" height="140" image={photo} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}{" "}
          <Typography gutterBottom variant="h5" component="h3">
            {type}
          </Typography>
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            history.push(`/recipes/edit/${id}`);
          }}
        >
          Edit
        </Button>
        <Button
          size="small"
          onClick={() => {
            history.push(`/recipes/${id}`);
          }}
        >
          Learn More
        </Button>
        {deletedata}
      </CardActions>
    </Card>
  );
}
