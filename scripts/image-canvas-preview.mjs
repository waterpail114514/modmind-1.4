import {createServer} from 'node:http'
import {build} from 'esbuild'
import fs from 'node:fs/promises'
import path from 'node:path'
const root=path.resolve(import.meta.dirname,'..')
const output=path.join(root,'test-results/image-canvas')
await fs.mkdir(output,{recursive:true})
await build({entryPoints:[path.join(root,'scripts/fixtures/image-canvas-ui.tsx')],outfile:path.join(output,'fixture.js'),bundle:true,jsx:'automatic',define:{'import.meta.env':'{}','import.meta.hot':'undefined'}})
const paths={'/fixture.js':path.join(output,'fixture.js'),'/fixture.css':path.join(output,'fixture.css')}
const server=createServer(async(req,res)=>{try{
  if(req.url==='/' || req.url?.startsWith('/?')){res.setHeader('Content-Type','text/html');res.end('<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><title>ModMind 图像画布验收</title><link rel="stylesheet" href="/fixture.css"></head><body style="margin:0"><div id="workspace"></div><script src="/fixture.js"></script></body></html>');return;}
  const file=paths[req.url];if(!file){res.writeHead(404);res.end();return;}
  res.setHeader('Content-Type',file.endsWith('.css')?'text/css':'text/javascript');res.end(await fs.readFile(file));
}catch(error){res.writeHead(500);res.end(String(error));}})
server.listen(4332,'127.0.0.1',()=>console.log('Image canvas QA: http://127.0.0.1:4332'))
