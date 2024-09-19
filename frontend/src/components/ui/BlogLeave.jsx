import React from 'react';

const BlogLeave = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h3 style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}>Leave a Comment</h3>
      <form>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Enter Name"
            style={{
              width: "48%",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <input
            type="email"
            placeholder="Enter email address"
            style={{
              width: "48%",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "15px",
          }}
        />

        <textarea
          placeholder="Message"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            height: "120px",
            marginBottom: "15px",
            resize: "vertical",
          }}
        />

        <button
          type="submit"
          style={{
            color: "#007bff",
            fontSize: "14px",
            fontWeight: "bold",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          POST COMMENT
        </button>
      </form>
    </div>
  );
};

export default BlogLeave;
