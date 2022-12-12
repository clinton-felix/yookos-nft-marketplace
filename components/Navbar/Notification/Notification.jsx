import React from "react"
import Image from "next/image"

// -----INTERNAL IMPORTS
import Style from "./Notification.module.css"

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box_img}>
        <Image
          src={images.user1}
          alt="profile image"
          width={50}
          height={50}
          className={Style.notification_box_img}
        />
      </div>
    </div>
  )
}

export default Notification
