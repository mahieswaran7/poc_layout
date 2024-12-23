import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { FaUpload } from "react-icons/fa";

const Poc = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (message && file) {
      alert(`Message: ${message}\nFile Name: ${file.name}`);
      setMessage("");
      setFile(null);
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(135deg, #ece9e6, #ffffff)", // Subtle gradient for the whole page
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          width: "100%",
          padding: "1rem",
          textAlign: "center",
          background: "linear-gradient(to right, #ff7e5f, #feb47b, #86a8e7, #91eae4)",
          color: "#fff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Sprout API
        </Typography>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          width: "100%",
          padding: "2rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* Message Box */}
        <TextField
          label="Enter your message"
          variant="outlined"
          multiline
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            width: "90%",
            maxWidth: "400px",
          }}
        />

        {/* Upload Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            width: "90%",
            maxWidth: "400px",
            cursor: "pointer",
            padding: "0.8rem",
            border: "1px dashed #ccc",
            borderRadius: "6px",
            ":hover": { backgroundColor: "#f3f3f3" },
          }}
          onClick={() => document.getElementById("file-input").click()}
        >
          <FaUpload size={20} />
          <span>{file ? file.name : "Upload File"}</span>
          <input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </Box>

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            padding: "0.8rem 2rem",
            fontSize: "1rem",
            background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
            color: "#fff",
            textTransform: "none",
            width: "90%",
            maxWidth: "200px",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Poc;
