var ball = {
    pos: [0, 0],
    width: 200,
    velocity: [1, 1],
    colour: [255, 0, 0],
    shape: function() {
        noStroke();
        fill(this.colour);
        ellipse(this.pos[0], this.pos[1], this.width, this.width);
    },
    move: function() {
        this.pos[0] += this.velocity[0];
        this.pos[1] += this.velocity[1];
        this.bounce();
    },
    bounce: function() {
        if (this.pos[0] > width || this.pos[0] < 0) this.velocity[0] *= -1;
        if (this.pos[1] > height || this.pos[1] < 0) this.velocity[1] *= -1;
    },
    on: true
};
