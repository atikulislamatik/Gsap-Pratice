const buy = document.querySelector(".buy");
const back = document.querySelector(".back-button");

let t1 = gsap.timeline({ paused: true, reversed: true });
let t2 = gsap.timeline({ paused: true, reversed: true });

buy.addEventListener("click", (e) => {
    t2.play();
});

back.addEventListener("click", (e) => {
    t2.reverse();
});

t1.play();

t1.to(".img-1", {
    ease: "elastic.out(1, .8)",
    top: "10%",
    rotate: 0,
    duration: 1.5,
});

t1.to(
    ".single-item h1", {
        ease: "elastic.out(1, .8)",
        bottom: "25%",
        duration: 1.5
    },
    0.3
);

t1.to(
    ".single-item p", {
        ease: "elastic.out(1, .8)",
        bottom: "14%",
        duration: 1.5
    },
    0.4
);


t1.from(
    ".buy", {
        ease: "elastic.out(1, .8)",
        scale: 0,
        duration: 1.5
    },
    0.6
);

t2.to(".img-1", {
    ease: "elastic.out(1, .8)",
    top: "-60%",
    duration: 2,
});


t2.to(
    ".single-item h1", {
        ease: "elastic.out(.5, .8)",
        bottom: "-25%",
    },
    0
);

t2.to(
    ".single-item p", {
        ease: "elastic.out(.5, .8)",
        bottom: "-14%",
    },
    0
);

t2.to(
    ".buy i", {
        ease: "power1.inOut",
        scale: 0,
        duration: 0.3,
    },
    0
);

t2.to(
    ".buy", {
        ease: "power1.inOut",
        scaleY: 16,
        width: 390,
        duration: 0.3,
    },
    0.3
);

t2.to(
    ".back-button", {
        ease: "elastic.out(1, .8)",
        bottom: "-20%",
        duration: 1.5,
    },
    0.7
);

t2.to(
    ".img-2", {
        ease: "elastic.out(1, .8)",
        left: "50%",
        duration: 1.5,
    },
    0.5
);

t2.to(
    ".single-item h2", {
        ease: "elastic.out(1, .8)",
        left: "60%",
        duration: 1.5,
    },
    0.5
);

t2.to(
    ".summary", {
        ease: "elastic.out(1, .8)",
        left: "52%",
        duration: 1.5,
    },
    0.6
);




t2.to(
    ".summary-2", {
        ease: "elastic.out(1, .8)",
        left: "52%",
        duration: 1.5,
    },
    0.7
);