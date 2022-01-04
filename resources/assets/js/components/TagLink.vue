<template>
    <router-link :to="{
        name: 'tag_posts',
        params: {
            tag: tag.url
        }
    }"> #{{ tag.name }}
    </router-link>
</template>

<script>
    export default {
        props: ['tag']
    }
</script>
