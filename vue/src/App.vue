<template>
    <nav class="navbar px-4">
        <a class="navbar-brand d-flex align-items-center gap-2" href="#">
            <img src="./assets/img/logo.png" alt="Logo" width="40" height="34" />
            Disney API
        </a>
    </nav>

    <div class="container-fluid mt-4 h-100 pb-4">
        <div class="conteudo d-flex flex-wrap justify-content-center gap-4 mb-4">
            <CardPersonagem v-for="personagem in personagens" :key="personagem._id" :personagem="personagem" />
        </div>

        <nav class="d-flex justify-content-center gap-2 mb-4">
            <button class="btn btn-primary btn-lg" @click="anterior" :disabled="!podeVoltar">
                &lt;
            </button>
            <div class="card px-3 d-flex align-items-center justify-content-center" id="indice">
                {{ paginaAtual }}
            </div>
            <button class="btn btn-primary btn-lg" @click="proximo" :disabled="!podeAvancar">
                &gt;
            </button>
        </nav>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import CardPersonagem from './components/Card.vue'

// reactive state
const paginaAtual = ref(1)
const totalPaginas = ref(1)
const personagens = ref([])

// computed properties
const podeAvancar = computed(() => paginaAtual.value < totalPaginas.value)
const podeVoltar = computed(() => paginaAtual.value > 1)

// methods
const carregarPersonagens = async (pagina) => {
    if (pagina < 1 || pagina > totalPaginas.value) return

    paginaAtual.value = pagina

    try {
        const resposta = await fetch(`https://api.disneyapi.dev/character?page=${pagina}&pageSize=24`)
        const dados = await resposta.json()
        totalPaginas.value = dados.info.totalPages
        personagens.value = dados.data
    } catch (erro) {
        console.error(erro)
    }
}

const proximo = () => {
    if (podeAvancar.value) carregarPersonagens(paginaAtual.value + 1)
}

const anterior = () => {
    if (podeVoltar.value) carregarPersonagens(paginaAtual.value - 1)
}

// lifecycle
onMounted(() => carregarPersonagens(paginaAtual.value))
</script>

<style>
html, body {
    height: 100%;
    margin: 0;
}
#app {
    background-image: url("assets/img/disney_bg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

@font-face {
    font-family: "Disney Font";
    src: url("assets/fonts/NewWaltDisneyFontRegular-BPen.ttf");
}

.navbar {
    background-color: rgb(78, 138, 194);
}

.navbar-brand {
    font-family: Disney Font;
    font-size: 30px;
    color: white;
}
</style>
