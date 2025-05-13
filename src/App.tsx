import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Career from "./pages/Career";
import Blogs from "./pages/Blogs";
import CustomSoftwareDevelopment from "./services/CustomSoftwareDevelopment";
import CloudComputingServices from "./services/CloudComputingServices";
import MaintenanceAndSupport from "./services/MaintenanceAndSupport";
import WebDevelopment from "./services/WebDevelopment";
import QualityAssuranceAndTesting from "./services/QualityAssuranceAndTesting";
import DevOps from "./services/DevOps";
import MobileAppDevelopment from "./services/MobileAppDevelopment";
import UIUXDesigning from "./services/UIUXDesigning";
import BlockchainSolutions from "./services/BlockchainSolutions";
import Banshwali from "./pages/Banshwali";
import DigitalKhata from "./pages/DigitalKhata";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/banshwali" element={<Banshwali />} />
        <Route path="/digitalkhata" element={<DigitalKhata />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/custom-software-development"
          element={<CustomSoftwareDevelopment />}
        />
        <Route
          path="/services/cloud-computing-services"
          element={<CloudComputingServices />}
        />
        <Route
          path="/services/maintenance-and-support"
          element={<MaintenanceAndSupport />}
        />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route
          path="/services/quality-assurance-and-testing"
          element={<QualityAssuranceAndTesting />}
        />
        <Route path="/services/devops" element={<DevOps />} />
        <Route
          path="/services/mobile-app-development"
          element={<MobileAppDevelopment />}
        />
        <Route path="/services/ui-ux-designing" element={<UIUXDesigning />} />
        <Route
          path="/services/blockchain-solutions"
          element={<BlockchainSolutions />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
