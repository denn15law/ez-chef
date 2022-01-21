import Add from "@mui/icons-material/Add";
import BrunchDining from "@mui/icons-material/BrunchDining";
import Home from "@mui/icons-material/Home";
import MenuBook from "@mui/icons-material/MenuBook";
import Search from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Star from "@mui/icons-material/Star";
import Computer from "@mui/icons-material/Computer";
import Person from "@mui/icons-material/Person";

const navbarList = [
  {
    icon: <Search />,
    desc: "Search For Recipes",
    path: "/search",
  },
  {
    icon: <MenuBook />,
    desc: "My Recipes",
    path: "/myrecipes",
  },

  {
    icon: <Add />,
    desc: "Create New Recipe",
    path: "/new",
  },

  {
    icon: <Star />,
    desc: "My Favourites",
    path: "/favourites",
  },
  {
    icon: <ShoppingCart />,
    desc: "Grocery List",
    path: "/groceryList",
  },
];

export default navbarList;
