export default {

    pop: {
        initial: {
            scale: 0
        },

        enter: {
            scale: 1
        },

        transition: {
            type: "spring",
            damping: 20,
            stiffness: 800
        }
    },

    slide: {
        initial: {
            x: -300,
            opacity: 0,
            scale: 0
        },

        enter: {
            x: 0,
            opacity: 1,
            scale: 1
        },

        exit: {
            x: 300,
            opacity: 0
        },

        transition: {
            type: "spring",
            damping: 15,
            stiffness: 300
        }
    }
}