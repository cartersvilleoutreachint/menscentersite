import styles from "./programinfo.module.css"
import Image from "next/image"

export default function ProgramInfo() {
  return (
    <section className={styles.programInfo}>
        <h4>What We Do</h4>
        
        <h1>Our Program</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        <br /><br />
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div style={{backgroundColor: "rgba(255,255,255,0.8)"}} className="shader"></div>
        <Image className="bg-img" src="/img/community.jpg" width={1280} height={720} alt="Image of community" />
    </section>
  )
}
