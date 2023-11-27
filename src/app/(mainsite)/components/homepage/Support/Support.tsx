"use client"
import styles from "./support.module.css"
import { InlineIcon } from "@iconify/react"
import Image from "next/image"

export default function Support() {
  return (
    <section className={styles.support}>
        <h1 className={styles.ribbon}>Help support the community.</h1>

        <div className={styles.content}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <a href="https://paypal.com" target="_blank" className="main-cta"><InlineIcon style={{scale: 0.6}} icon="mdi:heart"/> Donate</a>


          <div style={{backgroundColor: "rgba(255,255,255,0.7)"}} className="shader"></div>
          <Image className="bg-img" style={{objectPosition: "center 20%"}} src="/img/community.jpg" width={1280} height={720} alt="Image of community" />
        </div>
    </section>
  )
}
