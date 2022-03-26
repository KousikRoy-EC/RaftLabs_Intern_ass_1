import React from "react";
import AddPeople from "./AddPeople/AddPeople";

const Home = () => {
    return (
        <div>
            <h2 style={{ color: "black", fontWeight: "bold" }}>
                ReactJS Developer Test
            </h2>
            <AddPeople />
        </div>
    );
};

export default Home;
