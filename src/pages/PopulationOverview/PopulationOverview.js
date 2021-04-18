import React from "react";
import { Route } from "react-router-dom";
import PopulationPreview from "../PopulationPreview/PopulationPreview";

const PopulationOverview = ({ match }) => (
  <Route exact path={`${match.path}/:iso3`} component={PopulationPreview} />
);

export default PopulationOverview;
