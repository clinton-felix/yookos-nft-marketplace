import React from "react"
import Link from "next/link"

// INTERNAL IMPORT
import Style from "./Discover.module.css"

const Discover = () => {
  //------- DISCOVER NAVIGATION MENU

  // defining an array to contain the list all menus
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ]
  return (
    <div>
      {discover.map((el, i) => (
        // every menu must have a unique key
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Discover
