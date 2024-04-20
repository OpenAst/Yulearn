import { useState, useEffect, React } from 'react';
import api from '../api';

const Module = ({ module }) => {
  const [moduleData, setModuleData] = useState({});

  useEffect(() => {
    const fetchModule = async (e) => {
      try {
        const response = await api.get('api/modules/')
        setModuleData(response.data);
      } catch (err) {
        console.error("Failed to fetch modules")
      }
      
    };

    fetchModule();
    
  }, []);

  return (
    <div>
      {moduleData ? (
        <>
          <h4>{moduleData.title}</h4>
          <p>{moduleData.content}</p>
          <p>{moduleData.video_url}</p>
          <p>{moduleData.order}</p>

        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Module;