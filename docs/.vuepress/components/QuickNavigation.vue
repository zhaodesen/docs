<template>
<div>
  <div id="layout">
    <a class="link" v-for="it in data" :key="it.id" @click="handleJump(it.path)">
      <div class="my-title">{{it.title}}</div>
      <p class="content">{{it.description}}</p>
    </a>
  </div>
</div>

</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      data: [
        {
          id: 1,
          title: 'Sass',
          path: '/advance/scss/base01',
          description: '一款强大的CSS预处理器'
        },
        {
          id: 2,
          title: '尚硅谷',
          path: '/route/atguigu/base01',
          description: '跟着尚硅谷的路线学前端'
        },
        {
          id: 3,
          title: 'Git',
          path: '/study/git/base01',
          description: '免费,开源的分布式版本控制系统'
        },
        {
          id: 4,
          title: 'JavaScript',
          path: '/study/javaScript/',
          description: '想要精通的语言'
        },
        {
          id: 5,
          title: 'HTML',
          path: '/study/html/',
          description: '超文本标记语言'
        },
        {
          id: 6,
          title: 'CSS',
          path: '/study/css/',
          description: '让你的网页变得bulingbuling'
        },{
          id: 7,
          title: '读书笔记',
          path: '/readingNote/',
          description: '各种书籍笔记'
        },
        {
          id: 8,
          title: '问题',
          path: '/issue/',
          description: '遇到的一些问题'
        },
        {
          id: 9,
          title: 'GitHub',
          path: 'https://github.com/zhaodesen',
          description: '我的远程仓库'
        }
      ]
    }
  },
  methods: {
    handleJump(title){
      const file = `${title}.html`
      this.$router.push(file)
    }
  },
}
</script>

<style>
#layout {
  margin: auto;
  margin-top: 50px;
  max-width: 800px;
  border-top: 1px solid #eee;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.link{
  width: 250px;
  height: 150px;
  box-sizing: border-box;
  padding: 20px;
  text-descriptionoration: none;
  border-radius: 10px;
  margin: 8px;
  color: #534a4a;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease-in-out;
}
.link:hover {
  transform: translate3d(-1px, -1px, 0) scale(1.05);
  box-shadow: 0 0 6px 2px rgba(108, 108, 108, 0.1) inset,
    0 0 0 1px rgba(239, 243, 239, 0.6) inset, 0 0 0 1px rgba(139, 139, 139, 0.1),
    1px 1px 10px rgba(0, 0, 0, 0.2);
}
#layout > .link:nth-of-type(1) {
   background-color: rgba(180, 240, 178, 0.7);
}
#layout > .link:nth-of-type(2) {
   background-color: rgba(239, 240, 178, 0.7);
}
#layout > .link:nth-of-type(3) {
   background-color: rgba(178, 240, 232, 0.5);
}
#layout > .link:nth-of-type(4) {
   background-color: rgba(178, 189, 240, 0.5);
}
#layout > .link:nth-of-type(5) {
   background-color: rgba(230, 178, 240, 0.5);
}
#layout > .link:nth-of-type(6) {
   background-color: rgba(240, 178, 207, 0.5);
}
#layout > .link:nth-of-type(7) {
   background-color: rgba(240, 178, 178, 0.5);
}
#layout > .link:nth-of-type(8) {
   background-color: rgba(240, 178, 178, 0.5);
}
#layout > .link:nth-of-type(9) {
   background-color: rgba(178, 233, 240, 0.5);
}
.my-title{
  font-size: 22px;
}
.content{
  font-size: 15px;
  letter-spacing:2px;
  color: #272424;
  font-weight: 100;
  margin-top: 5px;
}
</style>
