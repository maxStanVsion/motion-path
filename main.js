gsap.registerPlugin(MotionPathPlugin);

gsap.set(".circle", {xPercent: -50, yPercent: -50, transformOrigin: "50% 50%" })

gsap.to(".circle", {stagger: 1, opacity: 1})

gsap.to(".circle", {stagger: 5, duration: 100, yoyo: true, repeat: -1, ease: Power2.easeOut ,motionPath: {
    path: 'M194.499 86.9996C-7.67939 166.227 -69.2552 286.876 96.6602 294.748C644.661 320.748 1220.96 -70.4745 623.499 13.0001',
}})
