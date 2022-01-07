<template>
    <div>
        <slot></slot>
    </div>
</template>


<script>
import {throttle} from 'lodash';

export default { 
    props: {
        // items: { default: {} },
    },

    mounted(){

        let el = this.$el;
        let originalOffsetTop = this.$el.offsetTop;

        window.addEventListener('scroll',
            throttle( function(){

                if( window.scrollY >= originalOffsetTop){
                    el.classList.add('fixed-to-top');
                }else{
                    el.classList.remove('fixed-to-top');
                }
            }
        ), 300);
    }


};
</script>