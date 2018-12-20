# react+springboot《视频网站》 （未完成）

## 介绍下目录文件
1. javabishe是包含了前台后台的java代码
    * admin是后台项目
    * core是核心项目
    * front-desk
2. my-admin是后台界面
3. my-frontDesk是前台界面

## 详细介绍下各个项目文件
1. admin项目  
    包含了后台使用而制作的工具类，控制器，springSecurity  
    若是需要启动添加里面需要的jar外即可，我运行的java是1.8
2. front-desk项目  
    包含了前台使用而制作的工具类，控制器  
    若是需要启动添加里面需要的jar外即可，我运行的java是1.8
3. core项目  
    包含了实体类，dao层，service层，前后台都可以用到的类
4. my-admin项目  
    使用了蚂蚁金服的ant-design-pro，此外没有添加额外的模块 
    下载依赖  
    `npm install`  
    运行  
    `npm start`    
5. my-frontDesk项目  
    create-react-app搭建的项目  
    添加的模块：axios,jquery,antd,redux,react-router-dom,video-react
    下载依赖  
    `npm install`    
    运行  
    `npm start`    

# 前台模块
1. 用户模块
    * 注册
    * 登陆
    * 修改密码
2. 视频模块
    * 视频列表
    * 分类视频
    * 视频推荐
    * 视频播放
    * 视频上传
# 后台模块
1. 管理员模块
    * 登陆
    * 注册
    * 修改密码
    * 修改个人信息
    * （超级管理员admin）
        * 查看管理员列表
        * 查看管理员信息
        * 分配角色
2. 前台用户管理模块
    * 用户列表
    * 用户冻结
    * 用户详细信息
    * 用户删除
3. 视频管理
    * 视频分类(增删改查)
    * 视频列表
    * 视频审核
    * 高级搜索
4. 前台头部图片管理
    * 状态选择（显示和关闭）
    * 图片上传
    * 删除
5. 前台轮播图片管理
    * 状态选择（显示和关闭）
    * 图片上传
    * 删除

# 目前出现问题
1.  用户上传视频经过后端上传到阿里云oss保存，
    后端上传视频时间长，前端报错500.
2.  admin和front-desk项目无法引用core里面引用的jar，      
    在core的pom.xml配置的jar需要在admin和front-desk的pom.xml添加  
3.  core里的有个实体类BaseEntity,有着id和createTime属性  
    在admin和fron-desk在dao层查询的实体对象获取Id或者createTime都会报错




