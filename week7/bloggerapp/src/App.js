import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [selected, setSelected] = useState('');

  const renderByIfElse = () => {
    if (selected === 'book') {
      return <BookDetails />;
    } else if (selected === 'blog') {
      return <BlogDetails />;
    } else if (selected === 'course') {
      return <CourseDetails />;
    } else {
      return <p>Please select an option.</p>;
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📚 Blogger App</h1>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setSelected('book')}>Book</button>
        <button onClick={() => setSelected('blog')} style={{ marginLeft: '10px' }}>Blog</button>
        <button onClick={() => setSelected('course')} style={{ marginLeft: '10px' }}>Course</button>
        <button onClick={() => setSelected('')} style={{ marginLeft: '10px' }}>Reset</button>
      </div>

      <h2>Using if-else:</h2>
      {renderByIfElse()}

      <h2>Using Ternary Operator:</h2>
      {selected === 'book' ? <BookDetails /> :
        selected === 'blog' ? <BlogDetails /> :
          selected === 'course' ? <CourseDetails /> :
            <p>Please select an option.</p>}

      <h2>Using Logical &&:</h2>
      {selected === 'book' && <BookDetails />}
      {selected === 'blog' && <BlogDetails />}
      {selected === 'course' && <CourseDetails />}

      <h2>Using IIFE:</h2>
      {
        (() => {
          switch (selected) {
            case 'book': return <BookDetails />;
            case 'blog': return <BlogDetails />;
            case 'course': return <CourseDetails />;
            default: return <p>Please select an option.</p>;
          }
        })()
      }
    </div>
  );
}

export default App;
