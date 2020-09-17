<template>
    <div class="cell">
        <span v-if="value !== ''">{{ value }}</span>
    </div>
</template>

<script>
export default {
  props: {
    value: Number
  }
}
</script>

<style>
.cell {
    width: 50px;
    height: 50px;
    border: 2px solid rgb(75,75,75);
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>
