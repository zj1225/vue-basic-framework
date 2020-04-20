<template>
    <div class="d-main cf">
        
            <leftMenu></leftMenu>



            <el-drawer title="我是标题" :visible.sync="drawer" :with-header="true" :wrapperClosable="false" size="50%" :append-to-body="true" :destroy-on-close="true">
                <span>我来啦!</span>
                <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                    <el-button @click="onButtonClick">再打开</el-button>
                </el-tooltip>
                <el-drawer title="我是标题2" :visible.sync="drawerInner" :with-header="true" :wrapperClosable="false" :append-to-body="true" :destroy-on-close="true">
                    <span>我来啦!!!!</span>
                </el-drawer>
            </el-drawer>

    </div>
</template>

<script>

import leftMenu from '@/components/layers/leftMenu'
import { Chart } from '@antv/g2'
import { indexApi } from '@/api/index'


export default {
    name: '',
    components : {
        leftMenu
    },
    data () {
        return {
            api : new indexApi(),
            drawer : true,
            drawerInner : false
        }
    },
    methods:{
        onButtonClick (){
            this.drawerInner = this.drawerInner ? false : true;
        }
    },
    created () {

    },
    mounted(){
        var vue = this;
        //接口调用
        // vue.api.getListByPage('baidu.com' , {currentPage:1 , pageSize:1 , name : '1'});
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
