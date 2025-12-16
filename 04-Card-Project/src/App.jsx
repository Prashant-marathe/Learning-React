import Card from './components/Card.jsx'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35UDjzSyUrxI1Yg-6WEwmCe-Np46tEAeEtQ&s",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "full-time",
    tag2: "junior level",
    salary: 45,
    location: "Gurgao, India"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Frontend Developer",
    tag1: "full-time",
    tag2: "senior level",
    salary: 60,
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSObjvUyPT-68_193FOtFD9cQvCSLe_ipoHvw&s",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "full-time",
    tag2: "junior level",
    salary: 42,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s",
    companyName: "Apple",
    datePosted: "7 days ago",
    post: "iOS Developer",
    tag1: "full-time",
    tag2: "senior level",
    salary: 70,
    location: "Delhi, India"
  },
  {
    brandLogo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Meta",
    datePosted: "12 days ago",
    post: "React Developer",
    tag1: "part-time",
    tag2: "junior level",
    salary: 38,
    location: "Remote, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    companyName: "Netflix",
    datePosted: "2 days ago",
    post: "Platform Engineer",
    tag1: "full-time",
    tag2: "senior level",
    salary: 80,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://crystalpng.com/wp-content/uploads/2025/05/ibm-logo.png",
    companyName: "IBM",
    datePosted: "15 days ago",
    post: "Data Analyst",
    tag1: "full-time",
    tag2: "junior level",
    salary: 35,
    location: "Hydrabad, India"
  },
  {
    brandLogo: "https://images.icon-icons.com/2699/PNG/512/oracle_logo_icon_168918.png",
    companyName: "Oracle",
    datePosted: "9 days ago",
    post: "Database Engineer",
    tag1: "full-time",
    tag2: "senior level",
    salary: 65,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://toppng.com/uploads/preview/salesforce-transparent-logo-115525063493207zrqpiz.png",
    companyName: "Salesforce",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "part-time",
    tag2: "junior level",
    salary: 40,
    location: "Remote, India"
  },
  {
    brandLogo: "https://static.cdnlogo.com/logos/a/90/adobe.png",
    companyName: "Adobe",
    datePosted: "4 days ago",
    post: "UI/UX Engineer",
    tag1: "full-time",
    tag2: "senior level",
    salary: 55,
    location: "Delhi, India"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx) {
          return <div key={idx}>
             <Card  brandLogo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} salary={elem.salary} location={elem.location} />
          </div>
      })}
    </div>
  )
}

export default App