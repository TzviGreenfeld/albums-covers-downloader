import React from "react";
import Header from "./Header";
// import ThemeContext from "../context/ThemeContextProvider";


export default function Layout(props) {
    //   const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <Header />
            <div className="layout">{props.children}</div>
            <style jsx global>{`
                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }   
                .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
            <style jsx>{`
                .layout {
                padding: 0 2rem;
                }
            `}</style>
        </div>

    );
};
