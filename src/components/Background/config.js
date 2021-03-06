export default {
    particles: {
        number: {
            value: 332,
            density: {
                enable: true,
                value_area: 881.8766334760375,
            },
        },
        color: {
            value: '#e8e8da',
        },
        shape: {
            type: 'polygon',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 7,
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.6471010661384636,
            random: true,
            anim: {
                enable: true,
                speed: 0.6496617698410762,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 2.3976023976023977,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.1,
            direction: 'top-right',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: false,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
}