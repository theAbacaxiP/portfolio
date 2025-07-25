import React  from 'react';
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation.jsx';
import Home from './pages/Home.jsx';
import ProjectsView from './pages/ProjectsView.jsx';
import BlogView from './pages/BlogView.jsx';
import Error404 from './pages/Error404.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Project_1 from './Posts/project_1/Project_1.jsx';
import Project_1 from './Posts/project_2/Project_2.jsx';
import Blog_1 from './Posts/blog_1/Blog_1.jsx';
import Blog_2 from './Posts/blog_2/Blog_2.jsx';

function App() {

  const footerStyles = {
    top:`${window.document.body.offsetHeight}px`,
  };

  return (
    <>
      <Router>
      <Navigation/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/projects' element={<ProjectsView/>}/>
          <Route path='/blog' element={<BlogView/>}/>
          <Route path='/about-me' element={<AboutMe/>}/>
          <Route path='*' element={<Error404/>}/>
          <Route path='/projects/project-1' element={<Project_1/>}/>
          <Route path='/projects/project-2' element={<Project_2/>}/>
          <Route path='/blog/blog-1' element={<Blog_1/>}/>
          <Route path='/blog/blog-2' element={<Blog_2/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
