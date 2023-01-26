import React from "react";
import Head from "next/head";
import cn from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clients } from "../../clients/Clients";
import { Marquee } from "../../clients/Marquee";
import { TurboheroBackground } from "./TurboHeroBackground";
import { Turborepo } from "./Turborepo";
import { Turbopack } from "./Turbopack";
import { FadeIn } from "../home-shared/FadeIn";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";
import styles from "./index.module.css";
import PackLogo from "../../logos/PackLogo";
import RepoLogo from "../../logos/RepoLogo";
import { Grid, Row } from '@nextui-org/react';

function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div
        className={cn(
          "z-[-1] absolute w-full h-full [--gradient-stop-1:60%] [--gradient-stop-2:85%] lg:[--gradient-stop-1:50%] lg:[--gradient-stop-2:90%]",
          "[--gradient-color-1=rgba(0,0,0,1)] [--gradient-color-2=rgba(0,0,0,0.8)] [--gradient-color-3=rgba(0,0,0,0)]",
          "dark:[--gradient-color-1=rgba(255,255,255,1)] dark:[--gradient-color-2=rgba(255,255,255,0.8)] dark:[--gradient-color-3=rgba(255,255,255,0)]"
        )}
        style={{
          background:
            "linear-gradient(180deg, var(--gradient-color-1) 0%, var(--gradient-color-2) var(--gradient-stop-1), var(--gradient-color-3) var(--gradient-stop-2), 100% transparent)",
        }}
      />
      <span className={cn(styles.leftLights, "opacity-50 dark:opacity-100")} />
      <span className={cn(styles.rightLights, "opacity-50 dark:opacity-100")} />
      <span className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t dark:from-black from-white to-transparent" />
      <span className="bg-gradient-to-b dark:from-black from-white to-transparent absolute top-[20vh] left-0 w-full h-[50vh]" />
      <TurboheroBackground />
    </div>
  );
}

export function CardBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono font-bold text-xs text-black/50 dark:text-white/50  px-[6px] py-[3.25px] tracking-[-0.01em] rounded-[6px] uppercase flex justify-center items-center bg-black/5 dark:bg-white/[0.15] border border-black/[0.1] dark:border-white/[0.1]">
      {children}
    </div>
  );
}

const variants = {
  hidden: { opacity: 0 },
  active: { opacity: 1 },
};

function Card({
  alt,
  href,
  title,
  icon: Icon,
  className,
  children,
}: {
  href: string;
  icon: React.ElementType;
  title: "vault" | "safe" | "cowaii" | "gold" | "ghost" | "gaur2.0" | "max" | "arena" | "dex";
  alt?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [hovering, setHovering] = React.useState(false);
  return (
    <Link
      href={href}
      className={cn(
        styles["counter-border"],
        "w-[calc(100%_-_0px)] h-[304]px sm:!w-[488px] sm:h-[352px]"
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.i
        initial="hidden"
        animate={hovering ? "active" : "hidden"}
        variants={variants}
        aria-hidden="true"
      ></motion.i>
      <div
        className={cn(
          "relative w-full h-full max-w-full !pb-12 pt-8 md:!pb-4 md:!pt-4 p-3 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-[rgba(228,50,219,0.05)]",
          className
        )}
      >
        <div className="flex items-center justify-center flex-1 mb-7 md:mb-0">
          <Icon />
        </div>

        <div className="flex flex-col items-center flex-1">
        
          {children}
        </div>
      </div>
    </Link>
  );
}

function SiteCards() {
  
  return (
    
       <Grid.Container gap={3} justify="center" css={{marginTop: "40px"}}>
        <Grid> 
      <FadeIn delay={0.1}>
        <Card
          title="vault"
          alt="Turborepo"
          icon={Turborepo}
          href="/vaults"
          className="turborepoCardBg"
        >
          <p className="text-xxl !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-50 dark:opacity-70">
            Gaur Vault  
          </p>
        </Card>
      </FadeIn>
      </Grid><Grid> 
      <FadeIn delay={0.2}>
        <Card
          title="safe"
          alt="Turbopack"
          icon={Turbopack}
          href="/diamond"
          className="turbopackCardBg"
        >
        
          <p className="text-xxl !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-50 dark:opacity-70 ">
            Diamond Safes
          </p>
        </Card>
      </FadeIn>
      </Grid> <Grid> 
      <FadeIn delay={0.2}>
        <Card
          title="cowaii"
          alt="Turbopack"
          icon={Turbopack}
          href="/soon"
          className="turbopackCardBg"
        >
          <div className="absolute top-3 left-3">
            <CardBadge>mint now</CardBadge>
          </div>
          <p className="text-xxl !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-50 dark:opacity-70 ">
            Cowaii NFTs
          </p>
        </Card>
      </FadeIn>
      </Grid> <Grid> 
      <FadeIn delay={0.2}>
        <Card
          title="gold"
          alt="Turbopack"
          icon={Turbopack}
          href="/soon"
          className="turbopackCardBg"
        >
          <div className="absolute top-3 left-3">
            <CardBadge>mint now</CardBadge>
          </div>
          <p className="text-xxl !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-50 dark:opacity-70 ">
            Gaur Golden Coins
          </p>
        </Card>
      </FadeIn>
      </Grid> <Grid> 
      <FadeIn delay={0.2}>
        <Card
          title="ghost"
          alt="Turbopack"
          icon={Turbopack}
          href="/soon"
          className="turbopackCardBg"
        >
        
          <p className="text-xxl !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-50 dark:opacity-70 ">
            Ghost Staking NFT utility
          </p>
        </Card>
      </FadeIn>
      </Grid> <Grid> 
      <FadeIn delay={0.2}>
        <Card
          title="gaur2.0"
          alt="Turbopack"
          icon={Turbopack}
          href="/soon"
          className="turbopackCardBg"
        >
          <div className="absolute top-3 left-3">
            <CardBadge>pre production</CardBadge>
          </div>
          <p className="text-xxl  !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-50 dark:opacity-30 ">
            Gaur 2.0
          </p>
        </Card>
      </FadeIn></Grid>
      <Grid> 
      <FadeIn delay={0.2}>
        <Card
          title="max"
          alt="Turbopack"
          icon={Turbopack}
          href="/soon"
          className="turbopackCardBg"
        >
          <div className="absolute top-3 left-3">
            <CardBadge>alpha</CardBadge>
          </div>
          <p className="text-xxl !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-50 dark:opacity-30 ">
            GaurMoney Max
          </p>
        </Card>
      </FadeIn></Grid>
      <Grid> 
      <FadeIn delay={0.2}>
        <Card
          title="arena"
          alt="Turbopack"
          icon={Turbopack}
          href="/soon"
          className="turbopackCardBg"
        >
          <div className="absolute top-3 left-3">
            <CardBadge>pre alpha</CardBadge>
          </div>
          <p className="text-xxl !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-50 dark:opacity-30 ">
           Gaur Arena
          </p>
        </Card>
      </FadeIn></Grid>
      <Grid> 
      <FadeIn delay={0.2}>
        <Card
          title="dex"
          alt="Turbopack"
          icon={Turbopack}
          href="/soon"
          className="turbopackCardBg"
        >
          <div className="absolute top-3 left-3">
            <CardBadge>alpha</CardBadge>
          </div>
          <p className="text-xxl !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-70 dark:opacity-30 ">
            Gaur Dex 
          </p>
        </Card>
      </FadeIn></Grid>
      </Grid.Container>

  );
}

function Teams() {
  return (
    <div className="mx-auto ">
      <p className="bg-contain mb-2 md:!mb-4 text-sm font-semibold tracking-wide text-center text-[#666666] dark:text-[#888888] uppercase">
        Trusted by teams from
        <br className="inline md:hidden" /> around the world
      </p>
      <div className="z-50 grid grid-flow-col grid-rows-6 sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-1">
        <Clients
          companyList={[
            "Vercel",
            "AWS",
            "Microsoft",
            "Adobe",
            "Disney",
            "Netflix",
          ]}
          staticWidth
        />
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <>
      <LandingPageGlobalStyles />
      <main className="relative flex flex-col items-center justify-center w-full h-full  overflow-hidden [--geist-foreground:#fff] dark:[--geist-foreground:#000] [--gradient-stop-1:0px] [--gradient-stop-2:120px] sm:[--gradient-stop-1:0px] sm:[--gradient-stop-2:120px]">
        <Background />
        <FadeIn className="z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="mt-12 lg:!mt-20 mx-6 w-[300px] md:!w-full font-extrabold text-5xl lg:text-6xl leading-tight text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black dark:from-white dark:to-[#AAAAAA]">
            Gaur Money Ecosystem
          </h1>
          <p className="mx-6 text-xl max-h-[112px] md:max-h-[96px] w-[315px] md:w-[660px] md:text-2xl font-space-grotesk text-center text-[#666666] dark:text-[#888888]">
          
          </p>
        </FadeIn>
        <SiteCards />
        <FadeIn delay={0.3} className="z-10 py-16">
         
        </FadeIn>
      </main>
    </>
  );
}

export default LandingPage;

