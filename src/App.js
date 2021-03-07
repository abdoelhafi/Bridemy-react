import DashMentor from './components/mentor/DashMentor';
import DashMentee from './components/mentee/DashMentee';

import Navbar from './components/mentor/common/NavBar';
import Footer from './components/mentor/common/Footer';
import SideBar from './components/mentor/common/SideBar';

function App() {
  return (
    <div >
      <header >
      </header>
      <body>
        <Navbar/>
        <SideBar/>
        <DashMentor />
{/* <DashMentee /> */}
        <Footer/>
</body>
    </div>
  );
}

export default App;
