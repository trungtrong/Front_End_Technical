<template>
    <div class="">
        <h3>Accordion: User details/summary html tags</h3>

        <div class="wrapper">
            <div class="detail-wrapper">
                <details>
                    <summary>Details Tag 1</summary>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </details>
            </div>

            <div class="detail-wrapper">
                <details>
                    <summary>Details Tag 2</summary>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </details>
            </div>

            <div class="detail-wrapper">
                <details>
                    <summary>Details Tag 3</summary>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </details>
            </div>

            <div class="detail-wrapper">
                <details>
                    <summary>Details Tag 4</summary>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </details>
            </div>
        </div>

        <br>
        <hr>
        <br>
    </div>
</template>

<script>

export default {
    name: 'Accordion',
    props: {},
    data() {
        return {}
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
    .wrapper {
        width: 50vw;
        margin: 0 auto;
        position: relative;
    }

    .detail-wrapper {
        width: 100%;
        margin-bottom: 100px;
        display: flex;
    }

    .detail-wrapper {
        &:nth-child(even) {
            justify-content: right;
            padding-left: 50%;
        }

        &:nth-child(odd) {
            justify-content: left;
            padding-right: 50%;
        }

        &:before {
            content: "";
            width: 3px;
            background-color: #d9d9d9;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
        }

        &:after {
            font-family: 'Font Awesome\ 5 Free';
            content: "\f058";
            font-size: 40px;
            color: #23b5af;
            position: absolute;
            left: 50%;
            z-index: 10;
            margin-left: -18px;
            margin-top: -16px;
        }
    }

</style>
