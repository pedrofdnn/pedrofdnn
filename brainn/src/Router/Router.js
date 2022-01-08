import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DiaDeSorte from '../Pages/DiaDeSorte/DiaDeSorte'
import LotoFacil from '../Pages/LotoFacil/LotoFacil'
import LotoMania from '../Pages/LotoMania/LotoMania'
import Quina from '../Pages/Quina/Quina'
import TimeMania from '../Pages/TimeMania/TimeMania'
import Error from '../Pages/Error/Error'
import MegaSena from '../Pages/Home/MegaSena'

export default function MainRouter() {
    return (

        <Routes>
            <Route path="/" element={<MegaSena />} />
            <Route path="/DiaDeSorte" element={<DiaDeSorte />} />
            <Route path="/LotoMania" elemment={<LotoMania />} />
            <Route path="/LotoFacil" element={<LotoFacil />} />
            <Route path="/Quina" element={<Quina />} />
            <Route path="/TimeMania" element={<TimeMania />} />
            <Route path="/*" element={<Error />} />
        </Routes>

    )
}
