import React, { useEffect, useState } from "react";
import "./Home.css";
import cloud from "../../Assets/cloud.png";
import shoe1 from "../../Assets/shoe1.png";
import shoe2 from "../../Assets/shoe2.png";
import f1 from "../../Assets/f1.png";
import f2 from "../../Assets/f2.png";
import f3 from "../../Assets/f3.png";
import f4 from "../../Assets/f4.png";
import f5 from "../../Assets/f5.png";
import Footer from "../../Components/Footer/Footer";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const Home = () => {
  const [refSection1, inView1] = useInView({ rootMargin: "-300px" });
  const [refSection2, inView2] = useInView();
  const [refSection3, inView3] = useInView();
  const [refSection4, inView4] = useInView();
  const [loaded1, setloaded1] = useState(false);
  const [loaded2, setloaded2] = useState(false);
  const [loaded3, setloaded3] = useState(false);
  const [loaded4, setloaded4] = useState(false);
  const animation1 = useAnimation();
  const animationImg1 = useAnimation();
  const animation2 = useAnimation();
  const animationImg2 = useAnimation();
  const animation3 = useAnimation();
  const animationImg3 = useAnimation();
  const animation4 = useAnimation();

  useEffect(() => {
    if (inView1 && !loaded1) {
      animation1.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
      animationImg1.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      });
      setloaded1(true);
    }
    if (!inView1 && !loaded1) {
      animation1.start({
        y: "10vw",
        opacity: 0,
      });
      animationImg1.start({
        y: "10vw",
        opacity: 0,
      });
    }
  }, [inView1, animationImg1, animation1, loaded1]);

  useEffect(() => {
    if (inView2 && !loaded2) {
      animation2.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
      animationImg2.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      });
      setloaded2(true);
    }
    if (!inView2 && !loaded2) {
      animation2.start({
        y: "10vw",
        opacity: 0,
      });
      animationImg2.start({
        y: "10vw",
        opacity: 0,
      });
    }
  }, [inView2, animation2, animationImg2, loaded2]);
  useEffect(() => {
    if (inView3 && !loaded3) {
      animation3.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
      animationImg3.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      });
      setloaded3(true);
    }
    if (!inView3 && !loaded3) {
      animation3.start({
        y: "10vw",
        opacity: 0,
      });
      animationImg3.start({
        y: "10vw",
        opacity: 0,
      });
    }
  }, [inView3, animationImg3, animation3, loaded3]);
  useEffect(() => {
    if (inView4 && !loaded4) {
      animation4.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
      setloaded4(true);
    }
    if (!inView4 && !loaded4) {
      animation4.start({
        y: "10vw",
        opacity: 0,
      });
    }
  }, [inView4, animation4, loaded4]);
  return (
    <>
      <main>
        <section className="section-1-container">
          <div className="section-1-main">
            <h1 className="section-1-header">IMAGINE A PLACE...</h1>
            <p className="section-1-content">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
            <div className="section-1-btn-grp">
              <button className="button section-1-btn-1">
                Download for Windows
              </button>
              <button className="section-1-btn-1 section-1-btn-2">
                open Discord in your browser
              </button>
            </div>
          </div>
          <div className="img-container">
            <img src={cloud} className="img-cloud" alt="img-cloud" />
            <img src={shoe1} className="img-shoe1" alt="img-shoe1" />
            <img src={shoe2} className="img-shoe2" alt="img-shoe2" />
          </div>
        </section>
        <section ref={refSection1} className="section-2-container">
          <motion.img
            animate={animationImg1}
            src={f1}
            alt="frame1"
            className="section-2-img"
          />
          <motion.div animate={animation1} className="section-2-main">
            <h2 className="section-2-container-header">
              Create an invite-only place where you belong
            </h2>
            <p className="section-2-container-content">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </motion.div>
        </section>
        <section
          ref={refSection2}
          className="section-2-container section-alter-container"
        >
          <motion.div
            animate={animationImg2}
            className="section-2-main section-alter-main"
          >
            <h2 className="section-2-container-header">
              Where hanging out is easy
            </h2>
            <p className="section-2-container-content">
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </motion.div>
          <motion.img
            animate={animationImg2}
            src={f2}
            alt="frame2"
            className="section-2-img section-alter-img"
          />
        </section>
        <section ref={refSection3} className="section-2-container">
          <motion.img
            animate={animationImg3}
            src={f3}
            alt="frame3"
            className="section-2-img"
          />

          <motion.div animate={animation3} className="section-2-main">
            <h2 className="section-2-container-header">From few to a fandom</h2>
            <p className="section-2-container-content">
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </motion.div>
        </section>
        <motion.section
          animate={animation4}
          ref={refSection4}
          className="section-4-container"
        >
          <h1 className="section-4-header">RELIABLE TECH FOR STAYING CLOSE</h1>
          <p className="section-4-content">
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>

          <img src={f4} className="section-4-img" alt="frame4" />
          <div className="section-4-2">
            <img
              src={f5}
              className="section-4-img section-4-2-img"
              alt="frame5"
            />
            <p className="section-4-p">Ready to start your journey?</p>
            <button className="button section-1-btn-1 section-4-2-btn">
              Download for Windows
            </button>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
