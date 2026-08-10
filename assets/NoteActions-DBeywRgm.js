import{j as o}from"./markdown-vendor-BYVb9p5x.js";import{r as f}from"./react-vendor-yehEGAti.js";const b={chineseName:"Donald AI 学习实验室",courseName:"AI业务人员实用课程",courseVersion:"v1.1",obsidianVault:"Donald-AI-Learning-Lab",obsidianContentPath:"content"};function h(e,a="open",c){const n=encodeURIComponent(b.obsidianVault),t=encodeURIComponent(e);if(a==="new"&&c){const l=encodeURIComponent(c);return`obsidian://new?vault=${n}&file=${t}&content=${l}`}return`obsidian://open?vault=${n}&file=${t}`}function N(e){return e==="special"?`${b.obsidianContentPath}/industry-awareness`:e==="appendix"?`${b.obsidianContentPath}/appendices`:`${b.obsidianContentPath}/phase-${e.padStart(2,"0")}`}const A=[{type:"learning-note",label:"学习笔记",fileName:"Learning Note",content:`---
course: Donald AI Learning Lab
course_version: v1.1
phase: 
lesson: 
status: in_progress
date: {{date}}
source: AI Learning Web
tags:
  - AI-Learning
  - learning-note
---

# 课程标题

## 本课核心概念

## 我的理解

## 与原有经验的联系

## 业务应用

## 仍不确定的内容

## 章末理解检查回答

## AI 反馈与纠正

## 下一步`},{type:"concept-card",label:"Concept Card",fileName:"Concept Card",content:`---
type: concept-card
course: Donald AI Learning Lab
course_version: v1.1
phase: 
concept: 
status: candidate
date: {{date}}
tags:
  - AI-Learning
  - concept-card
---

# 概念名称

## 一句话定义

## 是什么

## 为什么重要

## 业务场景

## 常见误区

## 风险边界

## 如何核实

## 如何验收

## 我的理解`},{type:"pass-record",label:"PASS 记录",fileName:"PASS Record",content:`---
type: pass-record
course: Donald AI Learning Lab
course_version: v1.1
phase: 
lesson: 
result: pending_review
date: {{date}}
reviewer: 
tags:
  - AI-Learning
  - pass-record
---

# PASS Check

## 问题与回答

## 评估结果

## 正确理解

## 需要补强

## 纠正记录

## 下一步`},{type:"business-application",label:"业务应用记录",fileName:"Business Application",content:`---
type: business-application
course: Donald AI Learning Lab
course_version: v1.1
phase: 
date: {{date}}
status: draft
tags:
  - AI-Learning
  - business-application
---

# 业务应用记录

## 业务场景

## 使用了哪些 AI 能力

## 输入材料

## AI 输出

## 人工判断与调整

## 最终成果

## 效果评估

## 经验教训`},{type:"mistake-correction",label:"纠错记录",fileName:"Mistake Correction",content:`---
type: mistake-correction
course: Donald AI Learning Lab
phase: 
date: {{date}}
status: active
tags:
  - AI-Learning
  - mistake-correction
---

# 错误或偏差

## 发生了什么

## 为什么发生

## 正确理解

## 修正方式

## 防止再次发生

## 相关课程`}];function m(e,a){const c=A.find(l=>l.type===e);if(!c)return"";let n=c.content;const t=new Date().toISOString().split("T")[0];return n=n.replace(/\{\{date\}\}/g,t),a&&(n=n.replace(/^(phase:\s*)$/m,`$1${a}`)),n}const L={"learning-note":"Learning Notes","concept-card":"Concept Cards","pass-record":"PASS Records","business-application":"Business Applications","mistake-correction":"Mistakes and Corrections"};function v(e){return e.replace(/[\\/:*?"<>|]/g,"-").trim()}function $({phase:e,phaseTitle:a}){const[c,n]=f.useState(""),t=s=>{n(s),setTimeout(()=>n(""),2500)},l=async(s,r)=>{try{await navigator.clipboard.writeText(s),t(`${r} 已复制到剪贴板`)}catch{const i=document.createElement("textarea");i.value=s,document.body.appendChild(i),i.select();try{document.execCommand("copy"),t(`${r} 已复制到剪贴板`)}catch{t("复制失败，请手动选择文本复制")}document.body.removeChild(i)}},g=(s,r)=>{const i=new Blob([s],{type:"text/markdown;charset=utf-8"}),u=URL.createObjectURL(i),d=document.createElement("a");d.href=u,d.download=`${r}.md`,document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(u),t(`${r}.md 已下载`)},p=(s,r)=>{const i=m(s,e),u=L[s];if(!u){t("未找到对应的笔记模板");return}const d=`notes/${u}/${v(r)} - Phase ${e}`,C=h(d,"new",i);window.location.href=C,setTimeout(()=>{t("已生成 Obsidian 请求；请确认是否已保存。未打开时可复制或下载。")},1500)};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"note-actions",children:[o.jsxs("button",{className:"note-action-btn",onClick:()=>p("learning-note",a),children:["✎"," 新建学习笔记"]}),o.jsxs("button",{className:"note-action-btn",onClick:()=>l(m("learning-note",e),"学习笔记模板"),children:["⎘"," 复制笔记模板"]}),o.jsxs("button",{className:"note-action-btn",onClick:()=>p("concept-card",a),children:["☷"," 创建 Concept Card"]}),o.jsxs("button",{className:"note-action-btn",onClick:()=>p("pass-record",a),children:["✓"," 创建 PASS 记录"]}),o.jsxs("button",{className:"note-action-btn",onClick:()=>p("mistake-correction",a),children:["⚠"," 追加纠错记录"]}),o.jsxs("button",{className:"note-action-btn",onClick:()=>g(m("learning-note",e),`Phase-${e}-Note`),children:["⬇"," 下载 Markdown"]})]}),c&&o.jsx("div",{className:"toast",children:c})]})}export{$ as N,N as a,h as b,b as c};
