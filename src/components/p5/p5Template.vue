<template>
    <div id="p5Canvas"></div>
</template>

<script>
import { defineComponent } from 'vue'
import P5 from 'p5'

export default defineComponent({
    mounted() {
        let script = function (p5) {
            var example = 3;
 
            p5.setup = _ => {
                
            }

            p5.draw = _ => {
                
            }
        }

        new P5(script)
    }
}
)
</script>