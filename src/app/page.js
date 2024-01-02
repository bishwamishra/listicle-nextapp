import React from "react";
import Button from "@/components/Button";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  const headerActions = [
    {
      title: "About",
    },
    {
      title: "Features",
    },
    {
      title: "Pricing",
    },
    {
      title: "Testimonials",
    },
  ];

  const highlights = [
    {
      title: "500+",
      subtitle: "Listings",
      icon: "/group.png",
    },
    {
      title: "100+",
      subtitle: "Users",
      icon: "/vector.png",
    },
    {
      title: "30+",
      subtitle: "Servers",
      icon: "/last.png",
    },
  ];
  return (
    <div className={styles.main}>
      <Header actions={headerActions} />

      <div className={styles.banner}>
        <div className={styles.bannertext}>
          <h1>
            Find <b>all you need</b> in <b>Listicle</b> platform
          </h1>

          <p>
            Listings from different fields - from furnitures to books and
            electronics. Sign up to see
          </p>

          <Button> Get Started</Button>
        </div>
        <div className={styles.bannerimg}>
          <Image
            className={styles.image}
            src="/banner.png"
            alt="banner-image"
            fill
          />
        </div>
      </div>
      {/* highlights */}
      <div className={styles.highlights}>
        {highlights.map((highlight, index) => (
          <React.Fragment key={highlight.title}>
            <div className={styles.highlight}>
              <span className={styles.iconContainer}>
                <Image
                  src={highlight.icon}
                  width={30}
                  height={24}
                  alt={highlight}
                  className={styles.icon}
                />
              </span>

              <h5>{highlight.title}</h5>
              <p>{highlight.subtitle}</p>
            </div>

            {index < highlights.length - 1 && <div className={styles.wall} />}
          </React.Fragment>
        ))}
      </div>
      {/* map */}
      <div className={styles.map}>
        <h2>
          Our awesome apps <br /> are <b style={{ color: "#FF0000" }}>loved</b>{" "}
          worldwide
        </h2>
        <p>
          We care about your users and we always pay huge attention to create{" "}
          <br /> a product that people <b style={{ color: "#FF0000" }}>love</b>{" "}
          to use every day.
        </p>

        <div className={styles.nepalmap}>
          <Image
            style={{ objectFit: "contain" }}
            className={styles.onlymap}
            src="/map.png"
            fill
            sizes="100vw"
            priority={false}
            alt="map-image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
