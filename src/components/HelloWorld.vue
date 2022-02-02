<template>

<main>
  <header>
    <h1>Youtube<span>Reload</span></h1>
    <nav>
      <button v-on:click="trocarTela(1)" class="btn1 nav-active">Inicio</button>
      <button v-on:click="trocarTela(2)" class="btn2">Favoritos</button>
      <button v-on:click="trocarTela(3)" class="btn3">Não gostei</button>
    </nav>
  </header>

  <section class="description">
    <h2>Gere playlist com músicas que você nunca ouviu, sem nenhum algoritmo de IA.</h2>
    <button v-on:click="limparLocalStorage()">Limpar Preferências</button>
  </section>

  <div class="tela-principal display-block">
    <div class="grid-filtros">
      <div class="filtro-item">
        <h3>Filtrar épocas</h3>
        <div class="filtro-grid-1">
          <div class="filtro-item-grid">
            <input v-on:click="functionIgnoreDates(2019)" type="checkbox" checked="checked">
            <label class="container">Excluir 2019</label>
          </div><!-- filtro-item-grid -->

          <div class="filtro-item-grid">
            <input v-on:click="functionIgnoreDates(2020)" type="checkbox" checked="checked">
            <label class="container">Excluir 2020</label>
          </div><!-- filtro-item-grid -->

          <div class="filtro-item-grid">
            <input v-on:click="functionIgnoreDates(2021)" type="checkbox" checked="checked">
            <label class="container">Excluir 2021</label>
          </div><!-- filtro-item-grid -->
        </div><!-- filtro-grid-1 -->
      </div><!-- filtro-item -->
    
      
      <div class="filtro-item">
        <!-- <h3>Ignorar Autores que você conheçe</h3>  -->
        <div class="filtro-grid-3">
          <!--
          <div v-for="(author, index) in this.authors" class="filtro-item-grid">
            <input v-if="ignoreAuthors.includes(author)" v-on:click="functionIgnoreAuthors(author)" type="checkbox" checked="checked">
            <input v-if="!ignoreAuthors.includes(author)" v-on:click="functionIgnoreAuthors(author)" type="checkbox">
            <label class="container">{{author}}</label>
          </div>--><!-- filtro-item-grid -->
    
        </div><!-- filtro-grid-3 -->
      </div><!-- filtro-item -->
    </div><!-- grid-filtros -->
   
    <section class="videos">
      <div class="flex-videos">
    
        <div v-for="(playlist) in formatPlaylist" :key="playlist.url" class="item-video">
          <div class="video-img">
            <a target="_blank" :href="playlist.url"><img :src="playlist.img" alt=""> </a>
          </div><!-- video-img -->
    
          <div class="video-conteudo">
            <div class="video-conteudo-titulo">
              <p><a  target="_blank" :href="playlist.url">{{ playlist.title }}</a></p>
            </div><!-- video-conteudo-titulo -->
    
            <div class="video-conteudo-autor">
              <p><a target="_blank" :href="playlist.url">{{ playlist.author }}</a></p>
            </div><!-- video-conteudo-autor -->
    
            <div class="video-conteudo-botoes">
              <button v-on:click="sendLike(playlist.item_id)" v-if="!playlist.like">Gostei</button>
              <button v-on:click="sendLike(playlist.item_id)" v-if="playlist.like" class="selected">Gostei</button>
              <button v-on:click="sendDislike(playlist.item_id)" v-if="!playlist.dislike">ignorar</button>
              <button v-on:click="sendDislike(playlist.item_id)" v-if="playlist.dislike" class="selected">ignorar</button>
            </div><!-- video-conteudo-botoes -->
          </div><!-- video-conteudo -->
        </div><!-- item-video -->
    
      </div><!-- flex-videos -->
    </section><!-- videos -->

    <section class="gerar-playlist">
      <button v-on:click="gerarPlaylistAleatoria()">Gerar Playlist</button>
    </section>
    
  </div><!-- tela principal-->


  <div class="tela-favoritos display-none">
    <section class="videos">
      <div class="flex-videos">
    
        <div v-for="(playlist) in formatPlaylistLikes" :key="playlist.url" class="item-video">
          <div class="video-img">
            <a target="_blank" :href="playlist.url"><img :src="playlist.img" alt=""> </a>
          </div><!-- video-img -->
    
          <div class="video-conteudo">
            <div class="video-conteudo-titulo">
              <p><a  target="_blank" :href="playlist.url">{{ playlist.title }}</a></p>
            </div><!-- video-conteudo-titulo -->
    
            <div class="video-conteudo-autor">
              <p><a target="_blank" :href="playlist.url">{{ playlist.author }}</a></p>
            </div><!-- video-conteudo-autor -->
    
            <div class="video-conteudo-botoes">
              <button v-on:click="sendLike(playlist.item_id)" v-if="!playlist.like">Gostei</button>
              <button v-on:click="sendLike(playlist.item_id)" v-if="playlist.like" class="selected">Gostei</button>
              <button v-on:click="sendDislike(playlist.item_id)" v-if="!playlist.dislike">ignorar</button>
              <button v-on:click="sendDislike(playlist.item_id)" v-if="playlist.dislike" class="selected">ignorar</button>
            </div><!-- video-conteudo-botoes -->
          </div><!-- video-conteudo -->
        </div><!-- item-video -->

      </div><!-- flex-videos -->
    </section><!-- videos -->
  </div><!-- tela-favoritos -->

  <div class="tela-nao-gostei display-none">
    <section class="videos">
      <div class="flex-videos">
    
        <div v-for="(playlist) in formatPlaylistDislikes" :key="playlist.url" class="item-video">
          <div class="video-img">
            <a target="_blank" :href="playlist.url"><img :src="playlist.img" alt=""> </a>
          </div><!-- video-img -->
    
          <div class="video-conteudo">
            <div class="video-conteudo-titulo">
              <p><a  target="_blank" :href="playlist.url">{{ playlist.title }}</a></p>
            </div><!-- video-conteudo-titulo -->
    
            <div class="video-conteudo-autor">
              <p><a target="_blank" :href="playlist.url">{{ playlist.author }}</a></p>
            </div><!-- video-conteudo-autor -->
    
            <div class="video-conteudo-botoes">
              <button v-on:click="sendLike(playlist.item_id)" v-if="!playlist.like">Gostei</button>
              <button v-on:click="sendLike(playlist.item_id)" v-if="playlist.like" class="selected">Gostei</button>
              <button v-on:click="sendDislike(playlist.item_id)" v-if="!playlist.dislike">ignorar</button>
              <button v-on:click="sendDislike(playlist.item_id)" v-if="playlist.dislike" class="selected">ignorar</button>
            </div><!-- video-conteudo-botoes -->
          </div><!-- video-conteudo -->
        </div><!-- item-video -->

      </div><!-- flex-videos -->
    </section><!-- videos -->
  </div><!-- tela-tela-nao-gostei -->
</main>
</template>

<script>
import { dataMusic } from '../../data.reload';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

 data() {
      return {

        // Playlist de musicas que serão renderizadasao usuário
        playList: [
        ],

        // Serve unicamente para acordar um watcher para atualizar o localstorage
        // Tem um bug que o vuejs não escuta alterações dentro do array nos objetos
        alteracoes: 0,

        // Conjunto de musicas que poderão ser sorteadas
        musicas_possiveis: [
        ],

        // Playlist de musicas que receberam dislikes
        playlistDislike: [
        ],

        // Playlist de musicas que receberam likes
        playlistLike: [
        ],

        // Lista de autores disponíveis para a busca
        authors: [
        ],

        // Lista de autores que serão ignorados
        ignoreAuthors: [
          //'Giulia Be', 'Miley Cyrus', 'Naiara Azevedo', 'Shakira', 'Luis Fonsi', 'Malu', 'Paula Fernandes', 'Banda Vingadora', 'Psirico'
        ],

        // Datas que serão ignoradas
        ignoreDates: [2019, 2020, 2021],


        itemsLocalStorage: '',
        jsonItems: {},
        ids_json_like: {},


        // Conjunto de items em si
        items: dataMusic
       
      }
    },

    // Escuta alterações nas variáveis
    watch: {
      alteracoes() {
        // Salva uma os itens no localstorage
        localStorage.setItem('items', JSON.stringify(this.items));
        localStorage.setItem('ignoreAuthors', JSON.stringify({ignore:this.ignoreAuthors}));

      }
    },

    // Assim que a página for criada
    mounted() {
    
      this.$nextTick(()=>{
        // Se estiver salvo no localstorage!
        // Pegue os itens
        if (localStorage.getItem('ignoreAuthors')) {
          let ignoreAuthorsJson = localStorage.getItem('ignoreAuthors'); //Obter
          this.ignoreAuthors = JSON.parse(ignoreAuthorsJson ).ignore
        }

        if (localStorage.getItem('items')) {
          this.itemsLocalStorage = localStorage.getItem('items'); //Obter
          this.jsonItems = JSON.parse(this.itemsLocalStorage); // String to json

          this.jsonItems.forEach(json => {
            this.ids_json_like[json.id] = {like: json.like, dislike:json.dislike}
          })


          for (let x=0; x < this.items.length; x++) {
            if (this.items[x].id in this.ids_json_like === false) {
              this.jsonItems.push(this.items[x])
            }
          }
          this.items = this.jsonItems;
        }

        // lista com todos os autores disponíveis
        this.items.forEach(item => {       
          if (!this.authors.includes(item.author)) {
            this.authors.push(item.author);
          }
        })
      })
    },
    // Métodos para usos gerais
    methods: {

      // Ignorar autores
      functionIgnoreAuthors(author) {
        if (!this.ignoreAuthors.includes(author)) {
          this.ignoreAuthors.push(author);
          console.log('ignorar' + author);
        } else {
          // Excluir o author da lista
          // Remove 1 item
          var index = this.ignoreAuthors.indexOf(author);
          if (index != -1) {
            this.ignoreAuthors.splice(index, 1);
          }
        }

        this.alteracoes += 1;
      },

      // Ignorar datas
      functionIgnoreDates(date) {
        if (!this.ignoreDates.includes(date)) {
          this.ignoreDates.push(date);
        } else {
          var index = this.ignoreDates.indexOf(date);
          if (index != -1) {
            this.ignoreDates.splice(index, 1);
          }
        }
      },

      // Gerencia o controle de telas
      trocarTela(screen) {
        // Troca as telas da aplicação

        // Divs com as telas disponíveis
        let tela_principal = document.getElementsByClassName('tela-principal')[0];
        let tela_favoritos = document.getElementsByClassName('tela-favoritos')[0];
        let tela_nao_gostei = document.getElementsByClassName('tela-nao-gostei')[0];

        let btn1 = document.getElementsByClassName('btn1')[0];
        let btn2 = document.getElementsByClassName('btn2')[0];
        let btn3 = document.getElementsByClassName('btn3')[0];

        // Valores padrões que os objetos sempre terão
        btn1.classList = 'btn1';
        btn2.classList = 'btn2';
        btn3.classList = 'btn3';

        tela_principal.classList = "tela-principal";
        tela_favoritos.classList = "tela-favoritos";
        tela_nao_gostei.classList = "tela-nao-gostei";

        // Seleciona as telas
        if (screen == 1) {
          btn1.classList.toggle('nav-active');
          tela_principal.classList.toggle('display-block');

        } else if (screen == 2) {
          btn2.classList.toggle('nav-active');
          tela_favoritos.classList.toggle('display-block');

          // Carrega os likes
          this.playlistLike = [];
          this.items.forEach(item => {
            if (item.like) {this.playlistLike.push(item)}
          })

        } else if (screen == 3) {

          btn3.classList.toggle('nav-active');
          tela_nao_gostei.classList.toggle('display-block');

          // Carrega os dislikes
          this.playlistDislike = [];
          this.items.forEach(item => {
            if (item.dislike) {this.playlistDislike.push(item)}
          })
        }
      },

      // Gera uma playlist aleatória
      gerarPlaylistAleatoria() {

        this.musicas_possiveis = [];

        // Registra a posição para otimizar a localização do item
        let item_id = 0;
        this.items.forEach(item => {

          // Se não tem likes ou dislikes
          if (!item.like && !item.dislike) {

            // O autor foi ignorado?
            if (!this.ignoreAuthors.includes(item.author)) {

              // O ano foi ignorado
              if(!this.ignoreDates.includes(item.ano)) {
                // Salve dentro das musicas possívels
                item.item_id = item_id;
                this.musicas_possiveis.push(item);
              }
            }
          }

          // Registra a posição do item no array principal
          item_id += 1;
        })

        // Escolhe de forma randomica 5 musicas
        this.musicas_possiveis = this.musicas_possiveis.sort(() => Math.random() - 0.5)
        this.playList = this.musicas_possiveis.slice(0, 15);

        setTimeout(() => {
          window.scrollBy({top: 100, left: 0, behavior : "smooth"});
        }, 200)
        
      },

      // Envia um dislike
      sendDislike(item_id) {
        if (!this.items[item_id].dislike) {
          this.items[item_id].dislike = true;
          this.items[item_id].like = false;
        } else {
          this.items[item_id].dislike = false;
        }

        // Acorda o watcher para atualizar o localstorage
        this.alteracoes += 1;
      },

      // Envia um like
      sendLike(item_id){
        if (!this.items[item_id].like) {
          this.items[item_id].like = true;
          this.items[item_id].dislike = false;
        } else {
          this.items[item_id].like = false;
        }
        // Acorda o watcher para atualizar o localstorage
        this.alteracoes += 1;
      },
      limparLocalStorage() {
        localStorage.removeItem('items');
        localStorage.removeItem('ignoreAuthors');
        document.location.reload(true);
      }
    },

    // Manipula os dados para o frontend
    computed: {
      formatPlaylist() {
        return this.playList.map(play => ({
          ...play,
          img: 'https://img.youtube.com/vi/' + play.id + '/hqdefault.jpg',
          url: 'https://www.youtube.com/watch?v=' + play.id
        }))  
      },

      formatPlaylistLikes() {
        return this.playlistLike.map(play => ({
          ...play,
          img: 'https://img.youtube.com/vi/' + play.id + '/hqdefault.jpg',
          url: 'https://www.youtube.com/watch?v=' + play.id
        }))  
      },

      formatPlaylistDislikes() {
        return this.playlistDislike.map(play => ({
          ...play,
          img: 'https://img.youtube.com/vi/' + play.id + '/hqdefault.jpg',
          url: 'https://www.youtube.com/watch?v=' + play.id
        }))  
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');

/* Variáveis */
:root {
  --font-size-12: 0.9rem;  
  --font-size-18: 1.2rem;
  --font-size-24: 1.5rem;
  
}

* {
  /* Reset CSS */
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;

  /* Padrões para usar no código */
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  color: black;
  font-size: 1.2rem;
}

a {
  text-decoration: none;
}

body {
  min-height: 100vh;
  overflow-y: scroll;
}

/* Header */
header {
  width: 100%;
}

header h1 {
  padding: 25px 2%;
  width: 100%;
  text-align: center;
  color: #FF0D0D;
  font-size: var(--font-size-24);
}

header h1 span {
  color: #0085FF;
  font-size: var(--font-size-24);
}

header nav {
  width: 100%;
  display: flex;
  justify-content: center;
}

header nav button {
  background-color: transparent;
  text-decoration: none;
  color: black;
  padding: 20px;
  cursor: pointer;
  font-size: var(--font-size-12);
}

header nav button.nav-active::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  background: #FF0D0D;
}

header nav button::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
}
/* Fim */

/*Descrição do site*/
.description {
  width: 100%;
}

.description h2 {
  max-width: 620px;
  width: 100%;
  font-size: var(--font-size-18);
  margin: 0 auto;
  text-align: center;
  padding: 40px 2%;
}

.description button {
  margin: 0 auto;
  display: block;
  padding: 10px 0;
  font-size: 1rem;
  color: #FF0D0D;
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;
}
/* Fim Descrição do site*/
/* Filtros */

.grid-filtros {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1280px;
  padding: 0 2%;
}

.filtro-item h3 {
  font-size: var(--font-size-18);
  padding: 10px 0;
}

.filtro-item .filtro-grid-1 {
  width: 100%;
}

.filtro-item .filtro-grid-3 {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.filtro-item-grid {
  display: flex;
  align-items: center;
}

.filtro-item-grid label {
  margin-left: 5px;
  font-size: var(--font-size-12);
}

.filtro-item-grid input {
  zoom: 1.6 ;
  margin: 3px 0;
}

/* Fim dos Filtros */
/* Botão gerar Playlist */
.gerar-playlist {
  width: 100%;
  padding: 40px 0;
}

.gerar-playlist button {
  display: block;
  margin: 0 auto;
  color: white;
  background-color: #05D2FF;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.2s;
  font-size: var(--font-size-18);
}

.gerar-playlist button:hover {
  background-color: #009abd;
}
/* Fim Botão gerar Playlist */

/* Inicio dos vídeos */
section.videos {
  width: 100%;
  margin: 0 auto;
  max-width: 700px;
}

section.videos .flex-videos {
  display: flex;
  flex-direction: column;
}

.flex-videos .item-video {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.item-video .video-img a img{
  height: 180px;
  width: auto;
  object-fit: cover;
}

.video-conteudo {
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
}

.video-conteudo-titulo p a {
  font-size: var(--font-size-12);
}

.video-conteudo-autor {
  flex: 1;
}

.video-conteudo-autor p a {
  font-size: var(--font-size-12);
}

.video-conteudo-botoes button {
  padding: 10px 15px;
  font-size: var(--font-size-12);
}

.video-conteudo-botoes button:nth-child(1) {
  border: 2px solid #05D2FF;
  background-color: transparent;
  color: #05D2FF;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.2s;
}

.video-conteudo-botoes button:nth-child(1):hover {
  background: #05D2FF;
  color: white;
}
.video-conteudo-botoes button:nth-child(1).selected {
  background: #05D2FF;
  color: white;
}

.video-conteudo-botoes button:nth-child(2) {
  border: 2px solid #FF0D0D;
  background-color: transparent;
  color: #FF0D0D;
  margin-left: 20px;
  cursor: pointer;
  transition: 0.2s;
}

.video-conteudo-botoes button:nth-child(2):hover {
  background: #FF0D0D;
  color: white;
}

.video-conteudo-botoes button:nth-child(2).selected {
  background: #FF0D0D;
  color: white;
}

/* Fim dos vídeos */
.tela-principal {
  display: none;
  animation: opacityColor 0.2s ease-in-out;
}

.tela-favoritos {
  display: none;
  animation: opacityColor 0.2s ease-in-out;
}

.tela-nao-gostei {
  display: none;
  animation: opacityColor 0.2s ease-in-out;
}

.display-block {
  display: block;
}

@keyframes opacityColor {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 800px){
  .grid-filtros {
    grid-template-columns: 1fr;
  }

  .filtro-item .filtro-grid-3 {
    grid-template-columns: 1fr 1fr;
  }

  .flex-videos .item-video {
    grid-template-columns: 1fr;
  }

  .item-video .video-img a img{
    width: 100%;
    padding: 0 2%;
    height: 200px;
  }

  .filtro-item-grid input {
    zoom: 2;
  }

  .filtro-item-grid {
    padding: 10px 0;
  }

  .video-conteudo-botoes {
    display: flex;
    justify-content: space-between;
  }
}

</style>
