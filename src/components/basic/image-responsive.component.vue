<template>
    <div>
        <h3>1 - Device Pixel-Based method - srcset</h3>
        <div class="image__device-pixel-based-method">
            <img class="image__device-pixel-based-method__conent w-100"
                     alt=""
                     srcset="https://a0.muscache.com/im/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg?im_w=1200 1x, https://a0.muscache.com/im/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg?im_w=1920 2x"
                     src="https://a0.muscache.com/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg"
                />
        </div>

        <h3 class="pt-30-c">2 - Fluid-Image method - max-width</h3>
        <div class="image-fluid__container">
            <img class="image-fluid__content"
                     alt=""
                     src="https://a0.muscache.com/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg"
                />
        </div>

        <h3 class="pt-30-c">3 - Art Direction method</h3>

        <h4>3 - Based on different ratios -> different padding-top</h4>
        <div>
            <picture>
                    <source srcset="https://a0.muscache.com/im/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg?im_w=1200 1x, https://a0.muscache.com/im/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg?im_w=1920 2x"
                            media="(min-width: 1128px)">
                    <source srcset="https://a0.muscache.com/im/pictures/4bdbc082-4aa4-4fa5-8200-c0931195b95d.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/4bdbc082-4aa4-4fa5-8200-c0931195b95d.jpg?im_w=1440 2x"
                            media="(min-width: 744px)">
                    <source srcset="https://a0.muscache.com/im/pictures/137fb7ba-01a4-47bc-b885-a854885e235b.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/137fb7ba-01a4-47bc-b885-a854885e235b.jpg?im_w=720 2x">
<!--                    fallback-->
                    <img class="technical-padding-image-container" src="https://a0.muscache.com/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg" alt="">
            </picture>
        </div>

        <h3 class="pt-30-c">4 - Image Type-Switching method</h3>
        <!-- <picture>
            <source type="image/avif" srcset="avif-kitten.svg" />
            <source type="image/webp" srcset="webp-kitten.webp" />
            <img src="kitten.gif" alt="A cute kitten" />
        </picture> -->


        <h3 class="pt-30-c">5 - Padding-Top</h3>
        <div class="technical-padding">
            <div class="technical-padding-container">
                <img class="technical-padding-image-container"
                     alt=""
                     src="https://a0.muscache.com/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg"
                />
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'ImageResponsive',
    props: {},
    data() {
        return {}
    },
    methods: {}
}
</script>

<style lang="scss" scoped>

/**
  How to detect padding-top percentage for Background
  image: 1200x453
    => padding-top: 453/1200 = 43.58%
 */

.technical-padding {
    padding-top: 43.583333%;
    position: relative;
    max-width: 100%;
}

.technical-padding-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.technical-padding-image-container {
    // background
    display: inline-block;
    height: auto;
    width: 100%;
    vertical-align: bottom;
    min-height: 1px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
}

@media (min-width: 744px) {
    .technical-padding {
        padding-top: 100%;
        position: relative;
        max-width: 100%;
    }
}

@media (min-width: 1128px) {
    .technical-padding {
        padding-top: 43.583333%;
        position: relative;
        max-width: 100%;
    }
}

// 2 - FluidContent
.image-fluid__content {
    max-width: 100%;
    height: auto;
}
</style>
