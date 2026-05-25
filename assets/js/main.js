gsap.registerPlugin(SplitText);

/*=============== SPLIT TEXT ===============*/
const revealSplit = new SplitText(".reveal-text", {
    type: "chars",
});

const titleSplit = new SplitText(".main-title .line", {
    type: "chars",
});

/*=============== INITIAL STATES ===============*/
gsap.set(titleSplit.chars, {
    y: 200,
    opacity: 0,
    rotateX: -90,
});

gsap.set(".description", {
    opacity: 0,
    y: 50,
});

gsap.set(".btn", {
    opacity: 0,
    y: 40,
});

gsap.set(".menu li", {
    opacity: 0,
    y: -30,
});

gsap.set(".logo-small", {
    opacity: 0,
    x: -30,
});

/*=============== MASTER TIMELINE ===============*/
const tl = gsap.timeline();

/*=============== REVEAL ANIMATION ===============*/
tl.from(revealSplit.chars, {
    y: 300,
    opacity: 0,
    stagger: 0.05,
    duration: 1.2,
    ease: "power4.out",
})

    .to(
        revealSplit.chars,
        {
            y: -300,
            opacity: 0,
            stagger: 0.03,
            duration: 1,
            ease: "power4.in",
        },
        "+=0.5"
    )

    .to(
        ".reveal-overlay",
        {
            clipPath: "inset(0 0 100% 0)",
            duration: 1.4,
            ease: "power4.inOut",
        },
        "-=0.5"
    )

    /*=============== HEADER ===============*/
    .to(
        ".logo-small",
        {
            opacity: 1,
            x: 0,
            duration: 1,
        },
        "-=0.8"
    )

    .to(
        ".menu li",
        {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
        },
        "-=0.8"
    )

    /*=============== TITLE ===============*/
    .to(
        titleSplit.chars,
        {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.03,
            duration: 1.5,
            ease: "expo.out",
        },
        "-=0.8"
    )

    .to(
        ".description",
        {
            opacity: 1,
            y: 0,
            duration: 1.2,
        },
        "-=1"
    )

    .to(
        ".btn",
        {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 1,
        },
        "-=1"
    );

/*=============== FLOATING LETTERS ===============*/
gsap.utils.toArray(".letter").forEach((letter, i) => {
    gsap.to(letter, {
        y: "random(-100, 100)",
        x: "random(-80, 80)",
        rotation: "random(-25, 25)",
        duration: gsap.utils.random(10, 20),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
    });
});

/*=============== MOUSE PARALLAX ===============*/
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;

    gsap.to(".hero-content", {
        x: x,
        y: y,
        duration: 1.5,
        ease: "power3.out",
    });

    gsap.to(".glow", {
        x: x * 1.5,
        y: y * 1.5,
        duration: 2,
        ease: "power3.out",
    });
});

/*=============== GLITCH EFFECT ===============*/
function glitchEffect() {
    gsap.to(".main-title", {
        skewX: 10,
        duration: 0.08,
        yoyo: true,
        repeat: 1,
        ease: "none",
    });

    gsap.to(".main-title", {
        x: gsap.utils.random(-10, 10),
        duration: 0.08,
        yoyo: true,
        repeat: 1,
        ease: "none",
    });
}

setInterval(glitchEffect, 3000);
