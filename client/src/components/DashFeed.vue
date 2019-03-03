<template>
  <div id="DashFeed">
    <div class="search-form">
      <form>
        <label for>Number of Post to Show</label>
        <input v-model="searchForm.amount" type="number">
        <input type="submit" value="Search" @click.prevent="searchPostsByAmount()">
        <button @click.prevent="searchPosts()">Reset</button>
      </form>
    </div>
    <div>
      <ul>
        <li v-for="post in posts" class="post">
          <span class="author">{{ post.data.author }}</span>
          {{ post.data.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RedditService from "@/./services/RedditService";
export default {
  name: "DashFeed",
  data() {
    return {
      posts: null,
      searchForm: {
        amount: null
      }
    };
  },
  methods: {
    searchPosts() {
      RedditService.getTopPosts().then(response => {
        this.posts = response.data;
      });
    },

    searchPostsByAmount() {
      let amount = this.searchForm.amount;
      if (amount < 0) return alert("Invalid amount");
      RedditService.getTopPosts().then(response => {
        this.posts = response.data.slice(0, amount);
      });
    }
  },
  beforeMount() {
    RedditService.getTopPosts().then(response => {
      this.posts = response.data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-form {
  text-align: center;
}

* {
  font-family: Arial, Helvetica, sans-serif;
}

ul {
  display: flex;
  align-items: center;
  flex-direction: column;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}

.author {
  font-size: 12px;
  font-family: "Courier New", Courier, monospace;
}
</style>
