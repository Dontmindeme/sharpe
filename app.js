import marked from 'marked'
import Prism from 'prismjs'
console.log('🎉 Using Sharpe 🌈')
marked.setOptions({
  breaks: true,
  gfm: true
})
document.querySelectorAll('[markdown]').forEach(elem => {
  elem.innerHTML = marked(elem.innerText)
})
document.querySelectorAll('code').forEach(elem => {
  elem.innerHTML = Prism.highlight(elem.innerText, Prism.languages[elem.getAttribute('lang') || 'html'], elem.getAttribute('lang') || 'html')
})
