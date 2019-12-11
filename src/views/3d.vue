<template>
    <div>
        <div id="search">
            <input type="text" id="search-input"/>
            <input type="button" value="搜索" id="search-bt"/>

        </div>
        <ul id="example-1">
            <li v-for="item in posts" id="list-item" @click="postDetail({router:$router,postId:item.postId})">
{{ item.title }}<span id="author">作者：{{ item.userName }}</span>
            </li>
        </ul>


    </div>
</template>


<style lang="scss">


    #author {
        text-align: left;
        margin-left: 15px;
        font-size: 10px;
    }

    #search {
        margin-bottom: 15px;
    }

    #search-input {
        width:20%;
    }

    #search-bt {
        margin-left: 15px;
    }


    li{
        list-style: none;
        margin-bottom: 15px;
        font-size: 16px;
    }

    ul{
        list-style: none;
        padding-left: 0;
        font-size: 0;
    }
</style>

<script>
    // @ is an alias to /src
    import {mapGetters} from 'vuex'
    import {mapActions, mapState} from 'vuex'

    export default {

        mounted: function () {

            this.getPost(this.$router)
        },

        methods: {
            ...mapActions('ddd', [
                'getPost', // map `this.increment()` to `this.$store.dispatch('increment')`
                'postDetail'
            ]),


        },

        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters('ddd', {
                posts: 'posts',

            }),
            ...mapState('ddd', {})
        }


    };
</script>
