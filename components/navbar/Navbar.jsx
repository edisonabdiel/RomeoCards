import { GiGlassHeart} from "react-icons/gi";
import Link from "next/link";

import styles from "./Narbar.module.css";

const Navbar = () =>  (
  <div className={styles.nav_container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_logo}>
          <Link href="/" passHref>
            <div>
              <a className={styles.logo}>
                ROMEO
              </a>
              <span className={styles.logo_bold}>
                CARDS
              </span>
            </div>
          </Link>
        </div>
        <div className={styles.badge}>
              <GiGlassHeart />
        </div>
      </div>
    </div>
  ); 

export default Navbar;
