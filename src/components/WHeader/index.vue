<!-- index-header -->
<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container wui-flex wui-justify-between">
        <div class="topbar-left">
          <div class="topbar-menu topbar-item">
            <a href="javascript:;">小米商城</a>
            <span class="sep">|</span>
            <a href="javascript:;">云服务</a>
            <span class="sep">|</span>
            <a href="javascript:;">协议规则</a>
          </div>
        </div>
        <div class="topbar-right wui-flex">
          <div class="topbar-user topbar-item">
            <a href="javascript:;">sign in</a>
            <span class="sep">|</span>
            <a href="javascript:;">sing up</a>
          </div>
          <div class="topbar-cart">
            <a href="javascript:;"
              ><i class="el-icon el-icon-shopping-cart-1"></i>购物车（0）</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="site-header">
      <div class="container wui-flex wui-align-center">
        <div class="header-logo wui-flex wui-align-center">
          <a href="" class="logo ind">小米官网</a>
        </div>
        <div class="header-nav wui-flex wui-flex-item header-nav-li">
          <ul class="nav-list clearfix J_navMain" @mouseleave="leveItem()">
            <li class="nav-category">
              <a href="javascript:;" class="link">
                全部商品分类
              </a>
            </li>
            <li
              :class="[{ 'nav-item-active': currentNavItem == 0 }, 'nav-item']"
              @mouseenter="showChildrens($event)"
              data-index="0"
            >
              <a href="javascript:;" class="link">
                <span class="text">小米手机</span>
              </a>
              <div class="item-children">
                <div class="container">
                  <ul class="children-list clearfix">
                    <li>
                      <a href="" target="_blank">
                        <div class="media media-thumb">
                          <img
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png"
                            alt="小米10 青春版 5G"
                            width="160"
                            height="110"
                          />
                        </div>
                        <div class="title">小米10 青春版 5G</div>
                        <p class="price">2099元起</p>
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        <div class="media media-thumb">
                          <img
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90"
                            alt="小米10 Pro"
                            width="160"
                            height="110"
                          />
                        </div>
                        <div class="title">小米10 Pro</div>
                        <p class="price">4999元起</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              :class="[{ 'nav-item-active': currentNavItem == 1 }, 'nav-item']"
              @mouseenter="showChildrens($event)"
              data-index="1"
            >
              <a href="javascript:;" class="link">
                <span class="text">红米</span>
              </a>
              <div class="item-children">
                <div class="container">
                  <ul class="children-list clearfix">
                    <li>
                      <a href="" target="_blank">
                        <div class="media media-thumb">
                          <img
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfbedb76699240a6c9a3f875b930983c.png"
                            alt="小米10 青春版 5G"
                            width="160"
                            height="110"
                          />
                        </div>
                        <div class="title">Redmi 10X 4G</div>
                        <p class="price">999元起</p>
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        <div class="media media-thumb">
                          <img
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png"
                            alt="小米10 青春版 5G"
                            width="160"
                            height="110"
                          />
                        </div>
                        <div class="title">小米10 青春版 5G</div>
                        <p class="price">2099元起</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              :class="[{ 'nav-item-active': currentNavItem == 2 }, 'nav-item']"
              @mouseenter="showChildrens($event)"
              data-index="2"
            >
              <a href="javascript:;" class="link">
                <span class="text">电视</span>
              </a>
            </li>
            <li
              :class="[{ 'nav-item-active': currentNavItem == 3 }, 'nav-item']"
              @mouseenter="showChildrens($event)"
              data-index="3"
            >
              <a href="javascript:;" class="link">
                <span class="text">电脑</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="header-search">
          <form action="#" class="header-search-form">
            <el-input
              placeholder="请输入关键词"
              suffix-icon="el-icon-search"
              v-model="searchWords"
            >
            </el-input>
          </form>
        </div>
      </div>
      <!-- <transition name="slide"> -->
      <div
        ref="J_navMenu"
        class="header-nav-menu"
        style="display: none"
        @mouseenter="navMenuHover($event)"
        @mouseleave="navMenuleve()"
      ></div>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
var Transitions = {
  transition: 'transitionend',
  OTransition: 'oTransitionEnd',
  MozTransition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
}
export default {
  data() {
    return {
      searchWords: '',
      currentNavItem: null,
      jNavMenu: null,
      showNavMenu: false,
      transitionEvent: '',
    }
  },
  mounted() {
    // this.jNavMenu = new JNavMenu(this.$refs.J_navMenu)
    console.log(Transitions)
    this.jNavMenu = this.$refs.J_navMenu
    this.transitionEvent = this._whichTransitionEvent()
    let cbk = (function(that) {
      return function f() {
        // console.log('jNavMenu运动结束！')
        if (that.showNavMenu == false) {
          that.jNavMenu.style.display = 'none'
          that.jNavMenu.classList.remove('header-nav-menu-active')
        }
        // that.jNavMenu.removeEventListener(that.transitionEvent, f)
      }
    })(this)

    this.transitionEvent &&
      this.jNavMenu.addEventListener(this.transitionEvent, cbk)
  },
  destroyed() {
    // this.jNavMenu.removeEventListener(this.transitionEvent, f)
  },

  methods: {
    addListen: function() {},
    _whichTransitionEvent: function() {
      for (let t in Transitions) {
        if (this.jNavMenu.style[t] !== undefined) {
          return Transitions[t]
        }
      }
    },
    _upCls: function(dom) {
      dom.classList.add('slide-up')
      dom.classList.remove('slide-down')
    },
    _downCls: function(dom) {
      if (!dom.classList.contains('slide-down')) {
        dom.classList.add('slide-down')
      }
      // dom.classList.add('header-nav-menu-active')
      dom.classList.remove('slide-up')
    },
    showChildrens: function(event) {
      // console.log('进入', event.currentTarget)
      this.currentNavItem = event.currentTarget.dataset.index
      let childs = event.target.childNodes
      if (childs.length <= 1 && this.showNavMenu == false) return
      if (childs.length <= 1) {
        this.hiddenNavs()
        return
      }
      this.jNavMenu.style.display = 'block'
      this.showNavMenu = true

      let html = childs[1].innerHTML
      this.jNavMenu.innerHTML = html
      setTimeout(() => {
        this.jNavMenu.classList.add('header-nav-menu-active')
        this._downCls(this.jNavMenu)
      }, 120)
    },
    leveItem: function() {
      console.log('Itemleave ', this.showNavMenu)
      this.hiddenNavs()
    },
    hiddenNavs: function() {
      setTimeout(() => {
        this.showNavMenu = false
        this.currentNavItem = null
        this._upCls(this.jNavMenu)
      }, 180)
    },
    navMenuHover: function() {
      this.showNavMenu = true
    },
    navMenuleve: function() {
      console.log('navMenuleve ', this.showNavMenu)
      this.hiddenNavs()
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/config.scss';
$topbar-h: 40px;
$header-h: 100px;
.header {
  .nav-topbar {
    height: $topbar-h;
    background-color: $colorB;
    color: $colorE;
    .container {
      .topbar-left,
      .topbar-right {
        height: $topbar-h;
      }
      .sep {
        margin: 0 0.6em;
        color: $colorC;
      }
      .topbar-item {
        height: $topbar-h;
        line-height: $topbar-h;
        a {
          display: inline-block;
        }
      }
      .topbar-right {
        .topbar-cart {
          width: 120px;
          height: $topbar-h;
          margin-left: 15px;
          transition: all 0.2s;
          a {
            display: block;
            height: $topbar-h;
            line-height: $topbar-h;
            text-align: center;
            background: #424242;
            i.el-icon {
              margin-right: 4px;
            }
          }
        }
      }
    }
  }

  .site-header {
    z-index: 20;
    height: $header-h;
    .container {
      .header-logo {
        margin-right: 10px;
        .logo {
          display: block;
          width: 55px;
          height: 55px;
          position: relative;
          overflow: hidden;
          background: $colorA;
          &::after,
          &::before {
            content: ' ';
            position: absolute;
            top: 0;
            left: 0;
            width: 55px;
            height: 55px;
            z-index: 1;
            transition: all 0.2s;
          }
          &::before {
            background: url(//s02.mifile.cn/assets/static/image/mi-logo.png)
              no-repeat 50% 50%;
            opacity: 1;
          }
          &::after {
            background: url(//s02.mifile.cn/assets/static/image/mi-home.png)
              no-repeat 50% 50%;
            opacity: 0;
            margin-left: -55px;
            transform: scale(0.5);
          }
          &:hover {
            &::after {
              opacity: 1;
              transform: translate3D(55px, 0, 0);
            }
            &::before {
              opacity: 0;
              transform: translate3D(55px, 0, 0) scale(0.5);
            }
          }
          &:active {
            &::after {
              transform: translate3D(55px, 0, 0) scale(0.9);
            }
          }
        }
      }
      .header-nav {
        height: $header-h;
        .nav-item {
          float: left;
          .link {
            height: $header-h;
            line-height: $header-h;
            padding: 0 10px;
            display: block;
            &:hover {
              color: $colorA;
            }
          }
          .item-children {
            display: none;
          }
        }
        .nav-category {
          position: relative;
          float: left;
          width: 127px;
          padding-right: 15px;
          .link {
            display: block;
            height: $header-h;
            line-height: $header-h;
            text-align: right;
            visibility: hidden;
          }
        }
      }
      .header-search {
        .header-search-form {
          .el-input__inner {
            transition: width 0.4s;
          }
        }
      }
    }
    .header-nav-menu {
      position: absolute;
      top: $header-h;
      left: 0;
      z-index: 24;
      width: 100%;
      height: 0;
      border-top: 1px solid #e0e0e0;
      background: #fff;
      overflow: hidden;
      &.slide-up {
        height: 0;
      }
      &.slide-down {
        height: 200px;
      }
      .children-list li {
        position: relative;
        float: left;
        width: 180px;
        padding: 35px 12px 0;
        text-align: center;
      }
      .media-thumb {
        width: 160px;
        height: 110px;
        margin: 0 auto 16px;
        text-align: center;
        img {
          width: 160px;
          height: 110px;
        }
      }
      .title {
        line-height: 20px;
      }
      .price {
        line-height: 20px;
        color: $colorA;
      }
    }

    .header-nav-menu-active {
      border-bottom: 1px solid\9;
      -webkit-box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
      box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
      -webkit-transition: height 0.3s, -webkit-box-shadow 0.2s;
      transition: height 0.3s, -webkit-box-shadow 0.2s;
      transition: box-shadow 0.2s, height 0.3s;
      transition: box-shadow 0.2s, height 0.3s, -webkit-box-shadow 0.2s;
    }
  }
}
</style>
<style lang="scss">
@import '~assets/scss/config.scss';
.header-search {
  .header-search-form {
    .el-input__inner {
      // border-radius: 200px;
      transition: width 0.2s;
      width: 200px;
      &:focus {
        border: 1px solid $colorA;
        width: 230px;
      }
      &:focus + span {
        color: $colorA;
      }
    }
    .el-input__icon {
      transition: none;
    }
  }
}
</style>
