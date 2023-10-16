<template>
    <div id="p5Canvas"></div>
</template>

<script>
import { defineComponent } from 'vue'
import P5 from 'p5'

export default defineComponent({
    mounted() {
        let sketch = function (p) {
            let particles = [];
            let numParticles = 50;

            p.setup = function () {
                var canvas = p.createCanvas(500, 500)
                canvas.parent("p5Canvas");
                for (let i = 0; i < numParticles; i++) {
                    particles[i] = new Particle(p.random(p.width), p.random(p.height));
                }
            };

            p.draw = function () {
                p.background(220);

                for (let i = 0; i < particles.length; i++) {
                    particles[i].display();
                    particles[i].move();
                    for (let j = i + 1; j < particles.length; j++) {
                        let d = p.dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                        if (d < 100) {
                            p.stroke(0, 50);
                            p.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                        }
                    }
                }
            };

            class Particle {
                constructor(x, y) {
                    this.x = x;
                    this.y = y;
                    this.vx = p.random(-1, 1);
                    this.vy = p.random(-1, 1);

                    this.move = function () {
                        this.x += this.vx;
                        this.y += this.vy;

                        if (this.x < 0 || this.x > p.width) {
                            this.vx *= -1;
                        }
                        if (this.y < 0 || this.y > p.height) {
                            this.vy *= -1;
                        }
                    };

                    this.display = function () {
                        p.noStroke();
                        p.fill(0);
                        p.ellipse(this.x, this.y, 5, 5);
                    };
                }
            }
        };

        new P5(sketch);
    }
}
)
</script>