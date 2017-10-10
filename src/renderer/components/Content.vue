<template>
  <div class="cf-ns nl2 nr2 mw8-ns center ma3 ">
    <div class="fl-ns w-60-ns ph2 h1-ns">
      <!-- IMAGE HEAD -->
      <div class="cf-ns nl1 nr2 h9 pa1">
        <img src="https://accuweather.brightspotcdn.com/88/ac/35ae029048ac85555f0f6535a88f/new-zealand-flooding.jpg" alt="Flooding"/>
      </div>

      <!-- TITLE -->
      <div class="bg-white pa1 mv2 ph3-ns ba br3 bw0.5">
        <h2 class="">Apocalypse Anonymous Support Group</h2>
        <a class="f6 link dim ba bw0.5 ph3 pv2 mb2 dib black f4 fw6 db link" href="#0">&#10004; Joined</a>
        <a class="f6 link dim ba bw0.5 ph3 pv2 mb2 dib black f4 fw6 db link" href="#0">&#x1F514; &nbsp; Notifications</a>
      </div>

      <!-- MAKE A POST-->
      <div class=" mv3 lh-copy mv1 pa3 f6 ba br3 bw0.5 bg-white shadow-1">
        <p>
          <b><i class="material-icons" style="font-size:15px">edit</i> Write a Post:</b></p>
      
          <!-- Write a Post -->
            <textarea name="message" rows="10" cols="70"></textarea>
            <br></br>
          <!-- Add Media -->
        <button type="button" onclick="alert('Sorry! The service is currently disrupted.')"><i class="material-icons" style="font-size:15px">image</i> Add an image</button>
        <button type="button" onclick="alert('Sorry! The service is currently disrupted.')"> <i class="material-icons" style="font-size:15px">add_a_photo</i>  Add a video</button>
        <br></br>
        <a class="f6 link dim ph2 pv0.3 br2 mb2 dib white bg-dark-blue" href="#0">submit</a>
      </div>
      <slot></slot>
    </div>
    <a-a-side-bar/>
  </div>
</template>

<script>
  import AASideBar from 'components/SideBar';

  export default {
    name: 'Content',
    components: {
      AASideBar,
    },
    data() {
      return {};
    },
    created() {
    },
    beforeDestroy() {
    },
    computed: {
    },
    methods: {
    },
};
</script>
