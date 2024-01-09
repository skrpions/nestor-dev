import './App.css'
import logoImage from './assets/skrpion.png';
import Spinner from './Spinner';
import Carousel from './Carousel';
import { useState, useEffect } from 'react';


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular la obtención de datos u otras tareas de carga
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Ajuste el retraso según sea necesario
  }, []);

  return (
    <>


      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <header>
              <nav>
                {/* <a href="">Inicio</a>
                <a href="">Contactos</a>
                <a href="">Información</a> */}


                <div className="logo-container">

                  <div className="social-icons">

                    <a href="https://github.com/skrpions" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>


                    <a href="https://www.linkedin.com/in/nestor-mart%C3%ADnez-c-751232209/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 448 512">
                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                      </svg>
                    </a>

                  </div>

                  <img src={logoImage} className="logo-image" />
                </div>
              </nav>
            </header>
          </header>
          <Carousel />
        </>
      )}

    </>
  );
}

export default App