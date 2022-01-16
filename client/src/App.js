import { BrowserRouter, Routes, Route } from "react-router-dom";

import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import Navigation from "./components/Navbar";

import "bootswatch/dist/quartz/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<MessageList />} />
          <Route path="/new-message" element={<MessageForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
