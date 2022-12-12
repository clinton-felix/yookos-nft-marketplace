import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
//---------IMPORTING ICONS
import { MdNotifications } from "react-icons/md" // notif icon
import { BsSearch } from "react-icons/bs" // search icons
import { CgMenuLeft, CgMenuRight } from "react-icons/cg"

// --------INTERNAL IMPORTS
import Style from "./Navbar.module.css"
import { Button } from "../componentsindex"
import images from "../../img"
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index"

const Navbar = () => {
  //---USESTATE COMPONENTS
  const [discover, setDiscover] = useState(false)
  const [help, setHelp] = useState(false)
  const [notification, setNotification] = useState(false)
  const [profile, setProfile] = useState(false)
  const [openSideMenu, setOpenSideMenu] = useState(false)

  // Defining the function to open the menu
  const openMenu = (e) => {
    const btnText = e.target.innerText
    if (btnText == "Discover") {
      setDiscover(true)
      setHelp(false)
      setNotification(false)
      setProfile(false)
    } else if (btnText == "Help Center") {
      setDiscover(false)
      setHelp(true)
      setNotification(false)
      setProfile(false)
    } else {
      setDiscover(false)
      setHelp(false)
      setNotification(false)
      setProfile(false)
    }
  }

  // Defining the function to open a Notification
  const openNotification = () => {
    if (!notification) {
      setNotification(true)
      setDiscover(false)
      setHelp(false)
      setProfile(false)
    } else {
      setNotification(false)
    }
  }

  // Defining a function to Open a Profile
  const openProfile = () => {
    if (!profile) {
      setProfile(true)
      setHelp(false)
      setNotification(false)
      setDiscover(false)
    } else {
      setProfile(false)
    }
  }

  // Defining the function to set open a Side Menu
  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true)
    } else {
      setOpenSideMenu(false)
    }
  }

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={images.logo}
              alt="YOOKOS NFT MARKETPLACE"
              width={100}
              height={100}
            />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Searc NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        {/** END OF THE LEFT SECTION
         *
         * DISCOVER MENU BEGINS
         */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/* DISCOVER MENU */}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {/* displays the discover and hides it depending on it's state whether true or false             */}
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {/* displays the Helpcenter and hides it depending on it's state whether true or false*/}
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION MENU */}
          <div className={Style.navbar_container_right_notify}>
            {/* N MENU */}
            <MdNotifications
              className={Style.notify}
              onClick={() => openNotification()}
            />
            {/* displays the Notification and hides it depending on it's state whether true or false*/}
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON SECTIONS */}
          <div className={Style.navbar_container_right_button}>
            <Button btnText="Create" />
          </div>

          {/** USER PROFILE */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />

              {profile && <Profile />}
            </div>
          </div>

          {/** MENU BUTTON */}
          <div className={Style.navbar_container_right_menu_button}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar}
            />
          </div>
        </div>
      </div>

      {/** SIDEBAR COMPONENT {MOBILE ONLY} */}
      {openSideMenu && (
        <div className={Style.SideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  )
}

export default Navbar
