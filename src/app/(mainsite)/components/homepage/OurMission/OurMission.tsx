import styles from "./ourmission.module.css"
import Image from "next/image"

export default function OurMission() {
  return (
    <section className={styles.ourMission} id="ourMission">
        <Image className={styles.bgImg} src="/img/our_mission.png" width={1024} height={512} alt="Photo of staff" />

        <img src="./icons/cross.svg" aria-hidden className={styles.cross} />
        
        <div className={styles.content}>
            <h1>Our Mission</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </section>
  )
}
