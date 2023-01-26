import SiteSwitcher from "./SiteSwitcher";
import Link from "next/link";
import styles from "./header-logo.module.css";
import TurboAnimated from "./logos/TurboAnimated";
import Image from "next/image";

function HeaderLogo() {
  return (
    <><>





      <Link href="/" title="Home" className="hover:opacity-75">
        <Image
          height={32}

          width={32}

          src={`/images/favicon.png`}
          alt="mooo" />
      </Link>
    </><div><br/>&nbsp;&nbsp;&nbsp;&nbsp;</div><div>
        <h2>Gaur Money</h2>
      </div></>
     

  );
}

export default HeaderLogo;
