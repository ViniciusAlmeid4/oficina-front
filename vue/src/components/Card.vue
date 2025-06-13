<script setup>
import placeHolder from "../assets/img/placeholder_error.png";

defineProps({
  personagem: Object
})

// Method to handle image load error
function onImageError(event) {
  console.log('Image failed to load:', event.target.src);
  console.log('Placeholder path:', placeHolder);
  
  // Prevent infinite loop if placeholder also fails
  if (event.target.src === placeHolder) {
    console.log('Placeholder also failed to load');
    return;
  }
  
  event.target.src = placeHolder;
}
</script>

<template>
  <div class="card">
    <div class="card-body d-flex justify-content-center align-items-center flex-column">
      <div class="mb-2">
        <img
          :src="personagem?.imageUrl || placeHolder"
          alt="card-personagem"
          @error="onImageError"
        />
      </div>

      <div>
        <h6>{{ personagem?.name || "Personagem" }}</h6>
        <div><span>Filmes:</span> {{ personagem?.films?.[0] || "N/A" }}</div>
        <div><span>Séries de TV:</span> {{ personagem?.tvShows?.[0] || "N/A" }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.conteudo .card{
    width: 300px;
    height: 300px;
    background-color: rgb(78, 138, 194);
}

.conteudo .card img{
    height: 150px;
    border-radius: 12px;
    object-fit: cover; /* Ensures proper image scaling */
}

.conteudo .card h6{
    font-size: 20px;
    text-align: center;
}

.conteudo .card span{
    font-weight: 600;
}
</style>