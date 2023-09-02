import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllJobb from './pages/AllJobb';
import JobbPage from './pages/JobbPage';
import Footer from "./components/Footer";
import Post from "./pages/Post";
import Profile from "./pages/Profile";



const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  document.title = "Jobblocket"

function App() {

  return (
    <QueryClientProvider client={client}>
    <Router>
        <Nav />
        <div className="app bg-black h-fit w-full">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"alljobs"} element={<AllJobb />} />
            <Route path={"job/:id"} element={<JobbPage />} />
            <Route path={"postjob"} element={<Post />} />
            <Route path={"profile/:id"} element={<Profile />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      </QueryClientProvider>
  )
}

export default App
