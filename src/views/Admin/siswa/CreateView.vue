<template>
    <div>
        <div class="card shadow-md">
        <form @submit.prevent="addsiswa" method="post">
          <input type="text" v-model="addsiswas.nama" placeholder="nama">
          <input type="text" v-model="addsiswas.kelas" placeholder="kelas">
          <input type="text" v-model="addsiswas.alamat" placeholder="alamat">
          <button>Add Siswa</button>
      </form>
      </div>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { mapActions } from 'vuex';
export default {

    data(){
        return{
          addsiswas:{
            nama:null,
            kelas:null,
            alamat:null,
            add:null
          }
        }
    },
    methods:{   
      ...mapActions('siswa',['fetchsiswaadd']),
        addsiswa(){
              this.fetchsiswaadd(this.addsiswas)
        }
    },

//     setup(props, context) {
//     onMounted(() => {
//       try {
//         context.emit("id-menu", 2);
//       } catch (error) {
//         console.log(error);
//       }
//     });
//   },
}
</script>