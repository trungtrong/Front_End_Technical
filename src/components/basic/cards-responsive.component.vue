<template>
    <div>
        <h1>Grid - Responsive 1</h1>
        <div>With this technique, we don't care about max-width/min-width and @media</div>

        <section class="document-list__folder-section">
            <div v-for="item in imageDataSource" :key="item" class="document__folder-item">
                <div class="document__folder-item-wrapper">
                    <div class="document__folder-item-container d-flex flex-column">
                        <div class="document__folder-item-content d-flex align-items-center flex-grow-1">
                            <img class="technical-padding-image-container"
                                    alt=""
                                    src="https://a0.muscache.com/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg"
                                />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <h1 class="pt-30-c">Grid - Responsive 2 - Use @media</h1>
        <section class="grid-responsive__two">
            <div v-for="item in imageDataSource" :key="item" class="grid-responsove__two__item">
                <div class="document__folder-item-wrapper">
                    <div class="document__folder-item-container d-flex flex-column">
                        <div class="document__folder-item-content d-flex align-items-center flex-grow-1">
                            <img class="technical-padding-image-container"
                                    alt=""
                                    src="https://a0.muscache.com/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg"
                                />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <h1 class="pt-30-c">Flex - for item that has consistent width</h1>
        <section class="cards-responsive__three">
            <div v-for="item in imageDataSource" :key="item" class="card-responsive__three__item">

            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'CardsResponsive',
    props: {},
    data() {
        return {
            imageDataSource: Array(8).fill({}).map((item) => item)
        }
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
   $card-width: 190px;
   $card-padding: 6px;

    // Type 1:
    .document-list__folder-section {
        width: 100%;
        display: grid;
        grid-gap: 0;
        // minmax = $card-width + $card-padding * 2
        grid-template-columns: repeat(auto-fill, minmax(202px, 1fr));

        // Way 2: Use gap in grid-container: $card-padding * 2
        grid-gap: 12px;
    }

    .document__folder-item {
        display: block;
        flex: 1 1 190px;
        max-width: 100%;
        min-width: 0;
        // Way 1: Use Padding in item
        // padding: $card-padding;
    }

    .document__folder-item-wrapper {
        padding: 12px;
        border: 1px solid #999;
        border-radius: 6px;
    }

    .document__folder-item-container {
        position: relative;
        padding-top: 65%;
        max-width: 100%;
    }

    .document__folder-item-content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .technical-padding-image-container {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    // Grid - Responsive 2
    .grid-responsive__two {
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
    }

    @media (min-width: 576px) {
        .grid-responsive__two {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 992px) {
        .grid-responsive__two {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (min-width: 1200px) {
        .grid-responsive__two {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (min-width: 1440px) {
        .grid-responsive__two {
            grid-template-columns: repeat(6, 1fr);
        }
    }

    // Three
    .cards-responsive__three {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 24px;
    }

    .card-responsive__three__item {
        height: 200px;
        width: 20%;
        border-radius: 6px;
        box-shadow: 1px 1px 6px 1px #a7a7a7;
    }
</style>
