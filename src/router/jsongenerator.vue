<script>
import genre from '../components/genre.json'
export default {
    data() {
        return {
            genre
        }
    }
}
</script>
<template>
    <div class="w-full shrink-0 " >
        <div class="m-2  rounded base cursor-pointer p-1 ">
        <div class="flex flex-col">
            <form class="mb-2 mx-2">
                <label for="name" class="font-semibold my-2">Title</label><br>
                <input type="text" id="name" name="name" v-model="tname" class="rounded p-1 bg-zinc-800" /><br>

                <label for="type" class="font-semibold my-2">Type</label><br>
                    <input v-model="type" type="radio" id="manga" name="type" value="manga">
                    <label for="manga">Manga</label><br>
                    <input v-model="type" type="radio" id="manhua" name="type" value="manhua">
                    <label for="manhua">Manhua</label><br>
                    <input v-model="type" type="radio" id="manhwa" name="type" value="manhwa">
                    <label for="manhwa">Manhwa</label><br>

                <label for="cover" class="font-semibold my-2">Cover</label><br>
                <input type="text" id="cover" name="cover" v-model="cover" class="rounded p-1 bg-zinc-800"><br>
                
                <label for="synopsis" class="font-semibold my-2">Synopsis</label><br>
                <textarea id="synopsis" name="synopsis" v-model="synopsis" class="rounded p-1 bg-zinc-800"></textarea><br>
                
                
                <div v-for="item in genre">
                    <input type="checkbox" v-bind:id="item.genre" v-bind:value="item.genre" v-model="igenre">
                    <label v-bind:for="item.genre">{{ item.genre }}</label>
                </div>
                

                <label for="lastchap" class="font-semibold my-2">Lastchap</label><br>
                <input type="text" id="lastchap" name="lastchap" v-model="lastchap" class="rounded p-1 bg-zinc-800"><br>

                <label for="link" class="font-semibold my-2">Link</label><br>
                <input type="text" id="link" name="link" v-model="link" class="rounded p-1 bg-zinc-800"><br>
                <input type="text" id="link" name="link" v-model="link" class="rounded p-1 bg-zinc-800"><br>
                <input type="text" id="link" name="link" v-model="link" class="rounded p-1 bg-zinc-800"><br>

            </form>
            <img src="" class=" rounded-t-xl w-full" alt="">
            <div class="mx-2 my-auto">
                <h1 class="font-bold text-lg my-2">{{ tname }}</h1>

                <div class="flex flex-row ">
                    <h1 class="basis-1/2">Type : {{ type }}</h1>
                    <h1 class="basis-1/2">Lastcap : </h1>
                </div>
                
                <div class="flex-row flex-wrap flex gap-2 place-content-center " >
                    <div >
                    <h1 class="font-semibold"></h1>
                    </div>
                </div>

                <p class="my-2 mr-1 container text-sm overflow-y-clip hover:max-h-full max-h-32">
                       
                </p>

                <div class="flex-row flex my-1" >
                    <a class="flex bg-zinc-800 rounded-lg pr-2">
                        <!-- <img class="h-8" :src="`https://www.google.com/s2/favicons?sz=64&domain_url=${link.icon}`">
                        <p class="my-auto ml-2 font-semibold"></p> -->
                    </a>
                </div>

                <div>
                    <h1 class="font-semibold"></h1>
                    <p></p>
                    <img>
                </div>
            </div>
        </div>
               
        </div>       
    </div>
    
</template>