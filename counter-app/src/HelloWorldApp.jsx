import React from "react";
import PropTypes from "prop-types";

export const HelloWorldApp = ({ title, subtitle }) => {
  if (!title) {
    throw new Error("title is required");
  }
  return <div>hellow world!!</div>;
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
