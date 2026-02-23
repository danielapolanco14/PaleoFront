"use client";
import React from "react";
import NavBar from "./components/NavBar";

const SubirArchivo = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <NavBar />

      <main className="max-w-4xl mx-auto px-6 pt-32 flex flex-col items-center">
        {/* Título con tu fuente personalizada Krinkes */}
        <h1 className="text-7xl md:text-8xl font-paleo mb-8 text-[#C77DFF] drop-shadow-sm">
          Subir Archivo
        </h1>

        {/* Zona de Arrastre de archivos tipo "Página de Frutas" (Limpia) */}
        <div className="w-full max-w-2xl border-2 border-dashed border-[#C77DFF] rounded-[2rem] p-16 flex flex-col items-center bg-gray-50/50 hover:bg-purple-50/50 transition-all cursor-pointer shadow-inner">
          <div className="bg-[#C77DFF] p-5 rounded-full text-white mb-6 shadow-lg shadow-purple-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-700">
            Selecciona tu PDF o imagen
          </p>
          <p className="text-gray-400 mt-2 text-lg">
            Formatos soportados: PDF, PNG, JPG
          </p>
          <input type="file" className="hidden" id="fileInput" />
        </div>

        {/* Botón de acción */}
        <button className="mt-12 bg-[#C77DFF] hover:bg-[#B366FF] text-white px-14 py-4 rounded-full text-xl font-black transition-all hover:scale-105 shadow-xl shadow-purple-200">
          Iniciar Transcripción
        </button>
      </main>
    </div>
  );
};

export default SubirArchivo;
