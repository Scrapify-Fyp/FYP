// import React from "react";

// const ScrapForm = ({ scrapFormData, handleScrapFormChange }) => {   
//   return (
//     <div className="mt-4">
//       <h1 className="mb-4">Material Information Form</h1>
//       <div className="mb-3">
//         <label>
//           What type of material is your product made of?
//           <select
//             name="material"
//             value={scrapFormData.material}
//             onChange={handleScrapFormChange}
//             className="form-select mt-2"
//           >
//             <option value="">Select Material</option>
//             <option value="Plastic">Plastic</option>
//             <option value="Glass">Glass</option>
//             <option value="Leather">Leather</option>
//           </select>
//         </label>
//       </div>
//       <div className="mb-3">
//         <label>
//           How would you describe the weight of your product compared to its
//           size?
//           <select
//             name="density"
//             value={scrapFormData.density}
//             onChange={handleScrapFormChange}
//             className="form-select mt-2"
//           >
//             <option value="">Select Weight</option>
//             <option value="0.85">Very Light</option>
//             <option value="0.9">Light</option>
//             <option value="0.92">Medium</option>
//             <option value="0.95">Heavy</option>
//           </select>
//         </label>
//       </div>
//       <div className="mb-3">
//         <label>
//           How flexible is your product?
//           <select
//             name="flexibility"
//             value={scrapFormData.flexibility}
//             onChange={handleScrapFormChange}
//             className="form-select mt-2"
//           >
//             <option value="">Select Flexibility</option>
//             <option value="High">Very Flexible</option>
//             <option value="Medium">Moderately Flexible</option>
//             <option value="Low">Not Flexible</option>
//           </select>
//         </label>
//       </div>
//       <div className="mb-3">
//         <label>
//           How durable is your product?
//           <select
//             name="durability"
//             value={scrapFormData.durability}
//             onChange={handleScrapFormChange}
//             className="form-select mt-2"
//           >
//             <option value="">Select Durability</option>
//             <option value="High">Very Durable</option>
//             <option value="Medium">Moderately Durable</option>
//             <option value="Low">Not Durable</option>
//           </select>
//         </label>
//       </div>
//       <div className="mb-3">
//         <label>
//           How high is the temperature at which your product melts?
//           <select
//             name="melting_point"
//             value={scrapFormData.melting_point}
//             onChange={handleScrapFormChange}
//             className="form-select mt-2"
//           >
//             <option value="">Select Melting Point</option>
//             <option value="120">Low</option>
//             <option value="130">Medium</option>
//             <option value="150">High</option>
//           </select>
//         </label>
//       </div>
//       <div className="mb-3">
//         <label>
//           How recyclable is your product?
//           <select
//             name="recyclability"
//             value={scrapFormData.recyclability}
//             onChange={handleScrapFormChange}
//             className="form-select mt-2"
//           >
//             <option value="">Select Recyclability</option>
//             <option value="High">Very Recyclable</option>
//             <option value="Medium">Moderately Recyclable</option>
//             <option value="Low">Not Recyclable</option>
//           </select>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default ScrapForm;



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
          How would you describe the weight of your product relative to its size (density in g/cm³)?
          <select
            name="density"
            value={scrapFormData.density}
            onChange={handleScrapFormChange}
            className="form-select mt-2"
          >
            <option value="">Select Density</option>
            <option value="0.5">Very Light (0.5 g/cm³)</option>
            <option value="1">Light (1 g/cm³)</option>
            <option value="2">Medium-Light (2 g/cm³)</option>
            <option value="5">Medium (5 g/cm³)</option>
            <option value="10">Medium-Heavy (10 g/cm³)</option>
            <option value="15">Heavy (15 g/cm³)</option>
            <option value="20">Very Heavy (20 g/cm³)</option>
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
          What is the melting point of your product (in °C)?
          <select
            name="melting_point"
            value={scrapFormData.melting_point}
            onChange={handleScrapFormChange}
            className="form-select mt-2"
          >
            <option value="">Select Melting Point</option>
            <option value="0">0°C</option>
            <option value="500">500°C</option>
            <option value="1000">1000°C</option>
            <option value="1500">1500°C</option>
            <option value="2000">2000°C</option>
            <option value="2500">2500°C</option>
            <option value="3000">3000°C</option>
            <option value="3500">3500°C</option>
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
