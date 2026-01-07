import React from 'react'
import Card from './components/Card'

const App = () => {

  const Jobs = [
  {
    brandLogo: "https://image.similarpng.com/file/similarpng/original-picture/2020/06/Logo-google-icon-PNG.png",
    company: "Google",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.freeiconspng.com/uploads/apple-icon-4.png",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/019/136/322/small/amazon-logo-amazon-icon-free-free-vector.jpg",
    company: "Amazon",
    datePosted: "10 days ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/6033/6033716.png",
    company: "Meta",
    datePosted: "3 weeks ago",
    post: "UX Researcher",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/2c/0a/4f/2c0a4f200894cb5b84598ed1b558cb86.jpg",
    company: "Netflix",
    datePosted: "1 week ago",
    post: "Motion UI Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$105/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$75/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tesla-icon.png",
    company: "Tesla",
    datePosted: "6 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/5436/5436949.png",
    company: "Adobe",
    datePosted: "8 days ago",
    post: "Visual Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/ba/68/28/ba68282c4b4cc303eaba8de8127cb0ad.jpg",
    company: "Spotify",
    datePosted: "2 months ago",
    post: "Interaction Designer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$115/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJIOGtHi6yLhWs9gI0Bz1T83KoUzuqCQ7IQ&s",
    company: "Uber",
    datePosted: "12 days ago",
    post: "Mobile UI Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Delhi, India"
  }
  ];

  return (
    <div className='parent'>
      {Jobs.map(function(elem, idx){
        return (
        <div key={idx}> 
            <Card brandLogo={elem.brandLogo} companyName={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
        )
      })}
    </div>
  )
}
  
export default App