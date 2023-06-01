import { useEffect, useState } from "react";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");
  const [arrowDirection, setArrowDirection] = useState("up");

  useEffect(() => {
    if (isDropdownOpen) {
      setArrowDirection("down");
    } else {
      setArrowDirection("up");
    }
  }, [isDropdownOpen]);

  const handleDropdownClick = () => {
    setIsDropdownOpen((currVal) => !currVal);
  };

  const handleOptionsClick = (e) => {
    setSelected(e.target.value);
    handleDropdownClick();
  };

  const handleDivClick = () => {
    console.log("clicked");
  };

  return (
    <div
      onFocus={() => console.log("focus")}
      // className='dropdown-container'
      className='check'
    >
      <button id='dropdown-button' onClick={handleDropdownClick}>
        {selected}
        <i className={`arrow ${arrowDirection}`}></i>
      </button>
      {isDropdownOpen && (
        <ul id='dropdown-options-containers'>
          <div className={`options-arrow`}></div>

          <li>
            <button
              className='dropdown-options'
              value='The first option'
              onClick={handleOptionsClick}
            >
              The first option
            </button>
          </li>
          <div className='underline'></div>

          <li>
            <button
              className='dropdown-options'
              value='Another one'
              onClick={handleOptionsClick}
            >
              Another one
            </button>
          </li>
          <div className='underline'></div>

          <li>
            <button
              className='dropdown-options'
              value='One more'
              onClick={handleOptionsClick}
            >
              One more
            </button>
          </li>
          <div className='underline'></div>

          <li>
            <button
              className='dropdown-options'
              value='Last one'
              onClick={handleOptionsClick}
            >
              Last one
            </button>
          </li>
          <div className='underline'></div>
        </ul>
      )}
      {/* <select id='' value={selected}>
        <option value='The first option'>The first option</option>
        <option value='Another on'>Another on</option>
      </select> */}
    </div>
  );
};

export default Dropdown;
