import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CheckRelatonship = ({ users }) => {
    const [checkedData, setCheckedData] = useState([]);

    const { register, handleSubmit } = useForm();
    const onSubmit = (checkedData) => {
        setCheckedData(checkedData);
        if (checkedData.user1 !== "select") {
            Swal.fire(
                `${checkedData.user1} > ${matchedFriend} > ${checkedData.user2} `
            );
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
        checkedData.preventDefault();
    };

    const user1 = checkedData.user1;
    const user2 = checkedData.user2;

    const user1Details = users[0].filter((element) => element.fullName === user1);
    const user2Details = users[0].filter((element) => element.fullName === user2);

    const user1Friend = user1Details[0]?.friend;
    const user2Friend = user2Details[0]?.friend;

    const matchedFriend = user1Friend?.find((element) =>
        user2Friend?.includes(element)
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flexbox">
                <div>
                    <label htmlFor="user1" className="fw-bold">
                        Select user:
                    </label>{" "}
                    <br />
                    <select
                        id="user1"
                        name="user1"
                        {...register("user1")}
                        className="select-option-width px-2 py-1 opt"
                    >
                        <option value="select">Select</option>
                        {users[0]?.map((user) => (
                            <option key={user.fullName} value={user.fullName}>
                                {user.fullName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mx-3">
                    <label htmlFor="relationshipType" className="fw-bold">
                        Type Of Relation:
                    </label>{" "}
                    <br />
                    <select
                        id="relationshipType"
                        name="relationshipType"
                        {...register("relationshipType")}
                        className="select-option-width px-2 py-1 opt"
                    >
                        <option value="friend">Friend</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="user1" className="fw-bold">
                        Select user:
                    </label>{" "}
                    <br />
                    <select
                        id="user1"
                        name="user2"
                        {...register("user2")}
                        className="select-option-width px-2 py-1 opt"
                    >
                        <option value="select">Select</option>
                        {users[0]?.map((user) => (
                            <option key={user.fullName} value={user.fullName}>
                                {user.fullName}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <button type="submit" value="Check Now" onClick={handleSubmit(onSubmit)}>
                Check Relationship
            </button>
        </form>
    );
};

export default CheckRelatonship;
