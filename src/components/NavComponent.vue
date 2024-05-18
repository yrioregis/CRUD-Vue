<template>
    <nav>
        <ul>
            <li><RouterLink to="/">Início</RouterLink></li>
            <li><RouterLink to="/produtos">Produtos</RouterLink></li>
        </ul>
    </nav>
</template>


<script>
export default {
    name: 'NavComponent',
}
</script>

<style scoped>

nav {
    position: absolute;
    left: 0;
    top: 3.5rem;
    background-color: #F0F0F0;
    height: 88vh;
    width: 120px;
}

nav ul {
    list-style: none;
    padding: 10px;
    font-size: 12px;
}

nav ul li{
    padding-block: 5px;
    padding-inline: 5px;
}

nav ul li:hover, nav ul li:active{
    background-color: #E0E0E0;
}

</style>