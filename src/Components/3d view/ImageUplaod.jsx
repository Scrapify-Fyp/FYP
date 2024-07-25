import React, { useState } from 'react';
import axios from 'axios';
import { storage } from '../../Config/Firbase'; // Import Firebase configuration
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ImageUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [modelUrl, setModelUrl] = useState('');

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    console.log('Upload process started');
    setUploading(true);
    const fileUrls = [];
  
    try {
      for (const file of files) {
        console.log(`Uploading file: ${file.name}`);
        const fileRef = ref(storage, `images/${Date.now()}_${file.name}`);
        
        // Track progress
        await uploadBytes(fileRef, file).then((snapshot) => {
          console.log(`Uploaded ${snapshot.totalBytes} bytes for ${file.name}`);
        });
  
        const fileUrl = await getDownloadURL(fileRef);
        fileUrls.push(fileUrl);
        console.log(`File uploaded and accessible at: ${fileUrl}`);
      }
  
      console.log('All files uploaded, sending request to backend');
      const response = await axios.post('http://localhost:3002/generate-3d-model', { imageUrls: fileUrls });
      console.log(`3D model URL received: ${response.data.modelUrl}`);
      setModelUrl(response.data.modelUrl);
    } catch (error) {
      console.error('Error uploading files or generating model:', error);
    } finally {
      setUploading(false);
    }
  };
  

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Images'}
      </button>
      {modelUrl && (
        <div>
          <h3>3D Model Preview</h3>
          <iframe
            title="3D Model"
            width="600"
            height="400"
            src={`https://sketchfab.com/models/${modelUrl}`}
            frameBorder="0"
            allow="autoplay; fullscreen; vr"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
