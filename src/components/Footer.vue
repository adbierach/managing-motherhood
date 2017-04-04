<template>
  <div class="footer container-fluid">
    <div class="row">
      <div class="footer-block col-xs-12 col-sm-4">
        <h3>Help is Available</h3>
        <div>
          <p>In Los Angeles County, visit the <a target="_blank" href="http://directory.maternalmentalhealthnow.org/">Maternal Mental Health Resource Directory</a>.&nbsp; Outside of Los Angeles County, visit <a href="http://www.postpartum.net">Postpartum Support International</a> or call 1-800-944-4773.</p></div>
        </div>
        <div class="footer-block col-xs-12 col-sm-4">
          <h3>Maternal Mental Health Now</h3>
          <ul>
            <li><a href="http://www.maternalmentalhealthnow.org/index.php/about-us">About Us</a></li>
            <li><a href="http://www.maternalmentalhealthnow.org/index.php/news">News</a></li>
            <li><a href="http://www.maternalmentalhealthnow.org/index.php/calendar">Calendar</a></li>
          </ul>
        </div>
      </div>
  </div>

</template>

<script>
  export default {
  }
</script>

<style>
.footer {
  min-height: 180px;
  background-color: #090D0F;
  color: #ffffff;
  padding: 5% 10%;
  line-height: 24px;
}

.footer-block {
  max-width: 350px;
}

p {
  color: #686868;
  font-size: 14px;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer h3 {
  text-transform: uppercase;
  color: #cbce00;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: bold;
}

.footer a {
  color: #a8a8a8;
  font-size: 14px;
  text-decoration: none;

}
.footer a:hover {
  color: #cbce00;
  text-decoration: none;
}

</style>
