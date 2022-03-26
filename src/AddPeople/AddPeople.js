import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import CheckRelatonship from "./CheckRelationship/CheckRelatonship";
import SelectUser from "./SelectUser/SelectUser";
import SingleUser from "./SingleUser/SingleUser";

const AddPeople = (props) => {
    const [data, setData] = useState([]);

    const { register, handleSubmit } = useForm();
    const onSubmit = (d) => {
        const newData = [...data, d];
        setData(newData);
        if (newData) {
            Swal.fire(`${d.fullName} added successfully!`);
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }

        return newData;
    };

    localStorage.setItem("users", JSON.stringify([data]));

    const getingData = localStorage.getItem("users");
    const users = JSON.parse(getingData);

    return (
        <div className="FormContainer">
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ textAlign: "center" }}>Add User</div>

                    <input
                        className="input"
                        {...register("fullName", { required: true, maxLength: 60 })}
                        placeholder="Enter name"
                    />

                    <button type="submit" value="Add User">
                        Add User
                    </button>
                    <div className="UsersList">
                        {users[0]?.map((user) => (
                            <SingleUser user={user} key={user.fullName}></SingleUser>
                        ))}
                    </div>
                </form>
            </div>

            <div className="form">
                <form>
                    <div style={{ textAlign: "center" }}>Set Relationship</div>
                    <div className="row">
                        <SelectUser users={users}></SelectUser>
                    </div>
                </form>
            </div>

            <div className="form">
                <form>
                    <div style={{ textAlign: "center" }}>Check Relationship</div>
                    <div className="row">
                        <CheckRelatonship users={users}></CheckRelatonship>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPeople;
