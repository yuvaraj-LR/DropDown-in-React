import { useState } from "react";
import { dropdownlistoptions } from "../utils/dropdownlist"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Dropdown.css";

export const DropDown = () => {
    const [option, setOption] = useState("Select your role");
    const [toggleDropdown, setToggleDropdown] = useState(false);

    const onClickSelectOption = (option) => {
        setOption(option);
        toast(`You have selected role ${option}`);

        setToggleDropdown(!toggleDropdown);
    }

    return (
        <>
            <div className="dropdown_container">
                <ToastContainer
                    position="top-center"
                    theme="dark"
                />
                <p className="dropdown_title">Do you want to select a role from this dropdown?</p>

                <div className="dropdown">
                    <div className="dropdown_box" onMouseOver={() => setToggleDropdown(true)}>
                        <p>{option}</p>
                        <img src={toggleDropdown ? "/icon/caret-up-solid.svg" : "/icon/caret-down-solid.svg"} alt="down-arrow" width="15" />
                    </div>
                    <div className={` ${!toggleDropdown ? "hidden" : "dropdown_option"}`}>
                        <div>
                            {dropdownlistoptions.map((option, i) => (
                                <div key={i} className="options" onClick={() => onClickSelectOption(option)} >{option}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}