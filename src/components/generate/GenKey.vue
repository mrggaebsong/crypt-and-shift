<template>
	<div class="container-genkey">
	<div class="row">
<div class="col-sm-1">
</div>
<div class="col-sm-2">
	<h5>Select cipher</h5>
	</div>
<div class="col-sm-1">
</div>
<div class="col-sm-2">
	<h5>Select format</h5>
	</div>
<div class="col-sm-1">
</div>
<div class="col-sm-2">
	<h5>Select key size</h5>
	</div>
	</div>

<div class="row">
<div class="col-sm-1">
</div>
<div class="col-sm-2">
	<form>
	<br>
  <select name="cipher" class="custom-select" v-model="ciphers">
    <option selected>Select cipher</option>
    <option value="aes">AES</option>
    <option value="des">DES</option>
  </select>
	</form>
	</div>

<div class="col-sm-1">
</div>
<div class="col-sm-2">
	<form>
	<br>
  <select name="format" class="custom-select" v-model="format">
    <option selected>Select format</option>
    <option value="hex">hex</option>
    <option value="base64">base64</option>
  </select>
	</form>
	</div>

<div class="col-sm-1">
</div>
<div class="col-sm-2">
	<form>
	<br>
  <select name="keysize" class="custom-select" v-model="size">
    <option selected>Select key size</option>
    <option value="128">128-bit</option>
    <option value="196">196-bit</option>
    <option value="256">256-bit</option>
  </select>
	</form>
	</div>

<div class="col-sm-3">
    <button class="btn btn-success" @click="genKey">
        <a class="nav-link">Generate key</a>
    </button>
    </div>
</div>
<br>

    <div class="row">
    <div class="col">
    <form>
    <div class="form-group">
      <h5>Public key:</h5>
     <div class="form-group">
  <textarea class="form-control" rows="6" id="comment" v-model="randomKey.key"></textarea>
	</div>
    </div>
    </form>
    </div>

    <div class="col">
    <form>
    <div class="form-group">
      <h5>Private key:</h5>
    <div class="form-group">
  <textarea class="form-control" rows="6" id="comment" v-model="randomKey.iv"></textarea>
	</div>
    </div>
    </form>	
    </div>
    </div>
    </div>
</template>

<script>
  import axios from 'axios';
  export default {
    mounted() {
      console.log('Generating Random Key');
    },
    data: function() {
      return {
        ciphers: '',
        format: '',
        size: '',
        randomKey: {
          key: '',
          iv: ''
        }
      }
    },
    methods: {
      genKey(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('ciphers', this.ciphers);
        data.append('format', this.format);
        data.append('size', this.size);

        axios({
            method: 'post',
            url: 'http://localhost:3000/getRandomKey',
            data,
            headers: {
              "Accept": "application/form-data",
              "Content-Type": "application/form-data",
              "Access-Control-Allow-Origin": "http://localhost:3000",
              "Access-Control-Allow-Methods": "POST",
              "Access-Control-Allow-Credentials": true,
              "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
            }
          }).then(res => {
            this.randomKey = res.data;
            console.log(res.data);
          }).catch(function(){
            console.log('Failed', data)
          });
      }
    }
}
</script>

<style>
    .col {
        background-color: #85b3cc;
        border: 1px solid gray;
        margin: 40px;
        height: 250px;
        padding: 30px;
    }

    .container-genkey {
        text-align: left;
    }

    button {
        display: block;
        margin: 20px;
    }

    .genkey button {
        margin-top: 40px;
    }

    a {
        color: white;
    }

    a:hover {
        color: white;
    }
</style>
