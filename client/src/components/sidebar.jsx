import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";


const Sidebar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showAnalyticsSubmenu, setShowAnalyticsSubmenu] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };
  const toggleAnalyticsSubmenu = () =>
    setShowAnalyticsSubmenu(!showAnalyticsSubmenu);

  return (
    <div className="fixed left-0 top-0 w-64 h-full   p-5 font-sans z-50">
      <a
        href="/dashboard"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src={logo} className="h-8" alt="Flowbite Logo" />
      </a>
      <ul className="list-none p-0 m-0">
        <li
          className="flex items-center p-2 mt-10 text-black cursor-pointer transition-colors duration-300 hover:text-blue-500 "
          onClick={() => handleNavigation("/dashboard")}
        >
          <span className="mr-2 flex items-center justify-center w-6 h-6 ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.318 13.5H15.443C14.9293 13.4995 14.4364 13.7027 14.0724 14.065C13.7083 14.4274 13.5029 14.9193 13.501 15.433V19.308C13.5007 19.5631 13.5508 19.8158 13.6483 20.0515C13.7458 20.2872 13.8888 20.5014 14.0692 20.6818C14.2496 20.8622 14.4638 21.0052 14.6995 21.1027C14.9353 21.2002 15.1879 21.2503 15.443 21.25H19.318C19.8315 21.2479 20.3232 21.0423 20.6853 20.6783C21.0475 20.3142 21.2505 19.8215 21.25 19.308V15.433C21.2503 15.1792 21.2005 14.9279 21.1035 14.6933C21.0065 14.4588 20.8642 14.2457 20.6847 14.0663C20.5053 13.8868 20.2922 13.7445 20.0577 13.6475C19.8231 13.5505 19.5718 13.5007 19.318 13.501M8.557 13.5H4.682C4.16859 13.5029 3.67721 13.7089 3.3152 14.073C2.95319 14.437 2.74999 14.9296 2.75 15.443V19.318C2.74974 19.5718 2.79953 19.8231 2.89653 20.0577C2.99353 20.2922 3.13583 20.5053 3.31528 20.6847C3.49474 20.8642 3.70783 21.0065 3.94235 21.1035C4.17687 21.2005 4.42821 21.2503 4.682 21.25H8.557C9.07048 21.2505 9.56324 21.0475 9.92726 20.6853C10.2913 20.3232 10.4969 19.8315 10.499 19.318V15.443C10.4993 15.1879 10.4492 14.9353 10.3517 14.6995C10.2542 14.4638 10.1112 14.2496 9.93079 14.0692C9.75041 13.8888 9.53622 13.7458 9.30048 13.6483C9.06475 13.5508 8.8121 13.5007 8.557 13.501M8.557 2.75H4.682C4.42821 2.74974 4.17687 2.79953 3.94235 2.89653C3.70783 2.99353 3.49474 3.13583 3.31528 3.31528C3.13583 3.49474 2.99353 3.70783 2.89653 3.94235C2.79953 4.17687 2.74974 4.42821 2.75 4.682V8.557C2.74947 9.07048 2.95253 9.56324 3.31468 9.92726C3.67683 10.2913 4.16852 10.4969 4.682 10.499H8.557C8.8121 10.4993 9.06475 10.4492 9.30048 10.3517C9.53622 10.2542 9.75041 10.1112 9.93079 9.93079C10.1112 9.75041 10.2542 9.53622 10.3517 9.30048C10.4492 9.06475 10.4993 8.8121 10.499 8.557V4.682C10.4969 4.16852 10.2913 3.67683 9.92726 3.31468C9.56324 2.95253 9.07048 2.74947 8.557 2.75ZM19.318 2.75H15.443C14.9295 2.74947 14.4368 2.95253 14.0727 3.31468C13.7087 3.67683 13.5031 4.16852 13.501 4.682V8.557C13.5013 9.07197 13.706 9.56577 14.0701 9.92991C14.4342 10.294 14.928 10.4987 15.443 10.499H19.318C19.8315 10.4969 20.3232 10.2913 20.6853 9.92726C21.0475 9.56324 21.2505 9.07048 21.25 8.557V4.682C21.2503 4.42821 21.2005 4.17687 21.1035 3.94235C21.0065 3.70783 20.8642 3.49474 20.6847 3.31528C20.5053 3.13583 20.2922 2.99353 20.0577 2.89653C19.8231 2.79953 19.5718 2.74974 19.318 2.75Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li
          className="flex items-center p-2 text-black cursor-pointer transition-colors duration-300 hover:text-blue-500 "
          onClick={() => handleNavigation("/explore")}
        >
          <span className="mr-2 flex items-center justify-center w-6 h-6 ">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2324 9.90039C10.2324 9.1635 10.3776 8.43383 10.6596 7.75303C10.9416 7.07223 11.3549 6.45364 11.8759 5.93258C12.397 5.41152 13.0156 4.99819 13.6964 4.7162C14.3772 4.4342 15.1069 4.28906 15.8438 4.28906C16.5806 4.28906 17.3103 4.4342 17.9911 4.7162C18.6719 4.99819 19.2905 5.41152 19.8116 5.93258C20.3326 6.45364 20.7459 7.07223 21.0279 7.75303C21.3099 8.43383 21.4551 9.1635 21.4551 9.90039C21.4551 11.3886 20.8639 12.8159 19.8116 13.8682C18.7592 14.9205 17.332 15.5117 15.8438 15.5117C14.3555 15.5117 12.9283 14.9205 11.8759 13.8682C10.8236 12.8159 10.2324 11.3886 10.2324 9.90039ZM15.8438 6.26953C14.8808 6.26953 13.9573 6.65207 13.2763 7.33299C12.5954 8.0139 12.2129 8.93743 12.2129 9.90039C12.2129 10.8634 12.5954 11.7869 13.2763 12.4678C13.9573 13.1487 14.8808 13.5312 15.8438 13.5312C16.8067 13.5312 17.7302 13.1487 18.4112 12.4678C19.0921 11.7869 19.4746 10.8634 19.4746 9.90039C19.4746 8.93743 19.0921 8.0139 18.4112 7.33299C17.7302 6.65207 16.8067 6.26953 15.8438 6.26953ZM10.5625 19.4727C9.77462 19.4727 9.01901 19.7856 8.4619 20.3428C7.90478 20.8999 7.5918 21.6555 7.5918 22.4434V24.0119C7.5918 24.0357 7.60896 24.0568 7.63273 24.0607C13.0711 24.948 18.6177 24.948 24.0548 24.0607C24.066 24.0582 24.076 24.052 24.0834 24.0432C24.0908 24.0344 24.0951 24.0234 24.0957 24.0119V22.4434C24.0957 21.6555 23.7827 20.8999 23.2256 20.3428C22.6685 19.7856 21.9129 19.4727 21.125 19.4727H20.6761C20.6408 19.4733 20.6057 19.4786 20.5718 19.4885L19.4297 19.8621C17.0996 20.623 14.5879 20.623 12.2578 19.8621L11.1144 19.4885C11.0813 19.4788 11.0472 19.4735 11.0127 19.4727H10.5625ZM5.61133 22.4434C5.61133 21.1302 6.13297 19.8709 7.06149 18.9424C7.99002 18.0138 9.24937 17.4922 10.5625 17.4922H11.0114C11.2579 17.4931 11.4973 17.5309 11.7297 17.6057L12.873 17.9794C14.8034 18.6096 16.8841 18.6096 18.8145 17.9794L19.9578 17.6057C20.1889 17.5305 20.4318 17.4922 20.6748 17.4922H21.125C22.4381 17.4922 23.6975 18.0138 24.626 18.9424C25.5545 19.8709 26.0762 21.1302 26.0762 22.4434V24.0119C26.0762 25.0074 25.3553 25.855 24.373 26.0148C18.7242 26.9368 12.9633 26.9368 7.31453 26.0148C6.83946 25.9366 6.40754 25.6924 6.09565 25.3257C5.78376 24.9589 5.61213 24.4933 5.61133 24.0119V22.4434Z"
                fill="#000000"
              />
            </svg>
          </span>
          <Link to="/explore">Explore</Link>
        </li>
        <li
          className="flex items-center p-2 text-black cursor-pointer transition-colors duration-300 hover:text-blue-500 "
          onClick={() => handleNavigation("/stock")}
        >
          <span className="mr-2 flex items-center justify-center w-6 h-6 ">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2324 9.90039C10.2324 9.1635 10.3776 8.43383 10.6596 7.75303C10.9416 7.07223 11.3549 6.45364 11.8759 5.93258C12.397 5.41152 13.0156 4.99819 13.6964 4.7162C14.3772 4.4342 15.1069 4.28906 15.8438 4.28906C16.5806 4.28906 17.3103 4.4342 17.9911 4.7162C18.6719 4.99819 19.2905 5.41152 19.8116 5.93258C20.3326 6.45364 20.7459 7.07223 21.0279 7.75303C21.3099 8.43383 21.4551 9.1635 21.4551 9.90039C21.4551 11.3886 20.8639 12.8159 19.8116 13.8682C18.7592 14.9205 17.332 15.5117 15.8438 15.5117C14.3555 15.5117 12.9283 14.9205 11.8759 13.8682C10.8236 12.8159 10.2324 11.3886 10.2324 9.90039ZM15.8438 6.26953C14.8808 6.26953 13.9573 6.65207 13.2763 7.33299C12.5954 8.0139 12.2129 8.93743 12.2129 9.90039C12.2129 10.8634 12.5954 11.7869 13.2763 12.4678C13.9573 13.1487 14.8808 13.5312 15.8438 13.5312C16.8067 13.5312 17.7302 13.1487 18.4112 12.4678C19.0921 11.7869 19.4746 10.8634 19.4746 9.90039C19.4746 8.93743 19.0921 8.0139 18.4112 7.33299C17.7302 6.65207 16.8067 6.26953 15.8438 6.26953ZM10.5625 19.4727C9.77462 19.4727 9.01901 19.7856 8.4619 20.3428C7.90478 20.8999 7.5918 21.6555 7.5918 22.4434V24.0119C7.5918 24.0357 7.60896 24.0568 7.63273 24.0607C13.0711 24.948 18.6177 24.948 24.0548 24.0607C24.066 24.0582 24.076 24.052 24.0834 24.0432C24.0908 24.0344 24.0951 24.0234 24.0957 24.0119V22.4434C24.0957 21.6555 23.7827 20.8999 23.2256 20.3428C22.6685 19.7856 21.9129 19.4727 21.125 19.4727H20.6761C20.6408 19.4733 20.6057 19.4786 20.5718 19.4885L19.4297 19.8621C17.0996 20.623 14.5879 20.623 12.2578 19.8621L11.1144 19.4885C11.0813 19.4788 11.0472 19.4735 11.0127 19.4727H10.5625ZM5.61133 22.4434C5.61133 21.1302 6.13297 19.8709 7.06149 18.9424C7.99002 18.0138 9.24937 17.4922 10.5625 17.4922H11.0114C11.2579 17.4931 11.4973 17.5309 11.7297 17.6057L12.873 17.9794C14.8034 18.6096 16.8841 18.6096 18.8145 17.9794L19.9578 17.6057C20.1889 17.5305 20.4318 17.4922 20.6748 17.4922H21.125C22.4381 17.4922 23.6975 18.0138 24.626 18.9424C25.5545 19.8709 26.0762 21.1302 26.0762 22.4434V24.0119C26.0762 25.0074 25.3553 25.855 24.373 26.0148C18.7242 26.9368 12.9633 26.9368 7.31453 26.0148C6.83946 25.9366 6.40754 25.6924 6.09565 25.3257C5.78376 24.9589 5.61213 24.4933 5.61133 24.0119V22.4434Z"
                fill="#000000"
              />
            </svg>
          </span>
          <Link to="/stock">Stocks and F&O</Link>
        </li>
        <li
          className="flex items-center p-2 text-black cursor-pointer transition-colors duration-300 hover:text-blue-500 "
          onClick={() => handleNavigation("/mutualfunds")}
        >
          <span className="mr-2 flex items-center justify-center w-6 h-6 ">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2324 9.90039C10.2324 9.1635 10.3776 8.43383 10.6596 7.75303C10.9416 7.07223 11.3549 6.45364 11.8759 5.93258C12.397 5.41152 13.0156 4.99819 13.6964 4.7162C14.3772 4.4342 15.1069 4.28906 15.8438 4.28906C16.5806 4.28906 17.3103 4.4342 17.9911 4.7162C18.6719 4.99819 19.2905 5.41152 19.8116 5.93258C20.3326 6.45364 20.7459 7.07223 21.0279 7.75303C21.3099 8.43383 21.4551 9.1635 21.4551 9.90039C21.4551 11.3886 20.8639 12.8159 19.8116 13.8682C18.7592 14.9205 17.332 15.5117 15.8438 15.5117C14.3555 15.5117 12.9283 14.9205 11.8759 13.8682C10.8236 12.8159 10.2324 11.3886 10.2324 9.90039ZM15.8438 6.26953C14.8808 6.26953 13.9573 6.65207 13.2763 7.33299C12.5954 8.0139 12.2129 8.93743 12.2129 9.90039C12.2129 10.8634 12.5954 11.7869 13.2763 12.4678C13.9573 13.1487 14.8808 13.5312 15.8438 13.5312C16.8067 13.5312 17.7302 13.1487 18.4112 12.4678C19.0921 11.7869 19.4746 10.8634 19.4746 9.90039C19.4746 8.93743 19.0921 8.0139 18.4112 7.33299C17.7302 6.65207 16.8067 6.26953 15.8438 6.26953ZM10.5625 19.4727C9.77462 19.4727 9.01901 19.7856 8.4619 20.3428C7.90478 20.8999 7.5918 21.6555 7.5918 22.4434V24.0119C7.5918 24.0357 7.60896 24.0568 7.63273 24.0607C13.0711 24.948 18.6177 24.948 24.0548 24.0607C24.066 24.0582 24.076 24.052 24.0834 24.0432C24.0908 24.0344 24.0951 24.0234 24.0957 24.0119V22.4434C24.0957 21.6555 23.7827 20.8999 23.2256 20.3428C22.6685 19.7856 21.9129 19.4727 21.125 19.4727H20.6761C20.6408 19.4733 20.6057 19.4786 20.5718 19.4885L19.4297 19.8621C17.0996 20.623 14.5879 20.623 12.2578 19.8621L11.1144 19.4885C11.0813 19.4788 11.0472 19.4735 11.0127 19.4727H10.5625ZM5.61133 22.4434C5.61133 21.1302 6.13297 19.8709 7.06149 18.9424C7.99002 18.0138 9.24937 17.4922 10.5625 17.4922H11.0114C11.2579 17.4931 11.4973 17.5309 11.7297 17.6057L12.873 17.9794C14.8034 18.6096 16.8841 18.6096 18.8145 17.9794L19.9578 17.6057C20.1889 17.5305 20.4318 17.4922 20.6748 17.4922H21.125C22.4381 17.4922 23.6975 18.0138 24.626 18.9424C25.5545 19.8709 26.0762 21.1302 26.0762 22.4434V24.0119C26.0762 25.0074 25.3553 25.855 24.373 26.0148C18.7242 26.9368 12.9633 26.9368 7.31453 26.0148C6.83946 25.9366 6.40754 25.6924 6.09565 25.3257C5.78376 24.9589 5.61213 24.4933 5.61133 24.0119V22.4434Z"
                fill="#000000"
              />
            </svg>
          </span>
          <Link to="/mutualfunds">Mutual Funds</Link>
        </li>
        <li
          className="flex items-center p-2 text-black cursor-pointer transition-colors duration-300 hover:text-blue-500 "
          onClick={() => handleNavigation("/bonds")}
        >
          <span className="mr-2 flex items-center justify-center w-6 h-6 ">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2324 9.90039C10.2324 9.1635 10.3776 8.43383 10.6596 7.75303C10.9416 7.07223 11.3549 6.45364 11.8759 5.93258C12.397 5.41152 13.0156 4.99819 13.6964 4.7162C14.3772 4.4342 15.1069 4.28906 15.8438 4.28906C16.5806 4.28906 17.3103 4.4342 17.9911 4.7162C18.6719 4.99819 19.2905 5.41152 19.8116 5.93258C20.3326 6.45364 20.7459 7.07223 21.0279 7.75303C21.3099 8.43383 21.4551 9.1635 21.4551 9.90039C21.4551 11.3886 20.8639 12.8159 19.8116 13.8682C18.7592 14.9205 17.332 15.5117 15.8438 15.5117C14.3555 15.5117 12.9283 14.9205 11.8759 13.8682C10.8236 12.8159 10.2324 11.3886 10.2324 9.90039ZM15.8438 6.26953C14.8808 6.26953 13.9573 6.65207 13.2763 7.33299C12.5954 8.0139 12.2129 8.93743 12.2129 9.90039C12.2129 10.8634 12.5954 11.7869 13.2763 12.4678C13.9573 13.1487 14.8808 13.5312 15.8438 13.5312C16.8067 13.5312 17.7302 13.1487 18.4112 12.4678C19.0921 11.7869 19.4746 10.8634 19.4746 9.90039C19.4746 8.93743 19.0921 8.0139 18.4112 7.33299C17.7302 6.65207 16.8067 6.26953 15.8438 6.26953ZM10.5625 19.4727C9.77462 19.4727 9.01901 19.7856 8.4619 20.3428C7.90478 20.8999 7.5918 21.6555 7.5918 22.4434V24.0119C7.5918 24.0357 7.60896 24.0568 7.63273 24.0607C13.0711 24.948 18.6177 24.948 24.0548 24.0607C24.066 24.0582 24.076 24.052 24.0834 24.0432C24.0908 24.0344 24.0951 24.0234 24.0957 24.0119V22.4434C24.0957 21.6555 23.7827 20.8999 23.2256 20.3428C22.6685 19.7856 21.9129 19.4727 21.125 19.4727H20.6761C20.6408 19.4733 20.6057 19.4786 20.5718 19.4885L19.4297 19.8621C17.0996 20.623 14.5879 20.623 12.2578 19.8621L11.1144 19.4885C11.0813 19.4788 11.0472 19.4735 11.0127 19.4727H10.5625ZM5.61133 22.4434C5.61133 21.1302 6.13297 19.8709 7.06149 18.9424C7.99002 18.0138 9.24937 17.4922 10.5625 17.4922H11.0114C11.2579 17.4931 11.4973 17.5309 11.7297 17.6057L12.873 17.9794C14.8034 18.6096 16.8841 18.6096 18.8145 17.9794L19.9578 17.6057C20.1889 17.5305 20.4318 17.4922 20.6748 17.4922H21.125C22.4381 17.4922 23.6975 18.0138 24.626 18.9424C25.5545 19.8709 26.0762 21.1302 26.0762 22.4434V24.0119C26.0762 25.0074 25.3553 25.855 24.373 26.0148C18.7242 26.9368 12.9633 26.9368 7.31453 26.0148C6.83946 25.9366 6.40754 25.6924 6.09565 25.3257C5.78376 24.9589 5.61213 24.4933 5.61133 24.0119V22.4434Z"
                fill="#000000"
              />
            </svg>
          </span>
          <Link to="/bonds">Bonds</Link>
        </li>
        <li
          className="flex items-center p-2 text-black cursor-pointer transition-colors duration-300 hover:text-blue-500 "
          onClick={() => handleNavigation("/insurance")}
        >
          <span className="mr-2 flex items-center justify-center w-6 h-6 ">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2324 9.90039C10.2324 9.1635 10.3776 8.43383 10.6596 7.75303C10.9416 7.07223 11.3549 6.45364 11.8759 5.93258C12.397 5.41152 13.0156 4.99819 13.6964 4.7162C14.3772 4.4342 15.1069 4.28906 15.8438 4.28906C16.5806 4.28906 17.3103 4.4342 17.9911 4.7162C18.6719 4.99819 19.2905 5.41152 19.8116 5.93258C20.3326 6.45364 20.7459 7.07223 21.0279 7.75303C21.3099 8.43383 21.4551 9.1635 21.4551 9.90039C21.4551 11.3886 20.8639 12.8159 19.8116 13.8682C18.7592 14.9205 17.332 15.5117 15.8438 15.5117C14.3555 15.5117 12.9283 14.9205 11.8759 13.8682C10.8236 12.8159 10.2324 11.3886 10.2324 9.90039ZM15.8438 6.26953C14.8808 6.26953 13.9573 6.65207 13.2763 7.33299C12.5954 8.0139 12.2129 8.93743 12.2129 9.90039C12.2129 10.8634 12.5954 11.7869 13.2763 12.4678C13.9573 13.1487 14.8808 13.5312 15.8438 13.5312C16.8067 13.5312 17.7302 13.1487 18.4112 12.4678C19.0921 11.7869 19.4746 10.8634 19.4746 9.90039C19.4746 8.93743 19.0921 8.0139 18.4112 7.33299C17.7302 6.65207 16.8067 6.26953 15.8438 6.26953ZM10.5625 19.4727C9.77462 19.4727 9.01901 19.7856 8.4619 20.3428C7.90478 20.8999 7.5918 21.6555 7.5918 22.4434V24.0119C7.5918 24.0357 7.60896 24.0568 7.63273 24.0607C13.0711 24.948 18.6177 24.948 24.0548 24.0607C24.066 24.0582 24.076 24.052 24.0834 24.0432C24.0908 24.0344 24.0951 24.0234 24.0957 24.0119V22.4434C24.0957 21.6555 23.7827 20.8999 23.2256 20.3428C22.6685 19.7856 21.9129 19.4727 21.125 19.4727H20.6761C20.6408 19.4733 20.6057 19.4786 20.5718 19.4885L19.4297 19.8621C17.0996 20.623 14.5879 20.623 12.2578 19.8621L11.1144 19.4885C11.0813 19.4788 11.0472 19.4735 11.0127 19.4727H10.5625ZM5.61133 22.4434C5.61133 21.1302 6.13297 19.8709 7.06149 18.9424C7.99002 18.0138 9.24937 17.4922 10.5625 17.4922H11.0114C11.2579 17.4931 11.4973 17.5309 11.7297 17.6057L12.873 17.9794C14.8034 18.6096 16.8841 18.6096 18.8145 17.9794L19.9578 17.6057C20.1889 17.5305 20.4318 17.4922 20.6748 17.4922H21.125C22.4381 17.4922 23.6975 18.0138 24.626 18.9424C25.5545 19.8709 26.0762 21.1302 26.0762 22.4434V24.0119C26.0762 25.0074 25.3553 25.855 24.373 26.0148C18.7242 26.9368 12.9633 26.9368 7.31453 26.0148C6.83946 25.9366 6.40754 25.6924 6.09565 25.3257C5.78376 24.9589 5.61213 24.4933 5.61133 24.0119V22.4434Z"
                fill="#000000"
              />
            </svg>
          </span>
          <Link to="/insurance">Insurance</Link>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
