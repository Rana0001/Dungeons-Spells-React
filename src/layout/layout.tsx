import React from "react";



export const Layout: React.FC = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
        <main className="flex flex-col items-center flex-1 w-full px-20 text-center">
            <h1 className="text-6xl font-bold">
            Welcome to{" "}
            <a className="text-blue-600" href="https://reactjs.org">
                React.js!
            </a>
            </h1>
        </main>
        </div>
    );
    }
    