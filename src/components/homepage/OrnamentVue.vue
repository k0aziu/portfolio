<template>
    <div class="center">
        <div class="dot mini-dot"></div>
        <div class="dot big-dot"></div>
        <div class="dot very-big-dot"></div>
        <div class="dot big-dot"></div>
        <div class="dot mini-dot"></div>
    </div>
</template>
  
<script>

export default {
    name: 'OrnamentVue',
    components: {
    },
}
</script>
  
<style scoped>
.dot {
    height: 6px;
    width: 10px;
    background-color: rgba(20,20,20,1);
    margin: 0 5px;
    border-radius: 10px;
}

.big-dot {
    width: 20px;
}

.very-big-dot {
    width: 35px;
}

.center {
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>