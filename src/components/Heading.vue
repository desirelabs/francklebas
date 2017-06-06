<template>
  <header>
    <div class="container site-title">
      <h1 class="">
        <a href="/">FranckLebas</a>
      </h1>
      <h2>Web artisan</h2>
      <div class="spacer spacer-mini"></div>
    </div>
    <div class="ui menu">
      <div class="menu-links">
        <router-link :to="{name:'Acceuil'}" exact class="item">
          <span>Accueil</span>
          <i class="home icon"></i>
        </router-link>
        <router-link :to="{name:'Portfolio'}" class="item">
          <span>Portfolio</span>
          <i class="image icon"></i>
        </router-link>
        <a href="http://desirelabs.fr" rel="nofollow" target="_blank" class="item">
          <span>Le blog</span>
          <i class="feed icon"></i>
        </a>
        <a href="#footer" class="item">
          <span>Contact</span>
          <i class="mail icon"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'heading'

}
</script>

<style lang="scss">
$primary: #F03861;

.ui.menu {
  flex-direction: column;
  box-shadow: none;
  border: none;
  .menu-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  .item {
    font-family: Montserrat, sans-serif;
    font-size: .9rem;
    line-height: 3rem;
    display: block;
    padding: 0 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: all .3s;
    box-sizing: border-box;

    .icon {
      display: none;
    }

    &::before {
      content: '';
      width: 0;
      display: inline-block;
      position: absolute;
      bottom: -5px;
      left: 32px;
      right: 32px;
      height: 3px;
      background-color: $primary;
    }
    span::after {
      content: '';
      width: 0;
      display: inline-block;
      position: absolute;
      bottom: -5px;
      left: 32px;
      right: 32px;
      height: 3px;
      background-color: $primary;
      transition: width .2s ease-in-out;
    }
    &.router-link-active,
    &:hover {
      background: none !important;
      span::after {
        content: '';
        width: calc(100% - 64px);
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  $primary: #F03861;

  .ui.menu  {
    flex-direction: column;
    box-shadow: none;
    border: none;
    .menu-links {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
    }
    .item {
      font-family: Montserrat, sans-serif;
      font-size: .9rem;
      line-height: 3rem;
      display: block;
      padding: 0 2rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: all .3s;
      box-sizing: border-box;
      
      .icon {
        display: none;
      }
      
      &::before {
        content: '';
        width: 0;
        display: inline-block;
        position: absolute;
        bottom: -5px;
        left: 32px;
        right: 32px;
        height: 3px;
        background-color: $primary;
      }
      span::after{
        content: '';
        width: 0;
        display: inline-block;
        position: absolute;
        bottom: -5px;
        left: 32px;
        right: 32px;
        height: 3px;
        background-color: $primary;
        transition: width .2s ease-in-out;
      }
      &.router-link-active,
      &:hover {
        background: none !important;
        span::after {
          content: '';
          width: calc(100% - 64px);
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {

    .ui.menu {
      position: fixed !important;
      bottom: 0;
      z-index: 1000;
      background-color: #fff;
      padding-bottom: 5px;
      width:100%;
      transition: all .5s ease-in;
      border-radius: 0;

      .menu-links {
        justify-content: space-around;
      }
      .item {
        padding:0;
        span {
          display: none;
        }
        .icon {
          display: block;
          color: #333;
          font-size: 1.4rem;
          line-height: 3rem;
          text-align: center;
          height: auto;
        }

        &.router-link-active,
        &:hover {
          background: none !important;
          .icon {
            color: $primary;
          }
        }
      }
    }
  }
}
</style>
