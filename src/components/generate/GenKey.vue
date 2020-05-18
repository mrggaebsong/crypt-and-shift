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
  <select name="cipher" class="custom-select" v-model="cipher">
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
  <select name="keysize" class="custom-select" v-model="keysize">
    <option selected>Select key size</option>
    <option value="128">128-bit</option>
    <option value="196">196-bit</option>
    <option value="256">256-bit</option>
  </select>
	</form>
	</div>

<div class="col-sm-3">
    <button class="btn btn-success" v-on:click="genKey">
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
  <textarea class="form-control" rows="6" id="comment" v-on:change="showKey()" v-model="randomKey.publicKey"></textarea>
	</div>
    </div>
    </form>
    </div>

    <div class="col">
    <form>
    <div class="form-group">
      <h5>Private key:</h5>
    <div class="form-group">
  <textarea class="form-control" rows="6" id="comment" v-on:change="showKey()" v-model="randomKey.privateKey"></textarea>
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
    data: function() {
      return {
        cipher: '',
        format: '',
        keysize: 0,
        randomKey: {
          publicKey: '',
          privateKey: ''
        }
      }
    },
    methods: {
      genKey() {
        const genKeyData = {
            ciphers: this.$cipher,
            outputformat: this.$format,
            key_size: this.$keysize
        };

        axios.post('/getRandomKey', genKeyData).then(function(){
          console.log(genKeyData);
          console.log('Success!');
        }).catch(function(){
          console.log(genKeyData);
          console.log('Failed')
        });
      },
      showKey() {
        axios.get('/getRandomKey').then(response => {
          this.randomKey = response.ret
        }).catch(e => {
          this.error.push(e)
        })
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
