import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});

  const { title, description, successMessage, errorMessage, fieldsConfig } =
    props.config;
};

return hi;

export default Form;
