import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile-picture.png"
          alt="steven profile picture"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I am Steven</h1>
      <p>This is my web development blog</p>
    </section>
  );
};

export default Hero;
