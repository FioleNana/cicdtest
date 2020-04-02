<template>
    <div id="app">
        <main>
            <p>
                You know, this is a pretty neat container for
                containery things.
            </p>
            <NiftyButton bg-color="blue" label="Big Oof" :click-event="doAnAlert"/>
            <GreatInput />
        </main>
    </div>
</template>

<script>
    import NiftyButton from "@/components/NiftyButton/NiftyButton";
    import GreatInput from "@/components/GreatInput/GreatInput";

    export default {
        name: 'App',
        methods: {
            doAnAlert () {
                alert('it\'s-a meeee, alertiooooo')
            }
        },
        components: {
            GreatInput,
            NiftyButton
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&display=swap');

    * {
        font-family: 'Raleway', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        background: #cdcdcd;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        main {
            position: absolute;
            top: 300px;
            left: 50%;
            transform: translateX(-50%);
            width: 500px;
            padding: 25px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
            background: white;

            p {
                margin: {
                    bottom: 25px;
                }
            }
        }
    }
</style>
