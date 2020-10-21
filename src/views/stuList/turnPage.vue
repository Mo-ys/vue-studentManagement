<template>
  <div class="turnPage">
    <ul>
      <li class="prevPage btn" @click="turnPage('-1')">&lt;</li>
      <template v-if="countPage <= 7">
        <li
          v-for="item in countPage"
          :key="item"
          :class="{nowPage: item === nowPage}"
          @click="turnPage(item)"
        >{{ item }}</li>
      </template>
      <template v-else>
        <li :class="{nowPage: nowPage == 1}" @click="turnPage(1)">1</li>

        <li v-if="nowPage > 4" class="prevHidden hidden" @click="turnPage('-5')">...</li>
        <li
          v-for="item in 5"
          :key="item"
          :class="{nowPage: nowPage == getPageNum(item)}"
          @click="turnPage(getPageNum(item))"
        >{{ getPageNum(item) }}</li>
        <li v-if="nowPage < countPage - 3" class="nextHidden hidden" @click="turnPage('+5')">...</li>
        <li :class="{nowPage: nowPage == countPage}" @click="turnPage(countPage)">{{ countPage }}</li>
      </template>
      <li class="nextPage btn" @click="turnPage('+1')">&gt;</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["nowPage", "countPage"])
  },
  methods: {
    getPageNum(item) {
      if (this.nowPage <= 4) {
        return item + 1;
      } else if (this.nowPage <= this.countPage - 4) {
        return item + this.nowPage - 3;
      } else {
        return this.countPage - 6 + item;
      }
    },
    turnPage(page) {
      if (page === "-1" || page === "-5") {
        if (page === '-1' && this.nowPage === 1) {
          return;
        }
        if (page === '-5' && this.nowPage <= 5) {
          this.$store.dispatch("turnPage", 1);
          return;
        }
        this.$store.dispatch("turnPage", this.nowPage - -page);
      } else if (page === "+1" || page === "+5") {
        if (page === '+1' && this.nowPage === this.countPage) {
          return;
        }
        if (page === '+5' && this.nowPage > this.countPage - 5) {
          this.$store.dispatch("turnPage", this.countPage);
          return;
        }
        this.$store.dispatch("turnPage", this.nowPage + +page);
      } else {
        this.$store.dispatch("turnPage", page);
      }
    }
  }
};
</script>

<style>
.turnPage ul li {
  float: left;
  min-width: 35px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  list-style: none;
  padding: 0 4px;
  box-sizing: border-box;
  font-size: 13px;
  cursor: pointer;
  -webkit-user-select: none;
}
.turnPage ul li:hover {
  color: #409eff;
}
.turnPage ul li.nowPage {
  color: #409eff;
}
.turnPage ul li.hidden::after {
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: #eee;
  transition: transform 0.3s;
}
.turnPage ul li.hidden.prevHidden::after {
  transform: translate(100%, -100%);
  content: "<<";
}
.turnPage ul li.hidden.nextHidden::after {
  transform: translate(-100%, -100%);
  content: ">>";
}
.turnPage ul li.hidden {
  overflow: hidden;
}
.turnPage ul li.hidden:hover::after {
  transform: translate(0px, -100%);
}
</style>