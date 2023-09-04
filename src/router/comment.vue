<script>
import data from '../components/data.json'
export default {
    computed: {
        call() {
            const param = this.$route.params.id
            return data.filter(item => item.id === param)

        }
    }
}

</script>
<template>
    <div class="w-full shrink-0 " v-for="item in call">
        <div class="m-2  rounded base cursor-pointer p-1 ">
        <div class="flex flex-col">
            <img v-bind:src="item.cover" class=" rounded-t-xl md:w-full" alt="">
            <div class="mx-2 my-auto">
                <h1 class="font-bold text-lg my-2">{{ item.name }}</h1>

                <div class="flex flex-row ">
                    <h1 class="basis-1/2">Type : {{ item.type }}</h1>
                    <h1 class="basis-1/2">Lastcap : {{ item.lastcap }}</h1>
                </div>
                
                <div class="flex-row flex-wrap flex gap-2 place-content-center " >
                    <div v-for="genre in item.genre">
                    <h1 class="font-semibold">{{ genre }}</h1>
                    </div>
                </div>

                <p class="my-2 mr-1 container text-sm overflow-y-clip hover:max-h-full max-h-32">
                    {{ item.synopsis }}    
                </p>

                <div class="flex-row flex my-1" v-for="link in item.link">
                    <a v-bind:href="link.link" class="flex bg-zinc-800 rounded-lg pr-2">
                        <img class="h-8" :src="`https://www.google.com/s2/favicons?sz=64&domain_url=${link.icon}`">
                        <p class="my-auto ml-2 font-semibold">{{ link.name }}</p>
                    </a>
                </div>

                <div v-for="content in item.content">
                    <h1 class="font-semibold">{{ content.heading }}</h1>
                    <p>{{ content.content }}</p>
                    <img v-if="content.image !== null" v-bind:src="content.image" alt="">
                </div>
            </div>
        </div>
               
        </div>       
    </div>
    
</template>