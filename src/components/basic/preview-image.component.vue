<template>
    <div class="preview-image-page-wrapper">
        <h1>1 - Refer to: https://kipalog.com/posts/To-da-hack-trang-SinhVienIT-net-nhu-the-nao</h1>
        <section>
            <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>

            <div class="fluidbox__wrap"
                v-bind:data-previewed="isImagePreviewed ? 'true' : 'false'"
                @click="togglePreviewImage()">
                <img ref="previewedImage"
                     class="fluidbox__thumb"
                     alt="View Source"
                     src="https://a0.muscache.com/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg"
                     v-bind:style="{
                        opacity: isImagePreviewed ? 0 : 1,
                    }"
                     @load="onImageLoaded($event)">

                <div class="fluidbox__ghost"
                    v-bind:style="{
                        width: imageWidth + 'px',
                        height: imageHeight + 'px',
                        backgroundImage: 'url(https://a0.muscache.com/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg)',
                        opacity: isImagePreviewed ? 1 : 0
                    }">
                </div>

                <div v-if="isImagePreviewed" class="fluidbox__overlay" style="z-index: -1; opacity: 1;"
                 @click="closePreviewImage($event)">
                </div>
            </div>

            <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'PreviewImage',
    props: {},
    data() {
        return {
            imageWidth: 0,
            imageHeight: 0,
            isImagePreviewed: false
        }
    },
    methods: {
        onImageLoaded(e) {
            console.log(e);
            this.imageWidth = this.$refs.previewedImage.clientWidth;
            this.imageHeight = this.$refs.previewedImage.clientHeight;
        },
        togglePreviewImage() {
            this.isImagePreviewed = !this.isImagePreviewed;
        },

        closePreviewImage(event) {
            event.stopPropagation();
            event.preventDefault();
            //
            this.isImagePreviewed = false;
        }
    }
}
</script>

<style lang="scss" scoped>
    .preview-image-page-wrapper {
        max-width: 100%;
        margin: 0 auto;
        padding: 0 200px;
    }

    // Way 1: Fluid
    .fluidbox__wrap {
        position: relative;
        transition: all 0.5s ease-in-out;
        cursor: zoom-in;
        cursor: -moz-zoom-in;
        z-index: 990;
    }

    .fluidbox__thumb {
        display: block;
        max-width: 100%;
        height: auto;
        margin: 2em auto;
        transition: opacity 0s ease-in-out;
    }

    .fluidbox__ghost {
        display: block;
        background-size: 100% 100%;
        background-position: center center;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        transform: translate(0, 0) scale(0.9, 0.9);
        transition-property: opacity, transform;
        transition-duration: 0.5s;
        transition-delay: 0s;
    }

    .fluidbox__wrap[data-previewed="true"] .fluidbox__ghost {
        position: fixed;
        top: 50%;
        left: 50%;
        bottom: 0;
        right: 0;
        transform: translate(-50%, -50%) scale(1, 1);
    }

    .fluidbox__overlay {
        background-color: rgba(255, 255, 255, 0.85);
        cursor: zoom-out;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .fluidbox__wrap[data-previewed="true"] .fluidbox__overlay {
        pointer-events: none;
    }
</style>
