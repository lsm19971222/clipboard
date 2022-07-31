import './index.less'

const copyEvent = function(ele, content) {
  ele.addEventListener('click', () => {
    navigator.clipboard.writeText(content.slice(0, -2)).then(res => {
      navigator.clipboard.readText().then(res => {
        console.log(res)
      })
    })
  })
}

const createClipboard = function({innerData, width = '', height = '', textColor = ''}) {
  let wrap = document.createElement('div');
  let pre = document.createElement('pre');
  let copyIco = document.createElement('span')

  pre.innerHTML = innerData;
  wrap.classList.add('wrap');
  wrap.style.cssText = `width: ${width}px; height: ${height}px; color: ${textColor}; `;
  copyIco.innerText = '复制';
  copyIco.classList.add('copy-ico');
  copyIco.addEventListener('click', function(){
    this.style.setProperty('background-color', '#aaa')
    this.style.setProperty('color', 'gray')
    setTimeout(() => {
      this.removeEventListener('click')
    });
  })

  copyEvent(copyIco, wrap.textContent)

  wrap.appendChild(pre);
  wrap.appendChild(copyIco);
  return wrap;
}

export default createClipboard;