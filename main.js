// Add subtle hover animation and ripple effect on profile images

document.querySelectorAll('.profile-link').forEach(link => {
  link.addEventListener('click', function(e) {
    // Ripple effect
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 700);
  });
});

// Add ripple effect styles dynamically
const rippleStyle = document.createElement('style');
rippleStyle.innerHTML = `
  .profile-link { position: relative; overflow: visible; }
  .ripple {
    position: absolute;
    top: 50%; left: 50%;
    width: 10px; height: 10px;
    background: rgba(0,242,254,0.24);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: ripple-animate 0.7s linear;
    pointer-events: none;
    z-index: 3;
  }
  @keyframes ripple-animate {
    from { opacity: 0.8; transform: translate(-50%,-50%) scale(1); }
    to { opacity: 0; transform: translate(-50%,-50%) scale(11); }
  }
`;
document.head.appendChild(rippleStyle);
