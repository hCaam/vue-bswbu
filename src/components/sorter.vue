<script >
import genre from './genre.json'
export default {
    data() {
        return {
            genresDefault: genre, 
            genreChecked: [],
        }
    },
    props: {
        genrePass: Array
    },
    methods: {
        filterGenre(){
        const upper = querySelector(this.genreChecked)
        upper.forEach((classes) => {
            classes.classList.add = 'border-2 border-blue-600'
        })
        }
    }
}
</script>

<template>

    <li v-for="list in genresDefault" class="m-1">
        <input type="checkbox" v-model="genreChecked" v-bind:name="list.id" v-bind:id="list.id" class="hidden peer" required="">
        <label v-bind:for="list.id" class="inline-flex justify-between items-center p-1  text-gray-500 bg-gray-200 rounded border-2 border-gray-200 cursor-pointer border-gray-700 peer-checked:border-blue-600 hover:text-gray-100 peer-checked:text-gray-100 hover:bg-gray-50 text-gray-400 bg-gray-800 hover:bg-gray-700">
            <div class="block">
                <div class="w-full text-sm font-semibold ">{{ list.genre }}</div>
            </div>
        </label>
    </li>

</template>