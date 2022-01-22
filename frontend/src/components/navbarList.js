import Add from "@mui/icons-material/Add";
import MenuBook from "@mui/icons-material/MenuBook";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Star from "@mui/icons-material/Star";

const navbarList = [
  {
    icon: <MenuBook />,
    desc: "My Recipes",
    path: "/myrecipes",
  },

  {
    icon: <Add />,
    desc: "Create Recipes",
    path: "/new",
  },

  {
    icon: <Star />,
    desc: "My Favourites",
    path: "/favourites",
  },
  {
    icon: <ShoppingCart />,
    desc: "My Grocery List",
    path: "/groceryList",
  },
];

export default navbarList;
