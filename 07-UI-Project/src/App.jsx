import Section1 from './components/Section 1/Section1'
import Section2 from './components/Section 2/Section2'

const App = () => {

  const users = [
    { img:"https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      intro:"I am a versatile tool, unfolding new skills to solve complex problems. Compact, reliable, and always ready for any challenge.", 
      tag:"Satisfied"
    },
    { img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      intro:"I am your steady needle, filtering through the noise to find true north. Guiding projects toward clarity with unwavering direction.", 
      tag:"Underserved"
    },
    { img:"https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      intro:"I am an eager vessel, soaking up knowledge and experiences. I absorb every detail to squeeze out fresh, creative solutions.", 
      tag:"Underbanked"
    },
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App