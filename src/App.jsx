import { Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNotes from "./pages/EditNotes";
import ContextProvider from "./context/Context";



function App() {
  return (
    <ContextProvider>
      <main id="app">
        <Routes>
          <Route path="/" element={<Notes/>} />
          <Route path="/create-note" element={<CreateNote/>} />
          <Route path="/edit-note/:id" element={<EditNotes/>} />
        </Routes>
      </main>
    </ContextProvider>
    
  );
}

export default App;
