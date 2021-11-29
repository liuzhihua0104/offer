const json = require('format-json');
const fs = require('fs');

class LogPlugin{
    constructor(options){
       this.options = options;
    }
    apply(compiler){ 
        compiler.hooks.run.tap('run',()=>{
            console.log('start run');
        })
        compiler.hooks.done.tapAsync('getStats',(stats)=>{
        console.log(this.options);
        //    stats.compilation.modules.forEach((item)=>{
        //        const source = item['resource'];
        //        const data = fs.readFileSync(source,{encoding:'utf8'})
        //        console.log(data);
        //    })
           const log =  json.plain(stats.toJson());
           const output = this.options.output;
           fs.writeFileSync(output,log);
        })
    }
}

module.exports = LogPlugin;
// 1 功能： loader做的事情 plugin也可以做

