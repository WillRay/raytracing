function Controls() {
    this.codes = { 65: 'left', 68: 'right', 87: 'forward', 83: 'backward' };
    this.states = { 'left': false, 'right': false, 'forward': false, 'backward': false };
    document.addEventListener('keydown', this.onKey.bind(this, true), false);
    document.addEventListener('keyup', this.onKey.bind(this, false), false);
    document.addEventListener('mousemove', test.bind(this, false), false);
}

function test(val, e) {
    var state = this.codes[(e.webkitMovementX > 0) ? 65 : 68];
    if (typeof state === 'undefined') return;
    this.states[state] = val;
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
    
}
Controls.prototype.onKey = function (val, e) {
    var state = this.codes[e.keyCode];
    if (typeof state === 'undefined') return;
    this.states[state] = val;
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
};