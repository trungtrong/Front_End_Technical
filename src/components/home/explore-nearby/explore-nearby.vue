<template>
    <div>
        <h1>Expore nearby</h1>

        <div class="explore-nearby__wrapper">
            <div v-for="item of items" :key="item"
                class="explore-nearby__item">
                <a class="explore-nearby__item-content">
                    <div class="explore-nearby__item-image-container">
                        <img :src="item.image" alt=""  class="explore-nearby__item-image"/>
                    </div>

                    <span class="explore-nearby__item-content-info">
                        <span><b>{{ item.city }}</b></span>
                        <span>{{ item.driveTime }}</span>
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ExploreNearbySection",
    data() {
        return {
            items: [
                {
                    image:
                        "https://a0.muscache.com/im/pictures/6b36a0f9-453f-4d11-974e-0cf164b4d18c.jpg?aki_policy=large",
                    city: "Ho Chi Minh city",
                    driveTime: "15 minute drive"
                },
                {
                    image:
                        "https://a0.muscache.com/im/pictures/6b36a0f9-453f-4d11-974e-0cf164b4d18c.jpg?aki_policy=large",
                    city: "Ho Chi Minh city",
                    driveTime: "15 minute drive"
                },
                {
                    image:
                        "https://a0.muscache.com/im/pictures/6b36a0f9-453f-4d11-974e-0cf164b4d18c.jpg?aki_policy=large",
                    city: "Ho Chi Minh city",
                    driveTime: "15 minute drive"
                },
                {
                    image:
                        "https://a0.muscache.com/im/pictures/6b36a0f9-453f-4d11-974e-0cf164b4d18c.jpg?aki_policy=large",
                    city: "Ho Chi Minh city",
                    driveTime: "15 minute drive"
                },
                {
                    image:
                        "https://a0.muscache.com/im/pictures/6b36a0f9-453f-4d11-974e-0cf164b4d18c.jpg?aki_policy=large",
                    city: "Ho Chi Minh city",
                    driveTime: "15 minute drive"
                },
                {
                    image:
                        "https://a0.muscache.com/im/pictures/6b36a0f9-453f-4d11-974e-0cf164b4d18c.jpg?aki_policy=large",
                    city: "Ho Chi Minh city",
                    driveTime: "15 minute drive"
                },
                {
                    image:
                        "https://a0.muscache.com/im/pictures/6b36a0f9-453f-4d11-974e-0cf164b4d18c.jpg?aki_policy=large",
                    city: "Ho Chi Minh city",
                    driveTime: "15 minute drive"
                },
                {
                    image:
                        "https://a0.muscache.com/im/pictures/6b36a0f9-453f-4d11-974e-0cf164b4d18c.jpg?aki_policy=large",
                    city: "Ho Chi Minh city",
                    driveTime: "15 minute drive"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
    .explore-nearby__wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 12px;
    }

    .explore-nearby__item {

    }

    .explore-nearby__item-content {
        display: flex;
        align-items: center;
        color: rgb(34, 34, 34);
        text-decoration: none;
        cursor: pointer;
    }

    .explore-nearby__item-image-container {
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        border-radius: 12px;
        margin-right: 12px;
    }

    .explore-nearby__item-image {
        flex: 0 0 72px;
        height: 72px;
        background-color: rgb(221, 221, 221);
        border-radius: 12px;
        object-fit: cover;
        vertical-align: bottom;
    }

    .explore-nearby__item-content-info {
        display: flex;
        flex-direction: column;
    }
</style>
