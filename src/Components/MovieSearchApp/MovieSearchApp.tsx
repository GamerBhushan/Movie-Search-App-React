import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";


import reactLogo from "/react.svg";
import viteLogo from '/vite.svg'
import { fetchMovieDetailsByTitle } from "../MyAPI/MyApi";
import MovieCard from "./MovieCard/MovieCard";

export function MovieSearchApp() {


  const [moveiDetails, setMovieDetails] = useState({});

  const navigate = useNavigate();
  
  const [devText, setDevText] = useState("Developed By Bhushan");

  const devArr = ["Developed By Bhushan", "Vite + React + TS"];


  const [isDataSet, setIsDataSet] = useState(false);

  const [inputDisable, setInputDisable] = useState(false);

  const [btnText, setBtnText] = useState("Search");

  const [loadingMessage, setLoadingMessage] = useState("Your Movie Details Appears Here !");


  const [movieTitleInput, setMovieTitleInput] = useState("");


  const [count, setCount] = useState(0);


  useEffect(() => {
    setCount(count);
    document.title = "Movie Search App";
    // console.log("Use Effect Started.");
    const temp = setInterval(() => {
      setCount((prevCount) => {

        const newCount = prevCount + 1 === devArr.length ? 0 : prevCount + 1;
        setDevText(devArr[newCount]); // Update text with new count
        // console.log("Set :", devArr[newCount]);
        return newCount;
      });
    }, 3000);

    return () => clearInterval(temp);
  }, []);

  function showAbout(){
    navigate("/about");
  }
  
  
  async function searchMovieByTitle() {
    setIsDataSet(false);
    setInputDisable(true);
    setBtnText("Wait..")
    // console.log("In Function")
    if(movieTitleInput.trim().length <= 0){
      setLoadingMessage("Invalid Movie Title / Name.");
      // console.log("Invalid Movie Title / Name.")
    }else{
      setIsDataSet(false);
      setLoadingMessage(`Please Wait Searchin For "${movieTitleInput}"`);
      try {
        const movieData = await fetchMovieDetailsByTitle(movieTitleInput);
        console.log(movieData);
        setMovieDetails(movieData);
        setIsDataSet(true);
      } catch (error) {
        setLoadingMessage(error + " ")
        console.log(error);
      }
    }
    setInputDisable(false);
    setBtnText("Search")
  }

  return (
    <>


      <div className="container">


        <motion.div
          className="card left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="button"
            onClick={() => showAbout()}
            
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileFocus={{ scale: 1.05, borderColor: "#4facfe" }}
            whileHover={{ scale: 1.1, backgroundColor: "#4facfe", color: "#fff" }}
            whileTap={{ scale: 0.95 }}
          >
            {devText}
          </motion.button>

          {/* <TypingButton></TypingButton> */}


          <div className="divLogo">
            <a  >
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a >
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>

          <div>
            <h1 className="weather-title">Movies Search App</h1>
          </div>

          {/* <input placeholder="Enter Your City" className="input" /> */}

          <motion.input
            className="input"
            type="text"
            disabled={inputDisable}
            value={movieTitleInput}
            onChange={(e) => setMovieTitleInput(e.target.value)}
            placeholder="Enter Movie Name"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileFocus={{ scale: 1.05, borderColor: "#4facfe" }}
          />
          <div>

          </div>


          {/* <button className= "button" onClick={handleClick}>Check!</button> */}
          <div>
            <motion.button
              className="button"
              disabled={inputDisable}
              onClick={() => searchMovieByTitle()}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileFocus={{ scale: 1.05, borderColor: "#4facfe" }}
              whileHover={{ scale: 1.1, backgroundColor: "#4facfe", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
            >
              {btnText}
            </motion.button>

    


          </div>

        </motion.div>

        <motion.div
          className="card right"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          

          {/* {  showAboutCompo ? <AboutCompo></AboutCompo> : <></> } */}
          
          { isDataSet ? <MovieCard movie={moveiDetails}></MovieCard> : <Loading loadingMessage={loadingMessage}></Loading>}


        </motion.div>

      </div>
    </>
  )
}


function Loading({ loadingMessage }: any) {
  return (
    <>
      <h2>{loadingMessage}</h2>
    </>
  );
}





