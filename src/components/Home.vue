<template>
    <div class="home">
        <h1 class="big-text">Home Page</h1>
        <div class="plain-text">
            Site dedicated to showcasing Red-Eyes cards from the TCG game "Yu-gi-oh!" Please click on "Cards" to view
            the
            good stuff.
            Also Konami, please release new support for Red-Eyes :)
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style scoped>
.home {
    background-image: url('~@/assets/millenium.webp');
    background-size: cover;
    background-position: center;
    min-height: calc(100vh - 2rem);
}

body,
html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    background-image: url('/assets/millenium.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
</style>
