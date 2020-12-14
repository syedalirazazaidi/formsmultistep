import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core/";

import { TextField, Button } from "@material-ui/core";
interface allProps {
  value: any;
  // value: {
  // firstName: string;
  // lastName: string;
  // email: string;
  // area: string;
  // city: string;
  // country: string;
  // };
  submit: any;
}
export const Review = ({ value, submit }: allProps) => {
  const { firstName, lastName, email, area, city, country } = value;

  return (
    <>
      <div>
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="E-mail" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="country" secondary={country} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="area" secondary={area} />
          </ListItem>
          <Button onClick={() => submit(1)} variant="contained" color="primary">
            Back
          </Button>
        </List>
      </div>
    </>
  );
};
