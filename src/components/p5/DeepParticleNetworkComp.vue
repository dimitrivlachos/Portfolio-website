<template>
    <div id="p5Canvas"></div>
</template>

<script>
import { defineComponent } from 'vue'
import P5 from 'p5'

export default defineComponent({
    mounted() {
        let sketch = function (p) {
            let numRows = 5; // Number of rows
            let numParticles = 50; // Particles per row
            let particleSpacing = 10; // Spacing between particles
            let amplitude = 30; // Amplitude of sine wave
            let particles = [];

            p.setup = function () {
                var canvas = p.createCanvas(500, 500)
                canvas.parent("p5Canvas");
                for (let i = 0; i < numRows; i++) {
                    particles[i] = [];
                    for (let j = 0; j < numParticles; j++) {
                        particles[i][j] = new Particle(
                            j * particleSpacing,
                            p.height / 2 + i * amplitude
                        );
                    }
                }
            };

            p.draw = function () {
                p.background(220);

                for (let i = 0; i < numRows; i++) {
                    for (let j = 0; j < numParticles; j++) {
                        particles[i][j].display();

                        if (j < numParticles - 1) {
                            p.stroke(0, 50);
                            p.line(
                                particles[i][j].x,
                                particles[i][j].y,
                                particles[i][j + 1].x,
                                particles[i][j + 1].y
                            );
                        }

                        if (i < numRows - 1) {
                            p.line(
                                particles[i][j].x,
                                particles[i][j].y,
                                particles[i + 1][j].x,
                                particles[i + 1][j].y
                            );
                        }
                    }
                }
            };

            class Particle {
                constructor(x, y) {
                    this.x = x;
                    this.y = y;
                }

                display() {
                    p.noStroke();
                    p.fill(0);
                    p.ellipse(this.x, this.y, 5, 5);
                }
            }
        };

        new P5(sketch);
    }
}
)
</script>