<style scoped lang="scss" src="./NiftyButton.scss"></style>
<template src="./NiftyButton.html"></template>

<script>
    export default {
        name: 'NiftyButton',
        props: {
            label: String,
            clickEvent: {
                type: Function,
                default: () => {}
            }
        }
    }
</script>
