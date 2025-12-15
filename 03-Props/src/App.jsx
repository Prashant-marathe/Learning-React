import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <div className="parent">
        <Card user="Prashant Marathe" desc="Machine Learning Engineer"
        img="https://images.unsplash.com/photo-1639747280929-e84ef392c69a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card user="Umesh Pandhare"
        desc="Python Developer"
        img="https://plus.unsplash.com/premium_photo-1764826536150-20b27adf1ee5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card user="Kundan Mali"
        desc="Hiring Manager"
        img="https://images.unsplash.com/photo-1730451306804-f7d3b0a3c4d5?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card user="Pranav Deore"
        desc="Data Scientist"
        img="https://images.unsplash.com/photo-1737265396678-a7dac6fcdff2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
    </div>
  )
}

export default App