import React, { Component } from "react";
import { Container, Box, TextField, Input } from "@mui/material";

class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image_url: "",
      instruction: "",
      serving_size: 0,
      ingredients: [
        {
          name: "",
          measurement: 0,
        },
      ],
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
      instruction: event.target.value,
    });
  };

  handleServingSizeChange = (event) => {
    this.setState({
      serving_size: event.target.value,
    });
  };

  handleMeasurementChange = (event) => {
    this.setState({
      ingredients: {
        measurement: event.target.value,
      },
    });
  };

  handleIngredientNameChange = (event) => {
    this.setState({
      ingredients: {
        name: event.target.value,
      },
    });
  };

  render() {
    return (
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
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div>
            <TextField
              required
              multiline
              id="outlined-multiline-flexible"
              label="Instructions"
              type="text"
              value={this.state.instruction}
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
          <div>
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
          </div>
        </Box>
      </Container>
    );
  }
}

export default RecipeForm;
