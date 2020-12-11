import React from "react";

import { TextField, Button } from "@material-ui/core";
export const Address = () => {
  return (
    <div>
      <div>
        <TextField
          margin="normal"
          label="First Name"
          color="secondary"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          margin="normal"
          label="Last Name"
          color="secondary"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          margin="normal"
          label="Contact No"
          color="secondary"
          variant="outlined"
        />
      </div>
      <div>
        <Button variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
};
