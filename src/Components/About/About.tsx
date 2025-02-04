// import "../weather/WeatherApp.css"

import { motion } from "framer-motion";
import "./About.css";
import "../MovieSearchApp/MovieSearchApp.css"

export function About() {
    return (
        <>

            <motion.div
            className="card left"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                

                <div className="center">
                    <h1 >Movies Search App</h1>
                    <p>Developed by Bhushan | Built with React, Vite & TypeScript for fast and seamless performance.</p>
                    <p>Search Movie</p>
                </div>

            </motion.div>

        </>
    );
}
