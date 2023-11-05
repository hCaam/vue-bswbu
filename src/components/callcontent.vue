
<script>

import data from './data.json'
import { RouterLink, RouterView } from 'vue-router'

export default{
    props: {
        limit: Number,
        genre: Array
    },

    data() {
        return {
            dataPosts: data, 
        }
    },

}

</script>
<template>
    <div v-bind:class="data.genre" class="w-full shrink-0" v-for="data in dataPosts" >
    <RouterLink 
   
    :to="{name: 'comment', 
        params: {
            id: data.id
        }}" 
    >
        <div v-bind:id="data.id"  class="m-2 rounded base cursor-pointer p-1 ">
        <div class="flex">
            <img class=" rounded object-center object-scale-down h-48 my-auto" v-bind:src="data.cover"  alt="">
            <div class="mx-2 my-auto">
                <h1 class="font-semibold text-center">{{ data.name }}</h1>
                <p class="max-h-32 overflow-y-auto mr-1 container text-sm">
                    {{ data.synopsis }}
                </p>
                <div class="flex gap-1 mt-1 justify-center flex-wrap">
                <div v-for="item in data.genre" class="">
                    <label class="inline-flex justify-between items-center px-1  text-gray-500 rounded border-2 border-neutral-700 bg-neutral-800">
                        <div class="block">
                            <div class="w-full text-sm font-semibold">{{ item }}</div>
                        </div>
                    </label>
                </div> 
                </div> 

            </div>
        </div>
      
        </div>
    </RouterLink> 
    </div>
</template>
<style>
.container::-webkit-scrollbar {
  width: 6px;
}

.container::-webkit-scrollbar-track {
  background: transparent; 
}
 
.container::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 8px;
}
.container:hover::-webkit-scrollbar-thumb {
  background: #4A4A4A; 
}
</style>
