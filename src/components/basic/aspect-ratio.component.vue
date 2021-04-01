<template>
    <div class="">
        <a href="https://web.dev/aspect-ratio/" target="_blank">Refer to: https://web.dev/aspect-ratio/</a>
        <h3>Object-fit</h3>
        <ul class="object-fit-section">
            <li class="object-fit-item">
                <img src="https://images.unsplash.com/photo-1617167152423-61130d40b0fa" alt="" style="object-fit: initial"/>
                <code>object-fit: initial -> re-adjust the image to fill the space</code>
            </li>

            <li class="object-fit-item">
                <img src="https://images.unsplash.com/photo-1617167152423-61130d40b0fa" alt="" style="object-fit: fill"/>
                <code>object-fit: fill -> re-adjust the image to fill the space</code>
            </li>

            <li class="object-fit-item">
                <img src="https://images.unsplash.com/photo-1617167152423-61130d40b0fa" alt="" style="object-fit: cover"/>
                <code>object-fit: cover -> nice cover image but some corner will be cut-off</code>
            </li>

            <li class="object-fit-item">
                <img src="https://images.unsplash.com/photo-1617167152423-61130d40b0fa" alt="" style="object-fit: contain"/>
                <code>object-fit: contain -> ensures that the entire image is always visible</code>
            </li>

            <li class="object-fit-item">
                <img src="https://images.unsplash.com/photo-1617167152423-61130d40b0fa" alt="" style="object-fit: contain"/>
                <code>object-fit: none -> Keep natual size</code>
            </li>
        </ul>

        <hr>
        <h3>Padding-top Hack</h3>
        <pre>
            That means: width divided by height <br>
        </pre>
        <ul>
            <li>1:1 aspect ratio = 1 / 1 = 1 = padding-top: 100%</li>
            <li>4:3 aspect ratio = 3 / 4 = 0.75 = padding-top: 75%</li>
            <li>3:2 aspect ratio = 2 / 3 = 0.66666 = padding-top: 66.67%</li>
            <li>16:9 aspect ratio = 9 / 16 = 0.5625 = padding-top: 56.25%</li>
        </ul>

        <div class="padding-top-section">
            <div class="technical-padding">
                <div class="technical-padding-container">
                    <img src="https://images.unsplash.com/photo-1617167152423-61130d40b0fa" alt=""
                         class="technical-padding-image-container"/>
                </div>
            </div>

            <div class="technical-padding">
                <div class="technical-padding-container">
                    <img src="https://images.unsplash.com/photo-1617167152423-61130d40b0fa" alt=""
                         class="technical-padding-image-container"/>
                </div>
            </div>

            <div class="technical-padding">
                <div class="technical-padding-container">
                    <img src="https://images.unsplash.com/photo-1617167152423-61130d40b0fa" alt=""
                         class="technical-padding-image-container"/>
                </div>
            </div>

            <div class="technical-padding">
                <div class="technical-padding-container">
                    <img src="https://images.unsplash.com/photo-1617167152423-61130d40b0fa" alt=""
                         class="technical-padding-image-container"/>
                </div>
            </div>
        </div>


        <hr>

        <hr>
        <h3>aspect-ratio</h3>
        <ul class="aspect-ratio-section">
            <li class="aspect-ratio-item">
                <img src="https://images.unsplash.com/photo-1617167152423-61130d40b0fa" alt=""/>
            </li>

            <li class="aspect-ratio-item">
                <img src="https://images.unsplash.com/photo-1617167152423-61130d40b0fa" alt=""/>
            </li>

            <li class="aspect-ratio-item">
                <img src="https://images.unsplash.com/photo-1617167152423-61130d40b0fa" alt=""/>
            </li>

            <li class="aspect-ratio-item">
                <img src="https://images.unsplash.com/photo-1617167152423-61130d40b0fa" alt=""/>
            </li>

            <li class="aspect-ratio-item">
                <img src="https://images.unsplash.com/photo-1617167152423-61130d40b0fa" alt=""/>
            </li>
        </ul>

    </div>
</template>

<script>

export default {
    name: 'AspectRatio',
    props: {
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
    .object-fit-section {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .object-fit-item {
        width: 100%;
        list-style-type: none;

        img {
            width: 150px;
            height: 150px;
        }
    }

    /**
    Padding Top
     */
    .padding-top-section {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .technical-padding {
        padding-top: 37.5%; // 15/4
        position: relative;
        //
        max-width: 25%;
        flex: 0 0 25%;
    }

    .technical-padding-container {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }

    .technical-padding-image-container {
        object-fit: cover;
        height: 100%;
    }

    // Aspect-ratio
    .aspect-ratio-section {
        display: grid;
        grid-template-columns: repeat(5, minmax(120px, 1fr));
        gap: 10px;
    }

    .aspect-ratio-item {
        list-style: none;

        img {
            aspect-ratio: 2/3;
            // aspect-ratio: attr(width) / attr(height);
            object-fit: contain;
            width: 100%;
        }
    }
</style>
