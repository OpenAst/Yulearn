import React, { useState } from 'react';
import api from '../api';
import ReactPlayer from 'react-player/lazy';

const ModuleForm = ({ courseId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('')
  const [videoUrl, setVideoUrl] = useState(null)
  const [order, setOrder] = useState()

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post(`/api/modules/${courseId}/`, {
        title,
        content,
        video_url: videoUrl,
        order
      })
    } catch (error) {
      console.error('Failed to create the module', error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      value={title} 
      onChange={e => setTitle(e.target.value)} placeholder="Module Title"
      />
      <textarea value={content} 
      onChange={e => setContent(e.target.value)} placeholder="Content"
      />

      <input type='text' 
        value={videoUrl}
        onChange={e => setVideoUrl(e.target.value)}
        placeholder="Video Url"
      />

      <input type="number"
        value={order}
        onChange={e => setOrder(e.target.value)}
        placeholder="Order"
      />  

      <button type='submit'>Add Module</button>
      
      {videoUrl && (
        <div>
          <h3>Preview:</h3>
          <ReactPlayer 
            className="video-player"
            url={videoUrl}
            controls
          /> 
        </div>
      )}
    </form>
  )
}

export default ModuleForm;