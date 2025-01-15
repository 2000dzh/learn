// 查看 node_modules 文件夹中包含的依赖包
// dir node_modules | ls node_modules


// Windows系统下如何运行.sh脚本文件
// 简述就是在 Git Bash 里执行
// https://blog.csdn.net/weixin_45819759/article/details/131145136?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522170072200316800225541426%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=170072200316800225541426&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-1-131145136-null-null.142^v96^pc_search_result_base4&utm_term=windows10%20%E6%80%8E%E4%B9%88%E6%89%A7%E8%A1%8C%20.sh%E6%96%87%E4%BB%B6&spm=1018.2226.3001.4187


// 查询全局安装的包的路径
// npm root -g

// 查看全局已安装的包
// 会把包的依赖也列出来
// npm ls -g
// 加上层级控制显示深度,这样就只会显示安装的包了
// npm ls -g --depth 0

// 查看项目中已安装的包
// npm ls
// npm ls --depth 0
// 只显示生产环境的包
// npm ls --depth 0 --prod
// 只显示开发环境的包
// npm ls --depth 0 --dev

// npkill:一键卸载无用Node.js包的利器

// 快速删除 node-modules
// npx rimraf node_modules

// 创建限制项目node版本文件
// echo "v18.17.0" > .nvmrc