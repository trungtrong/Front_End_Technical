<template src="./experience-item.html"></template>

<style lang="scss" scoped>
    @import "./experience-item";
</style>

<script>
export default {
    name: 'ExperienceItem',
    components: {
    },

    data() {
        return {
            experienceItemData: {
                imageUrls: [
                    "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1758862-media_library/original/09aec5b4-f7dd-4b0b-98f4-58336babe3a1.jpeg?aki_policy=poster",
                    "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1758862-media_library/original/76e55583-dbf5-4a16-9902-4874ddbdf6d0.jpeg?aki_policy=poster",
					"https://a0.muscache.com/im/pictures/lombard/MtTemplate-1758862-media_library/original/a0289635-abbf-4fe8-b52d-d156158d78f0.jpeg?aki_policy=poster"

                ]
            },

            itemStatuses: [],
            isActive: false,
            intervalTime: null,

            // Video
            showVideo: false
        }
    },

    mounted() {
        // Image
        this.handleItemStatuses();
        this.handleItemEvent();

        // video
        // this.handleMouseEvent();
    },

    methods: {
        handleItemStatuses() {
            const itemLength = this.experienceItemData.imageUrls.length;
            // create array item
            this.itemStatuses = Array.from({length: itemLength}, () => false);
            this.itemStatuses[0] = true;
        },

        handleItemEvent() {
            const experienceItem = this.$refs.experienceItemReference;
            const that = this;
            experienceItem.addEventListener('mouseenter', function() {
                const itemLength = that.experienceItemData.imageUrls.length;
                let activeIndex = 0;

                that.isActive = true;

                that.intervalTime = setInterval(function() {
                    that.itemStatuses = that.itemStatuses.map(() => false);
                    activeIndex++;
                    if (activeIndex === itemLength) {
                        activeIndex = 0;
                    }
                    that.itemStatuses[activeIndex] = true;

                }, 2500);
            });

            experienceItem.addEventListener('mouseleave', function() {
                that.isActive = false;
                clearInterval(that.intervalTime);
                that.itemStatuses = that.itemStatuses.map(() => false);
                that.itemStatuses[0] = true;
            });
        },

        /**
         * Video Handler
         */
        handleMouseEvent() {
            const experienceItem = this.$refs.experienceItemReference;
            const that = this;
            let video;

            experienceItem.addEventListener('click', function() {
                console.log('focus');

            })
            /**
             * https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
             * https://developers.google.com/web/updates/2017/06/play-request-was-interrupted#fix
             */

            // Step 1: add loading effect

            // Step 2: video is availabel => show
            experienceItem.addEventListener('mouseenter', function() {
                that.showVideo = true;
                experienceItem.click();

                const time = setInterval(() => {
                    video = experienceItem.querySelector('video');

                    if (video != null && video.paused) {
                        video.play()
                            .then(()=> {
                                video.setAttribute('autoplay', true);
                                clearInterval(time);
                            })
                            .catch(() => {
                                // show play button
                            });
                    }
                }, 100);
            });

            experienceItem.addEventListener('mouseleave', function() {
                if (video != null) {
                    that.showVideo = false;
                }
            })

        }

    }
}
</script>
