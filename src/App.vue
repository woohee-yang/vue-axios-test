<template>
  <div id="app" class="container">
    <button class="btn btn-sm btn-primary" @click="getAllData">Get All</button>
    <br/>
<!--    {{ this.get_result }}-->
    <p v-for="(item, index) in this.get_result" :key="index">
      question : {{item.quest}} <br/>
      answer : {{item.ans}}<br/>
      <a v-if="new String(item.file).length > 0" :href="item.file">file : {{item.file}}</a><br/>
<!--      {{this.downloadAttachment}}-->
    </p>

  </div>
</template>

<script>

import axios from "axios";

export default{
  name : "App",
  data() {
    return{
      get_result:""
    }
  },

  methods : {
    // fortmatResponse(res){
    //   return JSON.stringify(res, null, 2);
    // },

    async getAllData(){
      try{
        const res = await axios.get("http://192.168.10.15:8080/test.json");

        const result = {
          status : res.status + "-" + res.statusText,
          headers : res.headers,
          data : res.data,
        };




        console.log(result.data)

        this.get_result = Array.from(result.data.data, (e) => {
          return{
            quest: e.q,
            ans: e.a,
            file: e.f
          }
        })


        // this.get_result = new Map(Object.entries(result.data.data))
        // console.log(Object.entries(result.data.data))
        let i = 0;
        console.log(this.get_result.length)
        console.log(this.get_result.file)
        console.log("file type : ", new String(this.get_result.file).length)

        for(let k of this.get_result){
          console.log(i, ":", k.quest)
          i++;
        }
        console.log(this.get_result.length)
      } catch(err){
        console.log("error!")
      }
    },

    replaceAll(str, searchStr, replaceStr){
      return str.split(searchStr).join(replaceStr)
    },

    async downloadAttachment(){
      const url = window.URL.createObjectURL(new Blob([this.get_result.file]));
      const link = document.createElement('a');
      link.href = url;
      const attachFileName = this.replaceAll(decodeURI(this.get_result.file))

      link.setAttribute('download', attachFileName);
      document.body.appendChild(link);
      link.click();
    }

    // async getDataById(){
    //   const id = this.$refs.get_id.value;
    //
    //   if(id){
    //     try{
    //       const res = await http.get('/tutorials/${id}');
    //
    //       const result = {
    //         status : res.status + "-" + res.statusText,
    //         headers : res.headers,
    //         data: res.data,
    //       };
    //
    //       this.getREsult = this.formatResponse(result);
    //     } catch(err){
    //       this.getResult = this.formatResponse(err.response?.data) || err;
    //     }
    //   }
    // },
    //
    //
    // async getDataByTitle(){
    //   const title = this.$refs.get_title.value;
    //
    //   if(title){
    //     try{
    //       const res = await http.get("/tutorials", {
    //         params : {
    //           title : title,
    //         },
    //       });
    //
    //       const result = {
    //         status: res.status + "-" + res.statusText,
    //         headers : res.headers,
    //         data: res.data,
    //       };
    //
    //       this.getREsult = this.fortmatResponse(result);
    //     } catch(err) {
    //       this.getResult = this.fortmatResponse(err.response?.data) || err;
    //     }
    //   }
    // },
    //
    // clearGetOutput(){
    //   this.getResult = null;
    // },
  }
}
</script>



<!--<template>-->
<!--  <h1>{{ items }}</h1>-->
<!--</template>-->
<!--<script>-->
<!--  import axios from 'axios'-->

<!--  export default{-->
<!--    data(){-->
<!--      return {-->
<!--        url : '/test.json',-->
<!--        items:[],-->
<!--        num_qa: 1-->
<!--      }-->
<!--    },-->

<!--    methods: {-->
<!--      loadData(){-->
<!--        axios.get(this.url).then((res) => {-->
<!--          console.log(res)-->
<!--          if(res.status == '200'){-->
<!--            console.log(res.data.data)-->
<!--            this.items = res.data.data-->
<!--          }-->
<!--        }).catch(function(error){-->
<!--          console.log(error.toJSON());-->
<!--          // this.$alert(error)-->
<!--        })-->
<!--      }-->
<!--    }-->
<!--  }-->


<!--</script>-->

<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <h1>Axios Test</h1>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->
<!--&lt;!&ndash;<script src="https://unpkg.com/axios/dist/axios.min.js"></script>&ndash;&gt;-->
<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;import axios from 'axios'&ndash;&gt;-->
<!--&lt;!&ndash;window.onload = function() {&ndash;&gt;-->
<!--&lt;!&ndash;  console.log("");&ndash;&gt;-->
<!--&lt;!&ndash;  console.log("[window onload] : [start]");&ndash;&gt;-->
<!--&lt;!&ndash;  console.log("");&ndash;&gt;-->

<!--&lt;!&ndash;  testMain();&ndash;&gt;-->
<!--&lt;!&ndash;};&ndash;&gt;-->

<!--&lt;!&ndash;function testMain(){&ndash;&gt;-->
<!--&lt;!&ndash;  console.log("");&ndash;&gt;-->
<!--&lt;!&ndash;  console.log("[testMain] : [start]");&ndash;&gt;-->
<!--&lt;!&ndash;  console.log("");&ndash;&gt;-->

<!--&lt;!&ndash;  let REQ_URL = "http://jsonplaceholder.typicode.com/posts";&ndash;&gt;-->
<!--&lt;!&ndash;  let REQ_PARAM = {"userId" : 1, "id" : 1};&ndash;&gt;-->

<!--&lt;!&ndash;  console.log("");&ndash;&gt;-->
<!--&lt;!&ndash;  console.log("REQ_TYPE : " + "POST BODY JSON")&ndash;&gt;-->
<!--&lt;!&ndash;  console.log("REQ_URL : " + REQ_URL);&ndash;&gt;-->
<!--&lt;!&ndash;  console.log("");&ndash;&gt;-->

<!--&lt;!&ndash;  axios({&ndash;&gt;-->
<!--&lt;!&ndash;    method : "post",&ndash;&gt;-->
<!--&lt;!&ndash;    url : REQ_URL,&ndash;&gt;-->
<!--&lt;!&ndash;    data : JSON.stringify(REQ_PARAM),&ndash;&gt;-->
<!--&lt;!&ndash;    headers: {&ndash;&gt;-->
<!--&lt;!&ndash;      "Content-Type" : "application/json; charset=utf-8"&ndash;&gt;-->
<!--&lt;!&ndash;    },&ndash;&gt;-->
<!--&lt;!&ndash;    timeout : 5000&ndash;&gt;-->
<!--&lt;!&ndash;  }).then(function(response) {&ndash;&gt;-->
<!--&lt;!&ndash;    console.log("");&ndash;&gt;-->
<!--&lt;!&ndash;    console.log("RESPONSE : " + JSON.stringify(response.data));&ndash;&gt;-->
<!--&lt;!&ndash;    console.log("");&ndash;&gt;-->
<!--&lt;!&ndash;  }).catch(function(error){&ndash;&gt;-->
<!--&lt;!&ndash;    console.log("")&ndash;&gt;-->
<!--&lt;!&ndash;    console.log("ERROR : " + JSON.stringify(error));&ndash;&gt;-->
<!--&lt;!&ndash;    console.log("");&ndash;&gt;-->
<!--&lt;!&ndash;  })&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->