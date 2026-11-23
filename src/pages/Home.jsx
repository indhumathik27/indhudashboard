function Home() {
  return (
    <div className="home-container">

      <h1>Student Dashboard</h1>
      <p className="welcome">
        Welcome to MSAJCE Student Portfolio!
      </p>

      <div className="card-container">

        {/* Student 1 */}
        <div className="student-card">
          <h2>👩‍🎓 Personal Profile</h2>
          <p><b>Name:</b> Indhumathi K</p>
          <p><b>DOB:</b> 27.02.2007</p>
          <p><b>Department:</b> CSE</p>
          <p><b>Year:</b> 3rd Year</p>
          <p><b>College:</b> MSAJCE</p>
        </div>

        {/* Student 2 */}
        <div className="student-card">
          <h2>👩‍🎓 Personal Profile</h2>
          <p><b>Name:</b> Harini R</p>
          <p><b>DOB:</b> 29.05.2008</p>
          <p><b>Department:</b> IT</p>
          <p><b>Year:</b> 2nd Year</p>
          <p><b>College:</b> MSAJCE</p>
        </div>

        {/* Student 3 */}
        <div className="student-card">
          <h2>👨‍🎓 Personal Profile</h2>
          <p><b>Name:</b> Ragavi K</p>
          <p><b>DOB:</b> 04.04.2009</p>
          <p><b>Department:</b> AIML</p>
          <p><b>Year:</b> 1st Year</p>
          <p><b>College:</b> MSAJCE</p>
        </div>

      </div>
    </div>
  );
}

export default Home;