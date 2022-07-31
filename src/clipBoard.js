import './index.less'

const copyEvent = function (ele, content) {
  ele.addEventListener('click', () => {
    navigator.clipboard.writeText(content.slice(0, -2)).then(res => {
      navigator.clipboard.readText().then(res => {
        console.log();
      })
    })
  })
}

const createClipboard = function ({ innerData, width = '', height = '', textColor = '', fontWeight = '700', fontSize = '18' }) {
  let wrap = document.createElement('div');
  let pre = document.createElement('pre');
  let copyIco = document.createElement('span')

  pre.innerHTML = innerData;
  pre.style.cssText = `width: ${width}px;
                      height: ${height}px;
                      color: ${textColor};
                      font-weight: ${fontWeight};
                      font-size: ${fontSize}px
                      `;
  wrap.classList.add('wrap');

  copyIco.innerText = '复制';
  copyIco.classList.add('copy-ico');
  copyIco.addEventListener('click', function () {
    this.style.setProperty('background-color', '#aaa')
    this.style.setProperty('color', '#eee')
    this.innerText = '复制成功'
    setTimeout(() => {
      this.style.setProperty('background-color', '#bbb')
      this.style.setProperty('color', '#333333')
      this.innerText = '复制'
    }, 1000);
  })

  wrap.appendChild(pre);
  wrap.appendChild(copyIco);

  copyEvent(copyIco, wrap.textContent)

  return wrap;
}

export default createClipboard;