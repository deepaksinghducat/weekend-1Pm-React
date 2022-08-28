import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const BlogDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    navigate('/');

  },[])

  return (
	<div>BlogDetails</div>
  )
}

export default BlogDetails