"use client"; 
import ProfileSide from '../../../components/profileSide.js';
import Comments from '../../../components/comments.js';
import ActivitySide from '../../../components/activitySide.js'; 
// import '../components/globals.css';

export default  function Home() { 
      
     return (
    <div>
      {/* Use Navbar as a JSX element */}
      {/* Other content for the home page */}
      <main className="main-content">
      <ProfileSide  />
      <Comments  />
      <ActivitySide 
           />
      </main>

    </div>
  );
}