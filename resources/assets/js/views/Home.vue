<template>
    <posts-list :posts="posts"></posts-list>
</template>

<script>
    import PostsListItem from "../components/PostsListItem";
    export default {
        components: {PostsListItem},

        data(){
            return {
                posts: []
            }
        },
        mounted(){
            axios.get('/api/posts')
                .then(res => {
                    this.posts = res.data.data;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
</script>
