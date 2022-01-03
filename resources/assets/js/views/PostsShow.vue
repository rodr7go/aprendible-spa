<template>
    <section class="post container">

        <!-- @include( $post->viewType() ) -->

        <div class="content-post">

            <div class="image-w-text" v-html="post.body"> </div>

            <footer class="container-flex space-between">
                <div class="tags container-flex">
                    <span class="tag c-gris" v-for="tag in post.tags">
                      
                    </span>
                </div>
            </footer>

            <div class="comments">
                <div class="divider"></div>
            </div><!-- .comments -->
        </div>
    </section>
</template>

<script>
    export default {
        props: ['url'],
        data(){
            return {
                post: {
                    owner:{},
                    category: {}
                }
            }
        },
        mounted(){
            axios.get(`/api/blog/${this.url}`)
                .then(res => {
                    this.post = res.data;
                })
                .catch(err => {
                    console.log(err.response.data);
                })
        }
    }
</script>
