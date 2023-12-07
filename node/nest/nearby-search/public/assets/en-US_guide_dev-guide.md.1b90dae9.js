import{o as s,c as o,b as e,a as p,e as n,d as a,_ as l}from"./app.6250c322.js";const c=n(`<h1 id="local-development" tabindex="-1">Local Development <a class="header-anchor vp-link" href="#local-development" aria-hidden="true">#</a></h1><h2 id="bootstrap-project" tabindex="-1">Bootstrap project <a class="header-anchor vp-link" href="#bootstrap-project" aria-hidden="true">#</a></h2><p>With command</p><div class="language-shell"><pre><code><span class="token function">pnpm</span> i
</code></pre></div><p>the project will install all dependencies.</p><h2 id="website-preview" tabindex="-1">Website preview <a class="header-anchor vp-link" href="#website-preview" aria-hidden="true">#</a></h2><p>With command</p><div class="language-shell"><pre><code><span class="token function">pnpm</span> docs:dev
</code></pre></div><p>the project will launch website for you to preview all existing component.</p><h2 id="local-development-1" tabindex="-1">Local development <a class="header-anchor vp-link" href="#local-development-1" aria-hidden="true">#</a></h2>`,10),i=a("See "),r={href:"https://github.com/element-plus/element-plus/blob/dev/CONTRIBUTING.md",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},d=a("Local development guide"),u=n(`<ol><li>With command</li></ol><div class="language-shell"><pre><code><span class="token function">pnpm</span> dev
</code></pre></div><p>will start the local development environment.</p><ol start="2"><li>Add your component into <code>play/src/App.vue</code></li></ol><blockquote><p>App.vue</p></blockquote><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComponentYouAreDeveloping</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// make sure this component is registered in @element-plus/components</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentYouAreDeveloping <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/components&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Modify <code>App.vue</code> file per your needs to get things work.</p>`,7),g='{"title":"Local Development","description":"","frontmatter":{"title":"Local Development","lang":"en-US"},"headers":[{"level":2,"title":"Bootstrap project","slug":"bootstrap-project"},{"level":2,"title":"Website preview","slug":"website-preview"},{"level":2,"title":"Local development","slug":"local-development-1"}],"relativePath":"en-US/guide/dev-guide.md","lastUpdated":1666363705000}',_={},b=Object.assign(_,{__name:"dev-guide",setup(k){return(m,v)=>{const t=l;return s(),o("div",null,[c,e("p",null,[i,e("a",r,[d,p(t,{class:"link-icon"})])]),u])}}});export{g as __pageData,b as default};
