<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script >
</script>

<style scoped lang='scss'>
.card {
    border-radius: 5px;
    min-width: 300px;
    min-height: 265px;
    width: 30%;
    backdrop-filter: blur(3px);
    background-color: rgba(244, 240, 245, .6);
    box-shadow: 5px 5px 8px rgba(0, 0, 0, .3);
    padding: 15px;
    transition: all 1s;
}
</style>