import React from "react";
import { createRoot } from 'react-dom/client'
import NotesApp from "./components/NotesApp";

import './assets/css/style.css'

const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <NotesApp />
    </React.StrictMode>
)