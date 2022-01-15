import React, { Component } from "react";
import { Container, Box, TextField, Input } from "@mui/material";
import axios from "axios";

class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleInstructionChange = this.handleInstructionChange.bind(this);
    this.handleServingSizeChange = this.handleServingSizeChange.bind(this);

    this.state = {
      title: "",
      image_url: "",
      instructions: "",
      serving_size: 0,
      // ingredients: [
      //   {
      //     name: "",
      //     measurement: 0,
      //   },
      // ],
    };
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleURLChange = (event) => {
    this.setState({
      image_url: event.target.value,
    });
  };

  handleInstructionChange = (event) => {
    this.setState({
      instructions: event.target.value,
    });
  };

  handleServingSizeChange = (event) => {
    this.setState({
      serving_size: event.target.value,
    });
  };

  // handleMeasurementChange = (event) => {
  //   this.setState({
  //     ingredients: {
  //       measurement: event.target.value,
  //     },
  //   });
  // };

  // handleIngredientNameChange = (event) => {
  //   this.setState({
  //     ingredients: {
  //       name: event.target.value,
  //     },
  //   });
  // };

  handleSubmit(event) {
    event.preventDefault();

    const recipeObject = {
      title: this.state.title,
      image_url: this.state.image_url,
      instructions: this.state.instructions,
      serving_size: this.state.serving_size,
    };

    axios
      .post("/recipes", recipeObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Container>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}>
            <div>
              <Input
                required
                id="standard-basic"
                label="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </div>
            <div>
              <Input
                required
                id="standard-basic"
                label="image-url"
                placeholder="Image URL"
                value={this.state.image_url}
                onChange={this.handleURLChange}
              />
            </div>
            <div>
              <TextField
                required
                multiline
                id="outlined-multiline-flexible"
                label="Instructions"
                type="text"
                value={this.state.instructions}
                onChange={this.handleInstructionChange}
              />
            </div>
            <div>
              <label>Serving Size</label>
              <input
                type="number"
                value={this.state.serving_size}
                onChange={this.handleServingSizeChange}
                min={0}
              />
            </div>
            {/* <div>
              <label>Ingredients</label>
              <input
                type="number"
                value={this.state.ingredients["measurement"]}
                onChange={this.handleMeasurementChange}
                min={0}
              />
              <input
                type="text"
                value={this.state.ingredients["name"]}
                onChange={this.handleIngredientNameChange}
              />
            </div> */}
            <button type="submit">Create</button>
          </Box>
        </Container>
      </form>
    );
  }
}

export default RecipeForm;
