<template>
    
            
            <div class="d-menuNav cf">
                <el-menu default-active="1-1-1" @open="handleOpen" @close="handleClose" @select="handleSelect" :collapse="false" :unique-opened="true" background-color="#000" text-color="#fff" active-text-color="#ffd04b">
                    
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">导航一</span>
                        </template>
                        <el-submenu index="1-1">
                            <span slot="title">选项</span>
                            <el-menu-item index="1-1-1" link="#/1">选项1</el-menu-item>
                            <el-menu-item index="1-1-2">选项2</el-menu-item>
                        </el-submenu>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">导航二</span>
                        </template>
                        <el-submenu index="2-1">
                            <span slot="title">选项</span>
                            <el-menu-item index="2-1-1">选项1</el-menu-item>
                            <el-menu-item index="2-1-2">选项2</el-menu-item>
                            <el-menu-item index="2-1-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>

                    <el-menu-item index="3">
                        <i class="el-icon-menu"></i>
                        <span slot="title">链接</span>
                    </el-menu-item>
                   
                </el-menu>
            </div>






</template>

<script>



export default {
    name: '',
    components : {
        
    },
    data () {
        return {
        }
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(key , keyPath , self){
            var li = $(self.$el);
            console.log(li.attr('link'));
        }
    },
    created () {

    },
    mounted(){
        var vue = this;
        $('.el-menu').css('height' , $(window).height());
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.d-menuNav{ position: absolute; left:0; top:0; width:200px; z-index: 1;  overflow: hidden;}
.d-menuNav .el-menu{  width:100%; }
</style>
