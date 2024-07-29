import React from "react";

const ScrapForm = ({ scrapFormData, handleScrapFormChange }) => {   
  return (
    <div className="mt-4">
      <h1 className="mb-4">Material Information Form</h1>
      <div className="mb-3">
        <label>
          What type of material is your product made of?
          <select
            name="material"
            value={scrapFormData.material}
            onChange={handleScrapFormChange}
            className="form-select mt-2"
          >
            <option value="">Select Material</option>
            <option value="Plastic">Plastic</option>
            <option value="Glass">Glass</option>
            <option value="Leather">Leather</option>
          </select>
        </label>
      </div>
      <div className="mb-3">
        <label>
          How would you describe the weight of your product compared to its
          size?
          <select
            name="density"
            value={scrapFormData.density}
            onChange={handleScrapFormChange}
            className="form-select mt-2"
          >
            <option value="">Select Weight</option>
            <option value="0.85">Very Light</option>
            <option value="0.9">Light</option>
            <option value="0.92">Medium</option>
            <option value="0.95">Heavy</option>
          </select>
        </label>
      </div>
      <div className="mb-3">
        <label>
          How flexible is your product?
          <select
            name="flexibility"
            value={scrapFormData.flexibility}
            onChange={handleScrapFormChange}
            className="form-select mt-2"
          >
            <option value="">Select Flexibility</option>
            <option value="High">Very Flexible</option>
            <option value="Medium">Moderately Flexible</option>
            <option value="Low">Not Flexible</option>
          </select>
        </label>
      </div>
      <div className="mb-3">
        <label>
          How durable is your product?
          <select
            name="durability"
            value={scrapFormData.durability}
            onChange={handleScrapFormChange}
            className="form-select mt-2"
          >
            <option value="">Select Durability</option>
            <option value="High">Very Durable</option>
            <option value="Medium">Moderately Durable</option>
            <option value="Low">Not Durable</option>
          </select>
        </label>
      </div>
      <div className="mb-3">
        <label>
          How high is the temperature at which your product melts?
          <select
            name="melting_point"
            value={scrapFormData.melting_point}
            onChange={handleScrapFormChange}
            className="form-select mt-2"
          >
            <option value="">Select Melting Point</option>
            <option value="120">Low</option>
            <option value="130">Medium</option>
            <option value="150">High</option>
          </select>
        </label>
      </div>
      <div className="mb-3">
        <label>
          How recyclable is your product?
          <select
            name="recyclability"
            value={scrapFormData.recyclability}
            onChange={handleScrapFormChange}
            className="form-select mt-2"
          >
            <option value="">Select Recyclability</option>
            <option value="High">Very Recyclable</option>
            <option value="Medium">Moderately Recyclable</option>
            <option value="Low">Not Recyclable</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default ScrapForm;
