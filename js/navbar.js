const navbar = function () {
    return {
        open: false,
        entries: [
            { name: 'Home', targetSection: '#home' },
            { name: 'About', targetSection: '#about' },
            { name: 'Skills', targetSection: '#skills' },
            { name: 'Experience', targetSection: '#experience' },
            { name: 'Contact', targetSection: '#contact' },
        ],
    };
};
window.navbar = navbar;
